import asyncio
import hashlib
import hmac
import logging
import re
import secrets
import sqlite3
import time
from collections import defaultdict, deque
from datetime import datetime, timezone, timedelta
from typing import Literal

import httpx
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel, Field

from api.communication import current_user, database, disconnect_user, public_user, update_password_by_destination
from core.config import settings
from core.email import send_password_reset_email, send_username_change_email

router = APIRouter()
logger = logging.getLogger(__name__)

OTP_TTL_SECONDS = 600
OTP_MAX_ATTEMPTS = 5
OTP_SEND_LIMIT = 10
OTP_IP_SEND_LIMIT = 30
OTP_SEND_WINDOW_SECONDS = 3600
OTP_SECRET = secrets.token_bytes(32)

OTP_CHALLENGES = {}
OTP_RESET_TOKENS = {}
USERNAME_CHALLENGES = {}
OTP_SENDS = defaultdict(deque)


class VerificationRequest(BaseModel):
    channel: Literal["email", "sms"]
    destination: str = Field(min_length=3, max_length=254)


class VerificationConfirmation(BaseModel):
    challenge_id: str = Field(min_length=20, max_length=100)
    code: str = Field(pattern=r"^\d{6}$")


class PasswordResetCompletion(BaseModel):
    reset_token: str = Field(min_length=30, max_length=100)
    new_password: str = Field(min_length=6, max_length=100)


class UsernameChangeRequest(BaseModel):
    new_username: str = Field(min_length=3, max_length=50)


class UsernameChangeConfirmation(BaseModel):
    challenge_id: str = Field(min_length=20, max_length=100)
    code: str = Field(pattern=r"^\d{6}$")


def mask_email(email: str) -> str:
    if "@" not in email:
        return email
    name, domain = email.split("@", 1)
    return f"{name[:1]}***@{domain}"


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


def compute_user_activity_streak(user_id: str, conn: sqlite3.Connection) -> int:
    rows = conn.execute(
        "SELECT active_date FROM comm_user_activity WHERE user_id=? ORDER BY active_date DESC",
        (user_id,),
    ).fetchall()
    if not rows:
        return 0
    today = datetime.now(timezone.utc).date()
    dates = []
    for r in rows:
        try:
            dates.append(datetime.strptime(r["active_date"], "%Y-%m-%d").date())
        except Exception:
            pass
    dates = sorted(set(dates), reverse=True)
    if not dates or dates[0] not in (today, today - timedelta(days=1)):
        return 0
    streak = 1
    for i in range(1, len(dates)):
        if dates[i] == dates[i - 1] - timedelta(days=1):
            streak += 1
        else:
            break
    return streak


def check_username_eligibility(user_row: sqlite3.Row, conn: sqlite3.Connection) -> tuple[bool, list[dict], str]:
    now_ts = int(time.time())
    created_at = user_row["created_at"]
    keys = user_row.keys() if hasattr(user_row, "keys") else []
    last_changed = user_row["last_username_changed_at"] if "last_username_changed_at" in keys else None
    user_id = user_row["id"]

    # 1. 6 months registration (180 days)
    age_seconds = now_ts - created_at
    age_days = age_seconds // 86400
    is_six_months_old = age_seconds >= 180 * 86400
    remaining_age_days = max(0, 180 - age_days)

    # 2. 2 weeks (14 days) consecutive activity
    streak = compute_user_activity_streak(user_id, conn)
    is_two_weeks_active = streak >= 14

    # 3. 2 months (60 days) cooldown period
    if last_changed is None:
        is_cooldown_passed = True
        cooldown_remaining_days = 0
        cooldown_elapsed_days = None
    else:
        elapsed_seconds = now_ts - last_changed
        cooldown_elapsed_days = elapsed_seconds // 86400
        is_cooldown_passed = elapsed_seconds >= 60 * 86400
        cooldown_remaining_days = max(0, 60 - cooldown_elapsed_days)

    criteria = [
        {
            "id": "six_months",
            "title": "Umri wa Akaunti (Miezi 6)",
            "title_en": "Account Age (6 Months)",
            "required": "Angalau miezi 6 (siku 180) tangu kusajiliwa",
            "current": f"Siku {age_days} tangu kusajiliwa",
            "met": is_six_months_old,
            "message": (
                "Kigezo kimekamilika (Akaunti ina zaidi ya miezi 6)."
                if is_six_months_old
                else f"Akaunti haijafikisha miezi 6 tangu kusajiliwa (imebaki siku {remaining_age_days})."
            ),
        },
        {
            "id": "two_weeks_active",
            "title": "Utendaji Mfululizo (Wiki 2)",
            "title_en": "Consecutive Activity (2 Weeks)",
            "required": "Active kwa angalau wiki 2 (siku 14) mfululizo",
            "current": f"Siku {streak} mfululizo za utendaji",
            "met": is_two_weeks_active,
            "message": (
                "Kigezo kimekamilika (Akaunti imekuwa hewani kwa siku 14 mfululizo)."
                if is_two_weeks_active
                else f"Akaunti lazima iwe active kwa siku 14 mfululizo kabla ya kuomba mabadiliko (kwa sasa: siku {streak}/14)."
            ),
        },
        {
            "id": "two_months_cooldown",
            "title": "Muda wa Subira (Miezi 2)",
            "title_en": "Cooldown Period (2 Months)",
            "required": "Angalau miezi 2 (siku 60) tangu mabadiliko ya mwisho",
            "current": (
                "Hujawahi kubadilisha jina"
                if last_changed is None
                else f"Mabadiliko ya mwisho: siku {cooldown_elapsed_days} zilizopita"
            ),
            "met": is_cooldown_passed,
            "message": (
                "Kigezo kimekamilika (Miezi 2 imepita au haujawahi kubadilisha)."
                if is_cooldown_passed
                else f"Huwezi kubadilisha tena hadi miezi 2 ipite tangu mabadiliko ya mwisho (imebaki siku {cooldown_remaining_days})."
            ),
        },
    ]

    eligible = is_six_months_old and is_two_weeks_active and is_cooldown_passed
    reason = "Vigezo vyote vimekamilika." if eligible else "Vigezo havijakamilika."
    return eligible, criteria, reason


