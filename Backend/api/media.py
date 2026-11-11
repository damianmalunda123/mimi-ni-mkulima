import asyncio
import os
import re
import uuid
from pathlib import Path
from urllib.parse import quote

import httpx
from fastapi import APIRouter, HTTPException, Query, Request

router = APIRouter()
PROJECT_ROOT = Path(__file__).resolve().parents[2]
UPLOAD_DIR = PROJECT_ROOT / "Assets" / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

@router.get("/images")
async def search_images(q: str = Query(min_length=1, max_length=120)):
    query = q.strip()
    if not query:
        raise HTTPException(status_code=422, detail="Search query cannot be blank.")

    try:
        async with httpx.AsyncClient(timeout=20.0) as client:
            response = await client.get(
                "https://commons.wikimedia.org/w/rest.php/v1/search/page",
                params={"q": query, "limit": "24"},
                headers={
                    "Accept": "application/json",
                    "User-Agent": (
                        "MIMI-NI-MKULIMA/1.0 "
                        "(https://github.com/damianmalunda123/mimi-ni-mkulima)"
                    ),
                },
            )
    except httpx.TimeoutException as exc:
        raise HTTPException(
            status_code=504,
            detail="Wikimedia Commons timed out. Please try again.",
        ) from exc
    except httpx.RequestError as exc:
        raise HTTPException(
            status_code=502,
            detail="Could not connect to Wikimedia Commons.",
        ) from exc

    if response.is_error:
        raise HTTPException(
            status_code=502,
            detail=f"Wikimedia Commons returned an error (HTTP {response.status_code}).",
        )

    try:
        pages = response.json().get("pages", [])
        results = []
        for page in pages:
            key = page.get("key", "")
            thumbnail_info = page.get("thumbnail") or {}
            thumbnail = thumbnail_info.get("url")
            mimetype = thumbnail_info.get("mimetype", "")
            page_url = f"https://commons.wikimedia.org/wiki/{quote(key, safe=':')}"
            if not isinstance(thumbnail, str):
                continue
            if thumbnail.startswith("//"):
                thumbnail = f"https:{thumbnail}"
            if (
                not key.startswith("File:")
                or not mimetype.startswith("image/")
                or not thumbnail.startswith("https://")
            ):
                continue
            thumbnail = re.sub(r"/\d+px-", "/960px-", thumbnail, count=1)
            results.append({
                "title": str(page.get("title", "")).removeprefix("File:"),
                "thumbnail": thumbnail,
                "page_url": page_url,
                "artist": "",
                "license": "Chanzo na leseni kwenye Wikimedia Commons",
            })
    except (AttributeError, IndexError, TypeError, ValueError) as exc:
        raise HTTPException(
            status_code=502,
            detail="Wikimedia Commons returned an invalid response.",
        ) from exc

    return {"results": results}


@router.post("/upload")
async def upload_file(
    request: Request,
    name: str = Query(default="media.mp4"),
    start: float = Query(default=0.0),
    end: float = Query(default=0.0),
):
    data = await request.body()
    if not data:
        raise HTTPException(status_code=400, detail="Hakuna faili lililopokelewa / No file data received.")

    # 150 MB max
    if len(data) > 150 * 1024 * 1024:
        raise HTTPException(status_code=413, detail="Faili linazidi 150MB / File exceeds 150MB limit.")

    clean_name = re.sub(r"[^a-zA-Z0-9_.-]", "_", name)
    ext = os.path.splitext(clean_name)[1].lower() or ".mp4"
    raw_filename = f"raw_{uuid.uuid4().hex[:8]}_{clean_name}"
    saved_filename = f"{uuid.uuid4().hex[:10]}_{clean_name}"

    raw_path = UPLOAD_DIR / raw_filename
    final_path = UPLOAD_DIR / saved_filename
    raw_path.write_bytes(data)

    # If trimming requested (max 10 minutes = 600s)
    if end > start and ext in [".mp4", ".mov", ".webm", ".mkv", ".avi", ".m4v"]:
        duration = end - start
        if duration > 600.0:
            end = start + 600.0

        cmd = [
            "ffmpeg",
            "-y",
            "-ss",
            f"{max(0.0, start):.2f}",
            "-to",
            f"{end:.2f}",
            "-i",
            str(raw_path),
            "-c:v",
            "libx264",
            "-preset",
            "ultrafast",
            "-c:a",
            "aac",
            "-movflags",
            "+faststart",
            str(final_path),
        ]
        try:
            proc = await asyncio.create_subprocess_exec(
                *cmd,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            await proc.communicate()
            if final_path.exists() and final_path.stat().st_size > 0:
                raw_path.unlink(missing_ok=True)
            else:
                raw_path.rename(final_path)
        except Exception:
            raw_path.rename(final_path)
    else:
        raw_path.rename(final_path)

    url = f"/Assets/uploads/{saved_filename}"
    return {
        "url": url,
        "filename": saved_filename,
        "size": final_path.stat().st_size if final_path.exists() else len(data),
    }


