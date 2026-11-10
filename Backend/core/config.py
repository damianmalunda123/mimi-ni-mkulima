from pathlib import Path

from pydantic_settings import BaseSettings
from pydantic_settings import SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "MIMI NI MKULIMA"
    API_V1_STR: str = "/api/v1"
    DATABASE_URL: str = "sqlite:///./sql_app.db" # Default to SQLite for simplicity
    GEMINI_API_KEY: str = ""
    GEMINI_MODEL: str = "gemini-3.5-flash"
    GEMINI_FALLBACK_MODELS: str = "gemini-3.5-flash,gemini-3.5-flash-lite,gemini-3-flash-preview,gemini-flash-lite-latest"
    BREVO_API_KEY: str = ""
    BREVO_SENDER_EMAIL: str = "damianmalunda123@gmail.com"
    BREVO_SENDER_NAME: str = "MIMI NI MKULIMA"
    SMTP_HOST: str = ""
    SMTP_PORT: int = 587
    SMTP_USERNAME: str = ""
    SMTP_PASSWORD: str = ""
    SMTP_FROM_EMAIL: str = ""
    SMTP_STARTTLS: bool = True
    TWILIO_ACCOUNT_SID: str = ""
    TWILIO_AUTH_TOKEN: str = ""
    TWILIO_FROM_NUMBER: str = ""
    COMMS_DB_PATH: str = str(Path(__file__).resolve().parents[1] / "communications.sqlite3")
    COOKIE_SECURE: bool = False
    CORS_ORIGINS: str = "http://127.0.0.1:5500,http://localhost:5500,http://127.0.0.1:8765,http://localhost:8765,http://127.0.0.1:8000,http://localhost:8000"
    WEBRTC_ICE_SERVERS: str = '[{"urls":"stun:stun.l.google.com:19302"}]'

    model_config = SettingsConfigDict(
        env_file=Path(__file__).resolve().parents[1] / ".env",
        extra="ignore",
    )

settings = Settings()
