import asyncio
import base64
import hashlib
import io
import json
import logging
import re
import time
import xml.etree.ElementTree as ET
import zipfile
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
    image_data: str | None = Field(default=None, max_length=25_000_000)
    file_data: str | None = Field(default=None, max_length=25_000_000)
    file_name: str | None = Field(default=None, max_length=255)
    file_type: str | None = Field(default=None, max_length=100)

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
    "You are 'Agro AI', an expert agricultural and livestock specialist for the MIMI NI MKULIMA application. "
    "Answer questions specifically about FARMING (Kilimo) and LIVESTOCK (Ufugaji). "
    "You can inspect, read, and understand images, videos, audio recordings, PDFs, Word docs, PowerPoint presentations, and spreadsheets. "
    "If a question is outside agriculture and livestock, politely explain that you only answer questions related to farming and livestock. "
    "Respond in ENGLISH or KISWAHILI, matching the language used by the user."
)


def extract_text_from_docx(doc_bytes: bytes) -> str:
    try:
        with zipfile.ZipFile(io.BytesIO(doc_bytes)) as z:
            if "word/document.xml" in z.namelist():
                xml_content = z.read("word/document.xml")
                tree = ET.fromstring(xml_content)
                texts = [node.text for node in tree.iter() if node.text]
                return " ".join(texts).strip()
    except Exception as e:
        logger.warning("DOCX text extraction error: %s", e)
    return ""


def extract_text_from_pptx(ppt_bytes: bytes) -> str:
    try:
        texts = []
        with zipfile.ZipFile(io.BytesIO(ppt_bytes)) as z:
            for name in sorted(z.namelist()):
                if name.startswith("ppt/slides/slide") and name.endswith(".xml"):
                    xml_content = z.read(name)
                    tree = ET.fromstring(xml_content)
                    slide_texts = [node.text for node in tree.iter() if node.text]
                    if slide_texts:
                        texts.append(" ".join(slide_texts))
        return "\n--- Slide ---\n".join(texts).strip()
    except Exception as e:
        logger.warning("PPTX text extraction error: %s", e)
    return ""


def extract_text_from_xlsx(xls_bytes: bytes) -> str:
    try:
        with zipfile.ZipFile(io.BytesIO(xls_bytes)) as z:
            if "xl/sharedStrings.xml" in z.namelist():
                xml_content = z.read("xl/sharedStrings.xml")
                tree = ET.fromstring(xml_content)
                texts = [node.text for node in tree.iter() if node.text]
                return "\n".join(texts).strip()
    except Exception as e:
        logger.warning("XLSX text extraction error: %s", e)
    return ""


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


