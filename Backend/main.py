from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from api import user, ai, media

app = FastAPI(title="MIMI NI MKULIMA API")
PROJECT_ROOT = Path(__file__).resolve().parents[1]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500", "http://localhost:5500"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

app.include_router(user.router, prefix="/api/v1/users", tags=["users"])
app.include_router(ai.router, prefix="/api/v1/ai", tags=["ai"])
app.include_router(media.router, prefix="/api/v1/media", tags=["media"])

@app.get("/")
async def root():
    return FileResponse(PROJECT_ROOT / "Frontend" / "MIMI NI MKULIMA.html")

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

app.mount("/Assets", StaticFiles(directory=PROJECT_ROOT / "Assets"), name="assets")
app.mount("/", StaticFiles(directory=PROJECT_ROOT / "Frontend"), name="frontend")
