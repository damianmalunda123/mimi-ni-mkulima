import asyncio
import base64
import hashlib
import json
import logging
import re
import time
from collections import deque
from typing import Literal

import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from core.config import settings

router = APIRouter()
logger = logging.getLogger(__name__)

class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str = Field(max_length=6000)

class ChatRequest(BaseModel):
    messages: list[ChatMessage] = Field(min_length=1, max_length=14)
    system_prompt: str | None = Field(default=None, max_length=12000)
    mode: str = "kilimo"
    image_data: str | None = Field(default=None, max_length=8_000_000)

# ============================================================================
# Concurrency Limiter & Rate Pacing
# Ensures we do NOT hammer Gemini API with multiple concurrent requests
# ============================================================================
_AI_CONCURRENCY_SEMAPHORE = asyncio.Semaphore(1)
_LAST_API_CALL_TIME = 0.0
_MIN_API_INTERVAL_SECONDS = 0.8

# Sliding window limiter for overall safety
_AI_REQUESTS_PER_MINUTE = 40
_AI_REQUEST_WINDOW_SECONDS = 60
_ai_request_times: deque[float] = deque()
_ai_rate_lock = asyncio.Lock()

# In-memory response cache to eliminate redundant requests (TTL: 30 minutes)
_AI_RESPONSE_CACHE: dict[str, tuple[str, float]] = {}
_CACHE_TTL_SECONDS = 1800

DEFAULT_SYSTEM_PROMPT = (
    "You are an expert agricultural and livestock specialist for the MIMI NI MKULIMA application. "
    "Answer questions specifically about FARMING (Kilimo) and LIVESTOCK (Ufugaji). "
    "If a question is outside these topics, politely explain that you only answer questions related to agriculture and livestock. "
    "Respond in ENGLISH or KISWAHILI, matching the language used by the user."
)


def get_candidate_models() -> list[str]:
    primary = settings.GEMINI_MODEL.strip() or "gemini-3.5-flash"
    fallbacks = [
        m.strip()
        for m in getattr(settings, "GEMINI_FALLBACK_MODELS", "gemini-3.5-flash,gemini-3.5-flash-lite,gemini-3-flash-preview,gemini-flash-lite-latest").split(",")
        if m.strip()
    ]
    candidates = [primary]
    defaults = ["gemini-3.5-flash", "gemini-3.5-flash-lite", "gemini-3-flash-preview", "gemini-flash-lite-latest"]
    for model_name in fallbacks + defaults:
        if model_name not in candidates:
            candidates.append(model_name)
    return candidates


def make_cache_key(messages: list[ChatMessage], system_prompt: str, mode: str, has_image: bool) -> str:
    raw = json.dumps(
        {
            "mode": mode,
            "system": system_prompt,
            "has_image": has_image,
            "msgs": [{"r": m.role, "c": m.content.strip().lower()} for m in messages],
        },
        sort_keys=True,
    )
    return hashlib.sha256(raw.encode()).hexdigest()


def get_cached_response(cache_key: str) -> str | None:
    now = time.monotonic()
    entry = _AI_RESPONSE_CACHE.get(cache_key)
    if entry:
        answer, timestamp = entry
        if now - timestamp < _CACHE_TTL_SECONDS:
            return answer
        _AI_RESPONSE_CACHE.pop(cache_key, None)
    return None


def store_cached_response(cache_key: str, answer: str) -> None:
    if len(_AI_RESPONSE_CACHE) > 500:
        # Prune oldest
        oldest_key = min(_AI_RESPONSE_CACHE, key=lambda k: _AI_RESPONSE_CACHE[k][1])
        _AI_RESPONSE_CACHE.pop(oldest_key, None)
    _AI_RESPONSE_CACHE[cache_key] = (answer, time.monotonic())


def fallback_agricultural_answer(user_query: str, mode: str) -> str:
    is_sw = any(w in user_query.lower() for w in ["habari", "jinsi", "kulima", "kufuga", "mbegu", "ugonjwa", "dawa", "ng'ombe", "kuku", "mahindi", "nyanya", "tanzania"])
    if is_sw:
        if mode == "ufugaji":
            return (
                "**Mwongozo wa Msingi wa Mifugo:**\n\n"
                "1. **Usafi na Makazi:** Hakikisha banda lina hewa ya kutosha, kavu na safi ili kuzuia magonjwa ya maambukizi.\n"
                "2. **Chakula na Maji:** Wape wanyama lishe bora kulingana na umri wao na maji safi ya kutosha wakati wote.\n"
                "3. **Chanjo na Tiba:** Zingatia ratiba ya chanjo na wasiliana na afisa ugani au daktari wa mifugo aliye karibu kwa changamoto maalum."
            )
        return (
            "**Mwongozo wa Msingi wa Kilimo:**\n\n"
            "1. **Maandalizi ya Shamba:** Lima mapema na weka mbolea ya samadi au mboji iliyoiva vizuri.\n"
            "2. **Mbegu Bora:** Tumia mbegu zilizoidhinishwa zinazostahimili ukame na magonjwa ya eneo lako.\n"
            "3. **Udhibiti wa Wadudu:** Kagua shamba mara kwa mara ili kutambua na kudhibiti wadudu mapema kabla hawajaenea."
        )
    return (
        "**Core Agricultural Guidance:**\n\n"
        "1. **Soil & Preparation:** Prepare beds early and enrich soil with well-composted organic matter.\n"
        "2. **Quality Inputs:** Use certified disease-resistant seed varieties adapted to your agro-ecological zone.\n"
        "3. **Integrated Management:** Scout fields or pens regularly to detect pest and health challenges before they spread."
    )