def make_cache_key(messages: list[ChatMessage], system_prompt: str, mode: str, has_file: bool) -> str:
    raw = json.dumps(
        {
            "mode": mode,
            "system": system_prompt,
            "has_file": has_file,
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
    cache_key = make_cache_key(request.messages, system_prompt, request.mode, bool(request.file_data or request.image_data))
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

    # Media and document attachment handling (image, video, audio, pdf, docx, pptx, xlsx, txt)
    raw_attachment = request.file_data or request.image_data
    if raw_attachment:
        raw_attachment = raw_attachment.strip()
        header_match = re.match(r"^data:([^;]+);base64,\s*(.+)$", raw_attachment, re.DOTALL)
        if header_match:
            mime_type = header_match.group(1).lower().strip()
            clean_b64 = re.sub(r"\s+", "", header_match.group(2))
            try:
                file_bytes = base64.b64decode(clean_b64, validate=True)
                fname = request.file_name or "attached_file"

                # Check if it's an Office document or text file needing text extraction
                extracted_text = ""
                if "wordprocessingml" in mime_type or fname.lower().endswith(".docx"):
                    extracted_text = extract_text_from_docx(file_bytes)
                elif "presentationml" in mime_type or fname.lower().endswith(".pptx"):
                    extracted_text = extract_text_from_pptx(file_bytes)
                elif "spreadsheetml" in mime_type or fname.lower().endswith(".xlsx"):
                    extracted_text = extract_text_from_xlsx(file_bytes)
                elif mime_type.startswith("text/") or fname.lower().endswith((".txt", ".csv", ".tsv", ".md", ".json")):
                    try:
                        extracted_text = file_bytes.decode("utf-8", errors="replace")[:25000]
                    except Exception:
                        pass

                if extracted_text:
                    contents[-1]["parts"].append(
                        {
                            "text": f"\n\n[Attached Document: {fname}]\n\"\"\"\n{extracted_text}\n\"\"\"\n"
                        }
                    )
                elif mime_type.startswith(("image/", "video/", "audio/")) or mime_type == "application/pdf":
                    # Direct multi-modal support in Gemini (images, videos, audio, and PDF)
                    if mime_type == "image/jpg":
                        mime_type = "image/jpeg"
                    contents[-1]["parts"].append(
                        {
                            "inlineData": {
                                "mimeType": mime_type,
                                "data": base64.b64encode(file_bytes).decode("ascii"),
                            }
                        }
                    )
                else:
                    # Generic fallback: attempt text decode
                    try:
                        fallback_txt = file_bytes[:10000].decode("utf-8", errors="replace")
                        contents[-1]["parts"].append(
                            {"text": f"\n\n[Attached File: {fname}]\n{fallback_txt}"}
                        )
                    except Exception:
                        pass
            except Exception as e:
                logger.warning("Error processing multi-modal file attachment: %s", e)

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


# ============================================================================
# Agricultural & Livestock Content Moderation
# Strictly verifies that posts are related to Kilimo (farming) or Mifugo (livestock)
# ============================================================================

class ModeratePostRequest(BaseModel):
    text: str = Field(default="", max_length=3000)
    caption: str = Field(default="", max_length=1000)
    tag: str = Field(default="kilimo", max_length=100)


AGRI_POSITIVE_KEYWORDS = {
    # Kiswahili Crops & Farming
    "kilimo", "shamba", "mazao", "mahindi", "mpunga", "mchele", "ngano", "mtama", "ulezi",
    "viazi", "mihogo", "ndizi", "kahawa", "chai", "pamba", "katani", "korosho", "parachichi",
    "maembe", "machungwa", "limao", "nanasi", "zabibu", "papai", "nyanya", "vitunguu", "kabichi",
    "karoti", "pilipili", "bamia", "mchicha", "kunde", "dengu", "maharage", "soya", "alizeti",
    "ufuta", "karanga", "michikichi", "karafuu", "mdalasini", "tangawizi", "vitunguu saumu",
    "matikiti", "uyoga", "mbegu", "miche", "vitalu", "mbolea", "mboji", "samadi", "dap", "can",
    "urea", "npk", "palizi", "kuvuna", "mavuno", "umwagiliaji", "matandazo", "bustani", "greenhouse",
    "viuatilifu", "dawa ya kuua wadudu", "magugu", "trekta", "jembe", "shambani", "kulima", "mkulima",
    # Kiswahili Livestock & Animal Husbandry
    "ufugaji", "mifugo", "mfugo", "ng'ombe", "ngombe", "mbuzi", "kondoo", "nguruwe", "kuku", "bata",
    "kanga", "sungura", "samaki", "nyuki", "punda", "farasi", "ngamia", "banda", "machungani",
    "malisho", "majani", "napier", "brachiaria", "alfalfa", "silage", "hay", "pumba", "mashudu",
    "dawa ya mifugo", "chanjo", "kupe", "dipu", "daktari wa mifugo", "ugani", "afisa ugani",
    "maziwa", "mayai", "asali", "ngozi", "sufu", "kuroiler", "sasso", "broiler", "layer", "vifaranga",
    "kufuga", "mfugaji", "mzinga", "mabwawa ya samaki",
    # English terms
    "farm", "farming", "crop", "crops", "harvest", "seed", "seeds", "soil", "fertilizer",
    "irrigation", "planting", "horticulture", "agronomy", "agronomist", "agribusiness",
    "livestock", "poultry", "cattle", "cow", "cows", "goat", "goats", "sheep", "pig", "pigs",
    "chicken", "chickens", "dairy", "beef", "pasture", "feed", "fodder", "beekeeping", "fish",
    "aquaculture", "veterinary", "vet", "pesticide", "tractor", "plough", "farmer"
}

FORBIDDEN_NON_AGRI_KEYWORDS = {
    # Betting & Gambling
    "betting", "bet", "mkekabet", "betway", "aviator", "casino", "kasino", "odd", "odds",
    "mkeka", "sportybet", "1xbet", "parimatch", "betpawa",
    # Adult / Inappropriate
    "porn", "xxx", "ngono", "kudate", "sugar mummy", "sugar daddy", "ubakaji",
    # Irrelevant Politics / Protests
    "chama tawala", "uchaguzi", "mbunge", "mgombea", "ccm", "chadema", "act wazalendo",
    "maandamano", "serikali ijiuzulu",
    # Crypto & Get rich quick schemes
    "crypto", "bitcoin", "forex", "binance", "invest double", "utajiri wa haraka", "tuma pesa upate",
    # Irrelevant Entertainment Gossip
    "bongo flava", "wasafi", "diamond platnumz", "alikiba", "kiba", "tamthilia", "movie mpya"
}


def rule_based_agricultural_check(text: str, caption: str, tag: str) -> tuple[bool, str]:
    combined = f"{text} {caption} {tag}".lower()
    words = set(re.findall(r"[a-zA-Z0-9_']+", combined))

    # 1. Check forbidden topics first
    for bad in FORBIDDEN_NON_AGRI_KEYWORDS:
        if bad in combined:
            return (
                False,
                f"Chapisho limekataliwa: Maudhui haya yanaonekana kuhusisha mada zisizoruhusiwa au zisizohusiana na kilimo/ufugaji ({bad}).",
            )

    # 2. Check if any agricultural or livestock keywords match
    matched = [w for w in AGRI_POSITIVE_KEYWORDS if w in combined or w in words]
    if matched:
        return True, "Maudhui yameidhinishwa (yanahusiana na Kilimo na Mifugo)."

    # If completely empty or no agricultural terms found
    return (
        False,
        "Chapisho limekataliwa: Maudhui haya hayahusiani na Kilimo au Mifugo. Mfumo wa MIMI NI MKULIMA unaruhusu machapisho na video zinazohusu kilimo, mazao, mifugo na ufugaji pekee.",
    )


@router.post("/moderate-post")
async def moderate_post(payload: ModeratePostRequest):
    text = (payload.text or "").strip()
    caption = (payload.caption or "").strip()
    tag = (payload.tag or "kilimo").strip()

    if not text and not caption:
        return {
            "allowed": False,
            "reason": "Tafadhali weka maelezo au maelezo mafupi (caption) kuhusu kilimo au mifugo.",
        }

    # Step 1: Fast Rule Check
    rule_allowed, rule_reason = rule_based_agricultural_check(text, caption, tag)
    if not rule_allowed and any(bad in f"{text} {caption}".lower() for bad in FORBIDDEN_NON_AGRI_KEYWORDS):
        return {"allowed": False, "reason": rule_reason}

    # Step 2: Try Gemini AI check for nuanced context if API is configured
    api_key = settings.GEMINI_API_KEY.strip()
    if api_key:
        moderation_prompt = (
            "You are a strict agricultural and livestock content moderator for the Tanzanian application 'MIMI NI MKULIMA'.\n"
            "Your task is to verify whether user posts belong strictly to FARMING (Kilimo) or LIVESTOCK (Ufugaji).\n\n"
            "Analyze the following post:\n"
            f"- Text: {text}\n"
            f"- Caption: {caption}\n"
            f"- Tag: {tag}\n\n"
            "Decision Criteria:\n"
            "1. ALLOW (allowed: true) if the content is about farming, crops, vegetables, seeds, soil, pests, irrigation, fertilizers, livestock, poultry, beekeeping, fish farming, veterinary care, or agricultural business/produce.\n"
            "2. REJECT (allowed: false) if it is about general politics, betting/gambling, adult content, entertainment gossip, personal chatter, or other non-agricultural topics.\n\n"
            "Return strictly a JSON object with this format:\n"
            '{"allowed": true, "reason": "Maudhui yameidhinishwa."}\n'
            "OR\n"
            '{"allowed": false, "reason": "Ufafanuzi mfupi wa Kiswahili kwa nini limekataliwa."}'
        )

        global _LAST_API_CALL_TIME
        try:
            async with _AI_CONCURRENCY_SEMAPHORE:
                elapsed = time.monotonic() - _LAST_API_CALL_TIME
                if elapsed < _MIN_API_INTERVAL_SECONDS:
                    await asyncio.sleep(_MIN_API_INTERVAL_SECONDS - elapsed)

                candidates = get_candidate_models()
                for model in candidates:
                    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
                    req_payload = {
                        "contents": [{"role": "user", "parts": [{"text": moderation_prompt}]}],
                        "generationConfig": {"temperature": 0.1, "maxOutputTokens": 200},
                    }
                    try:
                        async with httpx.AsyncClient(timeout=10.0) as client:
                            resp = await client.post(url, json=req_payload)
                        if resp.status_code == 200:
                            data = resp.json()
                            parts = data.get("candidates", [{}])[0].get("content", {}).get("parts", [])
                            raw_out = "".join(p.get("text", "") for p in parts).strip()
                            # Parse JSON
                            json_match = re.search(r"\{.*\}", raw_out, re.DOTALL)
                            if json_match:
                                parsed = json.loads(json_match.group(0))
                                _LAST_API_CALL_TIME = time.monotonic()
                                return {
                                    "allowed": bool(parsed.get("allowed")),
                                    "reason": parsed.get("reason", rule_reason),
                                }
                    except Exception:
                        continue
        except Exception as exc:
            logger.warning("AI moderation call exception: %s. Relying on rule check.", exc)

    # Step 3: Default to robust rule-based check
    return {"allowed": rule_allowed, "reason": rule_reason}

