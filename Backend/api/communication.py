import hashlib
import hmac
import json
import re
import secrets
import sqlite3
import time
from contextlib import contextmanager
from pathlib import Path
from typing import Literal

from fastapi import APIRouter, HTTPException, Request, Response, WebSocket, WebSocketDisconnect
from pydantic import BaseModel, Field

from core.config import settings

router = APIRouter()
SESSION_COOKIE = "mimi_session"
SESSION_TTL_SECONDS = 60 * 60 * 24 * 14
PASSWORD_ITERATIONS = 310_000
EXPERT_ROLES = {"crop_expert", "livestock_expert"}
PRACTITIONER_ROLES = {"farmer", "livestock_keeper"}
connections: dict[str, set[WebSocket]] = {}


class RegisterRequest(BaseModel):
    name: str = Field(min_length=2, max_length=60)
    email: str = Field(min_length=5, max_length=254)
    phone: str = Field(default="", max_length=24)
    password: str = Field(min_length=8, max_length=100)
    role: Literal["crop_expert", "livestock_expert", "farmer", "livestock_keeper"]


class LoginRequest(BaseModel):
    email: str = Field(min_length=5, max_length=254)
    password: str = Field(min_length=8, max_length=100)


class MessageRequest(BaseModel):
    text: str = Field(min_length=1, max_length=4000)


class DeleteAccountRequest(BaseModel):
    email: str = Field(min_length=5, max_length=254)
    password: str = Field(min_length=8, max_length=100)


def database_path() -> Path:
    return Path(settings.COMMS_DB_PATH).expanduser().resolve()


def connect() -> sqlite3.Connection:
    path = database_path()
    path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(path, timeout=10)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    conn.executescript(
        """
        CREATE TABLE IF NOT EXISTS comm_users (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            phone TEXT NOT NULL DEFAULT '',
            role TEXT NOT NULL,
            password_salt TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            created_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS comm_sessions (
            token_hash TEXT PRIMARY KEY,
            user_id TEXT NOT NULL REFERENCES comm_users(id) ON DELETE CASCADE,
            expires_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS comm_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            conversation_key TEXT NOT NULL,
            sender_id TEXT NOT NULL REFERENCES comm_users(id) ON DELETE CASCADE,
            recipient_id TEXT NOT NULL REFERENCES comm_users(id) ON DELETE CASCADE,
            text TEXT NOT NULL,
            created_at INTEGER NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_comm_messages_conversation
            ON comm_messages(conversation_key, id);
        CREATE INDEX IF NOT EXISTS idx_comm_sessions_expiry
            ON comm_sessions(expires_at);
        """
    )
    return conn


@contextmanager
def database():
    conn = connect()
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()


def public_user(row: sqlite3.Row) -> dict[str, str]:
    return {"id": row["id"], "name": row["name"], "email": row["email"], "role": row["role"]}


def public_peer(row: sqlite3.Row) -> dict[str, str]:
    return {"id": row["id"], "name": row["name"], "role": row["role"]}


def session_token(response: Response, user_id: str) -> None:
    token = secrets.token_urlsafe(32)
    token_hash = hashlib.sha256(token.encode()).hexdigest()
    expires_at = int(time.time()) + SESSION_TTL_SECONDS
    with database() as conn:
        conn.execute("DELETE FROM comm_sessions WHERE expires_at <= ?", (int(time.time()),))
        conn.execute(
            "INSERT INTO comm_sessions(token_hash, user_id, expires_at) VALUES (?, ?, ?)",
            (token_hash, user_id, expires_at),
        )
    response.set_cookie(
        SESSION_COOKIE,
        token,
        max_age=SESSION_TTL_SECONDS,
        httponly=True,
        secure=settings.COOKIE_SECURE,
        samesite="lax",
        path="/",
    )


