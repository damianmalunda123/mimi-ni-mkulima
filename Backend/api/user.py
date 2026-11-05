import asyncio
import hashlib
import hmac
import logging
import re
import secrets
import smtplib
import time
from collections import defaultdict, deque
from email.message import EmailMessage
from typing import Literal

import httpx
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel, Field

from core.config import settings

router = APIRouter()
logger = logging.getLogger(__name__)
OTP_TTL_SECONDS = 600
OTP_MAX_ATTEMPTS = 5
OTP_SEND_LIMIT = 3
OTP_IP_SEND_LIMIT = 10
OTP_SEND_WINDOW_SECONDS = 3600
OTP_SECRET = secrets.token_bytes(32)
OTP_CHALLENGES = {}
OTP_RESET_TOKENS = {}
OTP_SENDS = defaultdict(deque)


class VerificationRequest(BaseModel):
    channel: Literal["email", "sms"]
    destination: str = Field(min_length=3, max_length=254)


class VerificationConfirmation(BaseModel):
    challenge_id: str = Field(min_length=20, max_length=100)
    code: str = Field(pattern=r"^\d{6}$")


class PasswordResetCompletion(BaseModel):
    reset_token: str = Field(min_length=30, max_length=100)


def normalize_destination(channel: str, destination: str) -> str:
    value = destination.strip()
    if channel == "email":
        value = value.lower()
        if not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", value):
            raise HTTPException(status_code=422, detail="Enter a valid email address.")
        return value

    value = re.sub(r"[\s().-]", "", value)
    if value.startswith("00"):
        value = "+" + value[2:]
    elif value.startswith("0"):
        value = "+255" + value[1:]
    elif not value.startswith("+"):
        value = "+" + value
    if not re.fullmatch(r"\+[1-9]\d{7,14}", value):
        raise HTTPException(status_code=422, detail="Enter a valid international phone number.")
    return value


def send_email_code(destination: str, code: str) -> None:
    sender = settings.SMTP_FROM_EMAIL or settings.SMTP_USERNAME
    message = EmailMessage()
    message["Subject"] = "MIMI NI MKULIMA verification code"
    message["From"] = sender
    message["To"] = destination
    message.set_content(f"Your verification code is {code}. It expires in 10 minutes.")

    client = smtplib.SMTP_SSL if settings.SMTP_PORT == 465 else smtplib.SMTP
    with client(settings.SMTP_HOST, settings.SMTP_PORT, timeout=15) as server:
        if settings.SMTP_PORT != 465 and settings.SMTP_STARTTLS:
            server.starttls()
        if settings.SMTP_USERNAME:
            server.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
        server.send_message(message)


async def send_sms_code(destination: str, code: str) -> None:
    url = f"https://api.twilio.com/2010-04-01/Accounts/{settings.TWILIO_ACCOUNT_SID}/Messages.json"
    async with httpx.AsyncClient(timeout=15) as client:
        response = await client.post(
            url,
            data={
                "To": destination,
                "From": settings.TWILIO_FROM_NUMBER,
                "Body": f"MIMI NI MKULIMA verification code: {code}. Expires in 10 minutes.",
            },
            auth=(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN),
        )
        response.raise_for_status()


