import sys
from pathlib import Path

BACKEND_DIR = Path(__file__).resolve().parent
if str(BACKEND_DIR) not in sys.path:
    sys.path.insert(0, str(BACKEND_DIR))

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from api import user, ai, media, communication
from core.config import settings

app = FastAPI(title="MIMI NI MKULIMA API")
PROJECT_ROOT = Path(__file__).resolve().parents[1]

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in settings.CORS_ORIGINS.split(",") if origin.strip()],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

app.include_router(user.router, prefix="/api/v1/users", tags=["users"])
app.include_router(user.router, prefix="/api/v1", tags=["users_compat"])
app.include_router(ai.router, prefix="/api/v1/ai", tags=["ai"])
app.include_router(media.router, prefix="/api/v1/media", tags=["media"])
app.include_router(communication.router, prefix="/api/v1/communications", tags=["communications"])

@app.get("/")
async def root():
    return FileResponse(PROJECT_ROOT / "Frontend" / "MIMI NI MKULIMA.html")

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

app.mount("/Assets", StaticFiles(directory=PROJECT_ROOT / "Assets"), name="assets")
app.mount("/assets", StaticFiles(directory=PROJECT_ROOT / "Assets"), name="assets_lower")
app.mount("/", StaticFiles(directory=PROJECT_ROOT / "Frontend"), name="frontend")