def current_user(request: Request) -> dict[str, str]:
    token = request.cookies.get(SESSION_COOKIE)
    if not token:
        raise HTTPException(status_code=401, detail="Sign in to continue.")
    token_hash = hashlib.sha256(token.encode()).hexdigest()
    with database() as conn:
        row = conn.execute(
            "SELECT u.* FROM comm_sessions s JOIN comm_users u ON u.id=s.user_id "
            "WHERE s.token_hash=? AND s.expires_at>?",
            (token_hash, int(time.time())),
        ).fetchone()
    if row is None:
        raise HTTPException(status_code=401, detail="Your session has expired. Sign in again.")
    return public_user(row)


def hash_password(password: str, salt: bytes | None = None) -> tuple[str, str]:
    salt = salt or secrets.token_bytes(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, PASSWORD_ITERATIONS)
    return salt.hex(), digest.hex()


def update_password_by_destination(channel: str, destination: str, password: str) -> str | None:
    identity = destination.strip().lower() if channel == "email" else destination.strip()
    salt, digest = hash_password(password)
    with database() as conn:
        account = conn.execute("SELECT id FROM comm_users WHERE email=? OR phone=?", (identity, identity)).fetchone()
        if account is None:
            return None
        cursor = conn.execute(
            "UPDATE comm_users SET password_salt=?, password_hash=? WHERE id=?",
            (salt, digest, account["id"]),
        )
        conn.execute("DELETE FROM comm_sessions WHERE user_id=?", (account["id"],))
    return account["id"] if cursor.rowcount > 0 else None


async def disconnect_user(user_id: str) -> None:
    sockets = list(connections.get(user_id, set()))
    for socket in sockets:
        try:
            await socket.close(code=1008)
        except Exception:
            pass
    connections.pop(user_id, None)


def can_message(first_role: str, second_role: str) -> bool:
    return (first_role in EXPERT_ROLES and second_role in PRACTITIONER_ROLES) or (
        second_role in EXPERT_ROLES and first_role in PRACTITIONER_ROLES
    )


def get_peer(user_id: str, peer_id: str) -> sqlite3.Row:
    if user_id == peer_id:
        raise HTTPException(status_code=400, detail="You cannot start a conversation with yourself.")
    with database() as conn:
        peer = conn.execute("SELECT * FROM comm_users WHERE id=?", (peer_id,)).fetchone()
        user = conn.execute("SELECT role FROM comm_users WHERE id=?", (user_id,)).fetchone()
    if peer is None or user is None or not can_message(user["role"], peer["role"]):
        raise HTTPException(status_code=404, detail="This conversation is not available.")
    return peer


def conversation_key(first_id: str, second_id: str) -> str:
    return ":".join(sorted((first_id, second_id)))


def message_dict(row: sqlite3.Row) -> dict[str, str | int]:
    return {
        "id": row["id"],
        "sender_id": row["sender_id"],
        "recipient_id": row["recipient_id"],
        "text": row["text"],
        "created_at": row["created_at"],
    }


async def send_to_user(user_id: str, payload: dict) -> None:
    for socket in list(connections.get(user_id, set())):
        try:
            await socket.send_json(payload)
        except Exception:
            connections.get(user_id, set()).discard(socket)


@router.post("/register")
def register(payload: RegisterRequest, response: Response) -> dict:
    email = payload.email.strip().lower()
    if not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", email):
        raise HTTPException(status_code=422, detail="Enter a valid email address.")
    salt, digest = hash_password(payload.password)
    user_id = secrets.token_urlsafe(18)
    try:
        with database() as conn:
            conn.execute(
                "INSERT INTO comm_users(id, name, email, phone, role, password_salt, password_hash, created_at) "
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                (user_id, payload.name.strip(), email, payload.phone.strip(), payload.role, salt, digest, int(time.time())),
            )
    except sqlite3.IntegrityError as exc:
        raise HTTPException(status_code=409, detail="An account with this email already exists.") from exc
    session_token(response, user_id)
    return {"user": {"id": user_id, "name": payload.name.strip(), "email": email, "role": payload.role}}