# ============================================================================
# Password Reset Endpoints
# ============================================================================

@router.post("/password-reset/send")
async def send_password_reset_code(payload: VerificationRequest, request: Request):
    destination = normalize_destination(payload.channel, payload.destination)
    if payload.channel != "email" and not all((settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN, settings.TWILIO_FROM_NUMBER)):
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
            await send_password_reset_email(destination, code)
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
    user_id = update_password_by_destination(reset["channel"], reset["destination"], payload.new_password)
    if user_id:
        await disconnect_user(user_id)
    account_updated = user_id is not None
    return {"reset_allowed": True, "account_updated": account_updated}


# ============================================================================
# Username Change Endpoints (With Brevo Verification & Strict Criteria)
# ============================================================================

@router.get("/username/eligibility")
def get_username_eligibility(request: Request):
    user = current_user(request)
    with database() as conn:
        row = conn.execute("SELECT * FROM comm_users WHERE id=?", (user["id"],)).fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="User account not found.")
        eligible, criteria, reason = check_username_eligibility(row, conn)
    return {
        "eligible": eligible,
        "reason": reason,
        "criteria": criteria,
        "user": user,
    }


@router.post("/username/request-change")
async def request_username_change(payload: UsernameChangeRequest, request: Request):
    user = current_user(request)
    new_username = payload.new_username.strip()

    if len(new_username) < 3 or len(new_username) > 50:
        raise HTTPException(status_code=422, detail="Username must be between 3 and 50 characters.")

    if new_username.lower() == user["name"].lower():
        raise HTTPException(status_code=422, detail="New username must be different from current username.")

    with database() as conn:
        row = conn.execute("SELECT * FROM comm_users WHERE id=?", (user["id"],)).fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="User account not found.")
        eligible, criteria, reason = check_username_eligibility(row, conn)

    if not eligible:
        raise HTTPException(
            status_code=403,
            detail={
                "message": "Vigezo havijakamilika",
                "eligible": False,
                "reason": reason,
                "criteria": criteria,
            },
        )

    email = user["email"]
    code = f"{secrets.randbelow(1_000_000):06d}"

    try:
        await send_username_change_email(email, code, user["name"], new_username)
    except Exception as exc:
        logger.exception("Could not deliver username change verification code")
        raise HTTPException(
            status_code=502,
            detail="Could not deliver verification code to your email. Please try again later.",
        ) from exc

    current_time = time.monotonic()
    for cid, ch in list(USERNAME_CHALLENGES.items()):
        if ch["expires_at"] <= current_time or ch["user_id"] == user["id"]:
            USERNAME_CHALLENGES.pop(cid, None)

    challenge_id = secrets.token_urlsafe(28)
    digest = hmac.new(OTP_SECRET, f"{challenge_id}:{code}".encode(), hashlib.sha256).hexdigest()
    USERNAME_CHALLENGES[challenge_id] = {
        "user_id": user["id"],
        "new_username": new_username,
        "digest": digest,
        "expires_at": current_time + OTP_TTL_SECONDS,
        "attempts": 0,
    }

    return {
        "challenge_id": challenge_id,
        "expires_in": OTP_TTL_SECONDS,
        "email": mask_email(email),
        "new_username": new_username,
        "message": f"Nambari ya uhakiki imetumwa kwenye barua pepe {mask_email(email)}.",
    }


@router.post("/username/confirm-change")
def confirm_username_change(payload: UsernameChangeConfirmation, request: Request):
    user = current_user(request)
    challenge = USERNAME_CHALLENGES.get(payload.challenge_id)

    if not challenge or challenge["expires_at"] <= time.monotonic() or challenge["user_id"] != user["id"]:
        USERNAME_CHALLENGES.pop(payload.challenge_id, None)
        raise HTTPException(status_code=400, detail="Verification code is invalid or expired.")

    if challenge["attempts"] >= OTP_MAX_ATTEMPTS:
        USERNAME_CHALLENGES.pop(payload.challenge_id, None)
        raise HTTPException(status_code=429, detail="Too many incorrect verification attempts.")

    challenge["attempts"] += 1
    digest = hmac.new(OTP_SECRET, f"{payload.challenge_id}:{payload.code}".encode(), hashlib.sha256).hexdigest()
    if not hmac.compare_digest(challenge["digest"], digest):
        if challenge["attempts"] >= OTP_MAX_ATTEMPTS:
            USERNAME_CHALLENGES.pop(payload.challenge_id, None)
        raise HTTPException(status_code=400, detail="Verification code is incorrect.")

    USERNAME_CHALLENGES.pop(payload.challenge_id, None)
    new_username = challenge["new_username"]
    now_ts = int(time.time())

    with database() as conn:
        conn.execute(
            "UPDATE comm_users SET name=?, last_username_changed_at=?, last_active_at=? WHERE id=?",
            (new_username, now_ts, now_ts, user["id"]),
        )
        updated_row = conn.execute("SELECT * FROM comm_users WHERE id=?", (user["id"],)).fetchone()

    return {
        "ok": True,
        "message": "Jina la mtumiaji limebadilishwa kikamilifu!",
        "user": public_user(updated_row),
    }


@router.get("/me")
def read_user_me(request: Request):
    return {"user": current_user(request)}
