import asyncio
import base64
import re
import time
from collections import deque
from typing import Literal

import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from core.config import settings

router = APIRouter()

class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str = Field(max_length=6000)

class ChatRequest(BaseModel):
    messages: list[ChatMessage] = Field(min_length=1, max_length=14)
    system_prompt: str | None = Field(default=None, max_length=12000)
    mode: str = "kilimo"
    image_data: str | None = Field(default=None, max_length=8_000_000)

_AI_REQUESTS_PER_MINUTE = 30
_AI_REQUEST_WINDOW_SECONDS = 60
_ai_request_times: deque[float] = deque()
_ai_request_lock = asyncio.Lock()

# System prompt to guide the AI specifically for agriculture and livestock
DEFAULT_SYSTEM_PROMPT = (
    "Wewe ni mtaalamu wa kilimo na ufugaji (Agriculture and Livestock Expert). "
    "Jibu maswali yanayohusu KILIMO na UFUGAJI pekee. "
    "Kama swali halihusu mada hizi, waambie kwa adabu kuwa unajibu maswali ya kilimo na ufugaji pekee. "
    "Jibu kwa LUGHA YA KISWAHILI au KINGEREZA kulingana na lugha aliyotumia mtumiaji."
)

@router.post("/chat")
async def chat(request: ChatRequest):
    now = time.monotonic()
    async with _ai_request_lock:
        while (
            _ai_request_times
            and now - _ai_request_times[0] >= _AI_REQUEST_WINDOW_SECONDS
        ):
            _ai_request_times.popleft()
        if len(_ai_request_times) >= _AI_REQUESTS_PER_MINUTE:
            raise HTTPException(
                status_code=429,
                detail="AI request limit reached. Please wait a minute and try again.",
            )
        _ai_request_times.append(now)

    if not settings.GEMINI_API_KEY:
        raise HTTPException(
            status_code=503,
            detail="Gemini API key is not configured on the backend.",
        )

    contents = [
        {
            "role": "model" if message.role == "assistant" else "user",
            "parts": [{"text": message.content}],
        }
        for message in request.messages
    ]

    if request.image_data:
        image_match = re.fullmatch(
            r"data:image/(jpeg|png|webp);base64,([A-Za-z0-9+/]+={0,2})",
            request.image_data,
        )
        if not image_match:
            raise HTTPException(status_code=422, detail="Invalid image data.")

        try:
            image_bytes = base64.b64decode(image_match.group(2), validate=True)
        except ValueError as exc:
            raise HTTPException(status_code=422, detail="Invalid image data.") from exc

        contents[-1]["parts"].append(
            {
                "inlineData": {
                    "mimeType": f"image/{image_match.group(1)}",
                    "data": base64.b64encode(image_bytes).decode("ascii"),
                }
            }
        )

    payload = {
        "systemInstruction": {
            "parts": [{"text": request.system_prompt or DEFAULT_SYSTEM_PROMPT}]
        },
        "contents": contents,
        "generationConfig": {"temperature": 0.7},
    }

    url = (
        "https://generativelanguage.googleapis.com/v1beta/"
        f"models/{settings.GEMINI_MODEL}:generateContent"
    )
    try:
        async with httpx.AsyncClient(timeout=60.0) as client:
            response = await client.post(
                url,
                headers={"x-goog-api-key": settings.GEMINI_API_KEY},
                json=payload,
            )
    except httpx.TimeoutException as exc:
        raise HTTPException(
            status_code=504,
            detail="Gemini timed out. Please try again.",
        ) from exc
    except httpx.RequestError as exc:
        raise HTTPException(
            status_code=502,
            detail="Could not connect to the Gemini API.",
        ) from exc

    if response.is_error:
        try:
            upstream_error = response.json().get("error", {})
        except ValueError:
            upstream_error = {}

        error_details = upstream_error.get("details") or []
        error_reasons = {
            detail.get("reason")
            for detail in error_details
            if isinstance(detail, dict)
        }
        if "API_KEY_INVALID" in error_reasons:
            raise HTTPException(
                status_code=503,
                detail=(
                    "Gemini rejected the API key as invalid. Create a valid Gemini "
                    "API key and update Backend/.env."
                ),
            )
        if response.status_code in {401, 403}:
            raise HTTPException(
                status_code=503,
                detail=(
                    "Gemini rejected the API key. Verify it is active and allowed "
                    "to use the Gemini API."
                ),
            )
        if response.status_code == 503:
            raise HTTPException(
                status_code=503,
                detail="Gemini is temporarily busy. Please try again shortly.",
            )
        status_code = 429 if response.status_code == 429 else 502
        raise HTTPException(
            status_code=status_code,
            detail=f"Gemini API returned an error (HTTP {response.status_code}).",
        )

    try:
        data = response.json()
        answer = "".join(
            part.get("text", "")
            for part in data["candidates"][0]["content"]["parts"]
            if isinstance(part, dict) and isinstance(part.get("text"), str)
        ).strip()
    except (KeyError, IndexError, TypeError, ValueError) as exc:
        raise HTTPException(
            status_code=502,
            detail="Gemini returned an invalid response.",
        ) from exc

    if not answer:
        raise HTTPException(status_code=502, detail="Gemini returned an empty response.")

    return {"text": answer}