@router.post("/chat")
async def chat(request: ChatRequest):
    now = time.monotonic()

    # Rate pacing window
    async with _ai_rate_lock:
        while _ai_request_times and now - _ai_request_times[0] >= _AI_REQUEST_WINDOW_SECONDS:
            _ai_request_times.popleft()
        if len(_ai_request_times) >= _AI_REQUESTS_PER_MINUTE:
            raise HTTPException(
                status_code=429,
                detail="Tafadhali subiri sekunde chache kabla ya kuuliza tena / Please wait a moment before sending another request.",
            )
        _ai_request_times.append(now)

    api_key = settings.GEMINI_API_KEY.strip()
    if not api_key:
        raise HTTPException(
            status_code=503,
            detail="Gemini API key is not configured on the backend.",
        )

    # Check Cache first (immediate response without hitting API)
    system_prompt = request.system_prompt or DEFAULT_SYSTEM_PROMPT
    cache_key = make_cache_key(request.messages, system_prompt, request.mode, bool(request.image_data))
    cached = get_cached_response(cache_key)
    if cached:
        return {"text": cached}

    # Format contents for Gemini API
    contents = [
        {
            "role": "model" if message.role == "assistant" else "user",
            "parts": [{"text": message.content}],
        }
        for message in request.messages
    ]

    while contents and contents[0]["role"] == "model":
        contents.pop(0)

    if not contents:
        raise HTTPException(status_code=422, detail="No user message provided.")

    merged_contents = []
    for item in contents:
        if merged_contents and merged_contents[-1]["role"] == item["role"]:
            merged_contents[-1]["parts"].extend(item["parts"])
        else:
            merged_contents.append(item)
    contents = merged_contents

    # Image attachment handling
    if request.image_data:
        image_match = re.fullmatch(
            r"data:image/(jpeg|jpg|png|webp);base64,\s*([A-Za-z0-9+/=\s]+)",
            request.image_data.strip(),
        )
        if image_match:
            try:
                clean_b64 = re.sub(r"\s+", "", image_match.group(2))
                image_bytes = base64.b64decode(clean_b64, validate=True)
                mime_sub = image_match.group(1)
                if mime_sub == "jpg":
                    mime_sub = "jpeg"
                contents[-1]["parts"].append(
                    {
                        "inlineData": {
                            "mimeType": f"image/{mime_sub}",
                            "data": base64.b64encode(image_bytes).decode("ascii"),
                        }
                    }
                )
            except Exception:
                pass

    payload = {
        "systemInstruction": {"parts": [{"text": system_prompt}]},
        "contents": contents,
        "generationConfig": {
            "temperature": 0.65,
            "maxOutputTokens": 2048,
        },
    }

    # ========================================================================
    # Critical Concurrency Control: Only ONE request sends to Gemini at a time
    # ========================================================================
    global _LAST_API_CALL_TIME
    async with _AI_CONCURRENCY_SEMAPHORE:
        # Enforce minimum spacing between calls
        elapsed = time.monotonic() - _LAST_API_CALL_TIME
        if elapsed < _MIN_API_INTERVAL_SECONDS:
            await asyncio.sleep(_MIN_API_INTERVAL_SECONDS - elapsed)

        candidate_models = get_candidate_models()
        last_error = None
        answer_text = None

        for model in candidate_models:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
            try:
                async with httpx.AsyncClient(timeout=35.0) as client:
                    response = await client.post(
                        url,
                        headers={"Content-Type": "application/json"},
                        json=payload,
                    )

                if response.status_code == 200:
                    data = response.json()
                    candidates = data.get("candidates") or []
                    if candidates and "content" in candidates[0]:
                        parts = candidates[0]["content"].get("parts") or []
                        ans = "".join(p.get("text", "") for p in parts if isinstance(p, dict)).strip()
                        if ans:
                            answer_text = ans
                            _LAST_API_CALL_TIME = time.monotonic()
                            break

                logger.warning(
                    "Gemini model '%s' returned status %d. Trying fallback model...",
                    model,
                    response.status_code,
                )
                last_error = f"HTTP {response.status_code}: {response.text[:200]}"
                await asyncio.sleep(0.4)

            except (httpx.TimeoutException, httpx.RequestError) as exc:
                logger.warning("Gemini model '%s' connection error (%s). Trying fallback...", model, exc)
                last_error = str(exc)
                await asyncio.sleep(0.4)

        if not answer_text:
            logger.error("All Gemini candidate models failed. Last error: %s", last_error)
            last_user_query = request.messages[-1].content if request.messages else ""
            answer_text = fallback_agricultural_answer(last_user_query, request.mode)

        store_cached_response(cache_key, answer_text)
        return {"text": answer_text}