@router.post("/login")
def login(payload: LoginRequest, response: Response) -> dict:
    email = payload.email.strip().lower()
    with database() as conn:
        row = conn.execute("SELECT * FROM comm_users WHERE email=?", (email,)).fetchone()
    if row is None:
        raise HTTPException(status_code=401, detail="Email or password is incorrect.")
    _, digest = hash_password(payload.password, bytes.fromhex(row["password_salt"]))
    if not hmac.compare_digest(digest, row["password_hash"]):
        raise HTTPException(status_code=401, detail="Email or password is incorrect.")
    session_token(response, row["id"])
    return {"user": public_user(row)}


@router.post("/logout")
async def logout(request: Request, response: Response) -> dict[str, bool]:
    token = request.cookies.get(SESSION_COOKIE)
    user_id = None
    if token:
        try:
            user_id = current_user(request)["id"]
        except HTTPException:
            pass
        with database() as conn:
            conn.execute("DELETE FROM comm_sessions WHERE token_hash=?", (hashlib.sha256(token.encode()).hexdigest(),))
    if user_id:
        await disconnect_user(user_id)
    response.delete_cookie(SESSION_COOKIE, path="/")
    return {"ok": True}


@router.get("/me")
def me(request: Request) -> dict[str, dict[str, str]]:
    return {"user": current_user(request)}


@router.delete("/me")
async def delete_account(payload: DeleteAccountRequest, request: Request, response: Response) -> dict[str, bool]:
    user = current_user(request)
    with database() as conn:
        row = conn.execute("SELECT password_salt, password_hash FROM comm_users WHERE id=?", (user["id"],)).fetchone()
        if not row or payload.email.strip().lower() != user["email"].lower():
            raise HTTPException(status_code=401, detail="Account details are incorrect.")
        _, digest = hash_password(payload.password, bytes.fromhex(row["password_salt"]))
        if not hmac.compare_digest(digest, row["password_hash"]):
            raise HTTPException(status_code=401, detail="Account details are incorrect.")
        conn.execute("DELETE FROM comm_users WHERE id=?", (user["id"],))
    await disconnect_user(user["id"])
    response.delete_cookie(SESSION_COOKIE, path="/")
    return {"ok": True}


@router.get("/experts")
def experts(kind: Literal["kilimo", "ufugaji"] | None = None) -> dict[str, list[dict]]:
    roles = ("crop_expert",) if kind == "kilimo" else ("livestock_expert",) if kind == "ufugaji" else tuple(EXPERT_ROLES)
    placeholders = ",".join("?" for _ in roles)
    with database() as conn:
        rows = conn.execute(
            f"SELECT id, name, email, role FROM comm_users WHERE role IN ({placeholders}) ORDER BY name COLLATE NOCASE",
            roles,
        ).fetchall()
    result = []
    for row in rows:
        expert = public_peer(row)
        expert["online"] = bool(connections.get(row["id"]))
        result.append(expert)
    return {"experts": result}


@router.get("/ice-servers")
def ice_servers(request: Request) -> dict[str, list[dict]]:
    current_user(request)
    try:
        servers = json.loads(settings.WEBRTC_ICE_SERVERS)
    except json.JSONDecodeError as exc:
        raise HTTPException(status_code=503, detail="WebRTC ICE server configuration is invalid.") from exc
    if not isinstance(servers, list) or not servers:
        raise HTTPException(status_code=503, detail="No WebRTC ICE servers are configured.")
    return {"ice_servers": servers}


@router.get("/threads")
def threads(request: Request) -> dict[str, list[dict]]:
    user = current_user(request)
    with database() as conn:
        peer_rows = conn.execute(
            "SELECT DISTINCT CASE WHEN sender_id=? THEN recipient_id ELSE sender_id END AS peer_id "
            "FROM comm_messages WHERE sender_id=? OR recipient_id=?",
            (user["id"], user["id"], user["id"]),
        ).fetchall()
        result = []
        for item in peer_rows:
            peer = conn.execute("SELECT id, name, role FROM comm_users WHERE id=?", (item["peer_id"],)).fetchone()
            if not peer or not can_message(user["role"], peer["role"]):
                continue
            last = conn.execute(
                "SELECT * FROM comm_messages WHERE conversation_key=? ORDER BY id DESC LIMIT 1",
                (conversation_key(user["id"], peer["id"]),),
            ).fetchone()
            result.append({"peer": public_peer(peer), "last_message": message_dict(last) if last else None})
    result.sort(key=lambda item: (item["last_message"] or {}).get("id", 0), reverse=True)
    return {"threads": result}