@router.post("/password-reset/send")
async def send_password_reset_code(payload: VerificationRequest, request: Request):
    destination = normalize_destination(payload.channel, payload.destination)
    if payload.channel == "email":
        if not settings.SMTP_HOST or not (settings.SMTP_FROM_EMAIL or settings.SMTP_USERNAME):
            raise HTTPException(status_code=503, detail="Email verification is not configured.")
    elif not all((settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN, settings.TWILIO_FROM_NUMBER)):
        raise HTTPException(status_code=503, detail="SMS verification is not configured.")

    current_time = time.monotonic()
    source_ip = request.client.host if request.client else "unknown"
    send_key = f"{source_ip}:{payload.channel}:{destination}"
    recent_sends = OTP_SENDS[send_key]
    ip_sends = OTP_SENDS[f"{source_ip}:all"]
    while recent_sends and current_time - recent_sends[0] > OTP_SEND_WINDOW_SECONDS:
        recent_sends.popleft()
    while ip_sends and current_time - ip_sends[0] > OTP_SEND_WINDOW_SECONDS:
        ip_sends.popleft()
    if len(recent_sends) >= OTP_SEND_LIMIT or len(ip_sends) >= OTP_IP_SEND_LIMIT:
        raise HTTPException(status_code=429, detail="Too many verification requests. Try again later.")
    recent_sends.append(current_time)
    ip_sends.append(current_time)

    code = f"{secrets.randbelow(1_000_000):06d}"
    try:
        if payload.channel == "email":
            await asyncio.to_thread(send_email_code, destination, code)
        else:
            await send_sms_code(destination, code)
    except Exception as exc:
        logger.exception("Could not deliver password reset code")
        raise HTTPException(status_code=502, detail="Could not deliver verification code.") from exc

    for challenge_id, challenge in list(OTP_CHALLENGES.items()):
        if challenge["expires_at"] <= current_time or (challenge["channel"] == payload.channel and challenge["destination"] == destination):
            OTP_CHALLENGES.pop(challenge_id, None)
    for reset_token, reset in list(OTP_RESET_TOKENS.items()):
        if reset["expires_at"] <= current_time or (reset["channel"] == payload.channel and reset["destination"] == destination):
            OTP_RESET_TOKENS.pop(reset_token, None)
    challenge_id = secrets.token_urlsafe(24)
    digest = hmac.new(OTP_SECRET, f"{challenge_id}:{code}".encode(), hashlib.sha256).hexdigest()
    OTP_CHALLENGES[challenge_id] = {
        "channel": payload.channel,
        "destination": destination,
        "digest": digest,
        "expires_at": current_time + OTP_TTL_SECONDS,
        "attempts": 0,
    }
    return {"challenge_id": challenge_id, "expires_in": OTP_TTL_SECONDS}


@router.post("/password-reset/confirm")
async def confirm_password_reset_code(payload: VerificationConfirmation):
    challenge = OTP_CHALLENGES.get(payload.challenge_id)
    if not challenge or challenge["expires_at"] <= time.monotonic():
        OTP_CHALLENGES.pop(payload.challenge_id, None)
        raise HTTPException(status_code=400, detail="Verification code is invalid or expired.")
    if challenge["attempts"] >= OTP_MAX_ATTEMPTS:
        OTP_CHALLENGES.pop(payload.challenge_id, None)
        raise HTTPException(status_code=429, detail="Too many incorrect verification attempts.")

    challenge["attempts"] += 1
    digest = hmac.new(OTP_SECRET, f"{payload.challenge_id}:{payload.code}".encode(), hashlib.sha256).hexdigest()
    if not hmac.compare_digest(challenge["digest"], digest):
        if challenge["attempts"] >= OTP_MAX_ATTEMPTS:
            OTP_CHALLENGES.pop(payload.challenge_id, None)
        raise HTTPException(status_code=400, detail="Verification code is invalid or expired.")

    OTP_CHALLENGES.pop(payload.challenge_id, None)
    reset_token = secrets.token_urlsafe(32)
    OTP_RESET_TOKENS[reset_token] = {
        "channel": challenge["channel"],
        "destination": challenge["destination"],
        "expires_at": time.monotonic() + OTP_TTL_SECONDS,
    }
    return {"reset_token": reset_token, "expires_in": OTP_TTL_SECONDS}


@router.post("/password-reset/complete")
async def complete_password_reset(payload: PasswordResetCompletion):
    reset = OTP_RESET_TOKENS.pop(payload.reset_token, None)
    if not reset or reset["expires_at"] <= time.monotonic():
        raise HTTPException(status_code=400, detail="Password reset authorization is invalid or expired.")
    return {"reset_allowed": True}

@router.get("/me")
async def read_user_me():
    raise HTTPException(
        status_code=501,
        detail="User authentication is not configured on this backend.",
    )
