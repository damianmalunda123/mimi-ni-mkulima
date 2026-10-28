import re
from urllib.parse import quote

import httpx
from fastapi import APIRouter, HTTPException, Query

router = APIRouter()
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
            if (
                not key.startswith("File:")
                or not mimetype.startswith("image/")
                or not isinstance(thumbnail, str)
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