@router.get("/threads/{peer_id}/messages")
def get_messages(peer_id: str, request: Request) -> dict[str, list[dict]]:
    user = current_user(request)
    get_peer(user["id"], peer_id)
    with database() as conn:
        rows = conn.execute(
            "SELECT * FROM comm_messages WHERE conversation_key=? ORDER BY id ASC LIMIT 500",
            (conversation_key(user["id"], peer_id),),
        ).fetchall()
    return {"messages": [message_dict(row) for row in rows]}


@router.post("/threads/{peer_id}/messages")
async def post_message(peer_id: str, payload: MessageRequest, request: Request) -> dict:
    user = current_user(request)
    peer = get_peer(user["id"], peer_id)
    text = payload.text.strip()
    if not text:
        raise HTTPException(status_code=422, detail="Message cannot be empty.")
    with database() as conn:
        cursor = conn.execute(
            "INSERT INTO comm_messages(conversation_key, sender_id, recipient_id, text, created_at) "
            "VALUES (?, ?, ?, ?, ?)",
            (conversation_key(user["id"], peer_id), user["id"], peer_id, text, int(time.time() * 1000)),
        )
        row = conn.execute("SELECT * FROM comm_messages WHERE id=?", (cursor.lastrowid,)).fetchone()
    message = message_dict(row)
    event = {"type": "message", "message": message, "peer": {"id": user["id"], "name": user["name"], "role": user["role"]}}
    await send_to_user(peer_id, event)
    return {"message": message, "peer": public_peer(peer)}


@router.websocket("/ws")
async def communications_socket(websocket: WebSocket) -> None:
    token = websocket.cookies.get(SESSION_COOKIE)
    origin = websocket.headers.get("origin")
    allowed_origins = {item.strip() for item in settings.CORS_ORIGINS.split(",") if item.strip()}
    if origin and origin not in allowed_origins:
        await websocket.close(code=1008)
        return
    if not token:
        await websocket.close(code=1008)
        return
    token_hash = hashlib.sha256(token.encode()).hexdigest()
    with database() as conn:
        user = conn.execute(
            "SELECT u.* FROM comm_sessions s JOIN comm_users u ON u.id=s.user_id "
            "WHERE s.token_hash=? AND s.expires_at>?",
            (token_hash, int(time.time())),
        ).fetchone()
    if user is None:
        await websocket.close(code=1008)
        return
    user_id = user["id"]
    await websocket.accept()
    connections.setdefault(user_id, set()).add(websocket)
    try:
        while True:
            event = await websocket.receive_json()
            if event.get("type") != "signal":
                continue
            peer_id = str(event.get("to", ""))
            signal_type = event.get("event")
            if signal_type not in {"offer", "answer", "candidate", "hangup", "decline"}:
                continue
            try:
                get_peer(user_id, peer_id)
            except HTTPException:
                await websocket.send_json({"type": "error", "detail": "Call recipient is unavailable."})
                continue
            if not connections.get(peer_id):
                await websocket.send_json({"type": "error", "code": "peer_offline", "detail": "The other person is offline."})
                continue
            await send_to_user(peer_id, {
                "type": "signal",
                "event": signal_type,
                "from": user_id,
                "name": user["name"],
                "role": user["role"],
                "data": event.get("data"),
            })
    except WebSocketDisconnect:
        pass
    finally:
        connections.get(user_id, set()).discard(websocket)
        if not connections.get(user_id):
            connections.pop(user_id, None)