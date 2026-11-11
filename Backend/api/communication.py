import hashlib
import hmac
import json
import re
import secrets
import sqlite3
import time
from contextlib import contextmanager
from datetime import datetime, timezone
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
    name: str = Field(min_length=2, max_length=120)
    email: str = Field(min_length=5, max_length=254)
    phone: str = Field(default="", max_length=30)
    password: str = Field(min_length=6, max_length=100)
    role: Literal["crop_expert", "livestock_expert", "farmer", "livestock_keeper"]
    nida_name: str = Field(default="", max_length=120)
    education_level: str = Field(default="", max_length=50)
    college_name: str = Field(default="", max_length=150)
    reg_number: str = Field(default="", max_length=60)
    license_expiry: str = Field(default="", max_length=30)
    cert_doc: str = Field(default="")
    license_doc: str = Field(default="")


class LoginRequest(BaseModel):
    email: str = Field(min_length=3, max_length=254)
    password: str = Field(min_length=6, max_length=100)


class ExpertStatusUpdateRequest(BaseModel):
    status: Literal["Approved", "Rejected", "Pending_Verification"]
    reason: str = Field(default="", max_length=500)


class MessageRequest(BaseModel):
    text: str = Field(min_length=1, max_length=4000)


class DeleteAccountRequest(BaseModel):
    email: str = Field(min_length=5, max_length=254)
    password: str = Field(min_length=6, max_length=100)


def hash_password(password: str, salt: bytes | None = None) -> tuple[str, str]:
    salt = salt or secrets.token_bytes(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, PASSWORD_ITERATIONS)
    return salt.hex(), digest.hex()


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
            status TEXT NOT NULL DEFAULT 'Approved',
            nida_name TEXT DEFAULT '',
            education_level TEXT DEFAULT '',
            college_name TEXT DEFAULT '',
            reg_number TEXT DEFAULT '',
            license_expiry TEXT DEFAULT '',
            cert_doc TEXT DEFAULT '',
            license_doc TEXT DEFAULT '',
            rejection_reason TEXT DEFAULT '',
            verified_at INTEGER DEFAULT NULL,
            verified_by TEXT DEFAULT '',
            password_salt TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            created_at INTEGER NOT NULL,
            last_username_changed_at INTEGER DEFAULT NULL,
            last_active_at INTEGER DEFAULT NULL
        );
        CREATE TABLE IF NOT EXISTS comm_user_activity (
            user_id TEXT NOT NULL,
            active_date TEXT NOT NULL,
            PRIMARY KEY (user_id, active_date),
            FOREIGN KEY (user_id) REFERENCES comm_users(id) ON DELETE CASCADE
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
        CREATE INDEX IF NOT EXISTS idx_comm_user_activity_user
            ON comm_user_activity(user_id, active_date);
        """
    )

    columns = [
        ("status", "TEXT NOT NULL DEFAULT 'Approved'"),
        ("nida_name", "TEXT DEFAULT ''"),
        ("education_level", "TEXT DEFAULT ''"),
        ("college_name", "TEXT DEFAULT ''"),
        ("reg_number", "TEXT DEFAULT ''"),
        ("license_expiry", "TEXT DEFAULT ''"),
        ("cert_doc", "TEXT DEFAULT ''"),
        ("license_doc", "TEXT DEFAULT ''"),
        ("rejection_reason", "TEXT DEFAULT ''"),
        ("verified_at", "INTEGER DEFAULT NULL"),
        ("verified_by", "TEXT DEFAULT ''"),
        ("last_username_changed_at", "INTEGER DEFAULT NULL"),
        ("last_active_at", "INTEGER DEFAULT NULL"),
    ]
    for col_name, col_def in columns:
        try:
            conn.execute(f"ALTER TABLE comm_users ADD COLUMN {col_name} {col_def}")
        except sqlite3.OperationalError:
            pass

    # Ensure root Super Admin account exists and matches Admin@!mkulima123
    try:
        admin_salt, admin_digest = hash_password("Admin@!mkulima123")
        admin_row = conn.execute(
            "SELECT id FROM comm_users WHERE id='admin_root' OR email='admin@miminikulima.com' OR name='@mimi ni mkulima'"
        ).fetchone()
        if not admin_row:
            conn.execute(
                "INSERT INTO comm_users (id, name, email, phone, role, status, password_salt, password_hash, created_at) "
                "VALUES ('admin_root', '@mimi ni mkulima', 'admin@miminikulima.com', '+255700000000', 'admin', 'Approved', ?, ?, ?)",
                (admin_salt, admin_digest, int(time.time())),
            )
        else:
            conn.execute(
                "UPDATE comm_users SET role='admin', status='Approved', password_salt=?, password_hash=? WHERE id=?",
                (admin_salt, admin_digest, admin_row["id"]),
            )
    except Exception:
        pass

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


def log_user_activity(user_id: str) -> None:
    now_ts = int(time.time())
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    try:
        with database() as conn:
            conn.execute("UPDATE comm_users SET last_active_at=? WHERE id=?", (now_ts, user_id))
            conn.execute(
                "INSERT OR IGNORE INTO comm_user_activity(user_id, active_date) VALUES (?, ?)",
                (user_id, today),
            )
    except Exception:
        pass


def public_user(row: sqlite3.Row) -> dict:
    keys = set(row.keys()) if hasattr(row, "keys") else set()
    return {
        "id": row["id"],
        "name": row["name"],
        "email": row["email"],
        "phone": row["phone"] if "phone" in keys else "",
        "role": row["role"],
        "status": row["status"] if "status" in keys else "Approved",
        "nida_name": row["nida_name"] if "nida_name" in keys else "",
        "education_level": row["education_level"] if "education_level" in keys else "",
        "college_name": row["college_name"] if "college_name" in keys else "",
        "reg_number": row["reg_number"] if "reg_number" in keys else "",
        "license_expiry": row["license_expiry"] if "license_expiry" in keys else "",
        "cert_doc": row["cert_doc"] if "cert_doc" in keys else "",
        "license_doc": row["license_doc"] if "license_doc" in keys else "",
        "rejection_reason": row["rejection_reason"] if "rejection_reason" in keys else "",
        "verified_at": row["verified_at"] if "verified_at" in keys else None,
        "verified_by": row["verified_by"] if "verified_by" in keys else "",
        "created_at": row["created_at"] if "created_at" in keys else None,
        "last_username_changed_at": row["last_username_changed_at"] if "last_username_changed_at" in keys else None,
        "last_active_at": row["last_active_at"] if "last_active_at" in keys else None,
    }


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


def current_user(request: Request) -> dict:
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
    log_user_activity(row["id"])
    return public_user(row)


def update_password_by_destination(channel: str, destination: str, password: str) -> str | None:
    identity = destination.strip().lower() if channel == "email" else destination.strip()
    salt, digest = hash_password(password)
    with database() as conn:
        account = conn.execute("SELECT id FROM comm_users WHERE lower(email)=lower(?) OR phone=?", (identity, identity)).fetchone()
        if account is None:
            # Create or synchronize user in comm_users
            new_id = secrets.token_hex(12)
            name_part = identity.split("@")[0].replace(".", " ").replace("_", " ").title() if "@" in identity else "Mkulima"
            conn.execute(
                "INSERT INTO comm_users (id, name, email, phone, role, password_salt, password_hash, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                (new_id, name_part, identity if "@" in identity else "", identity if "@" not in identity else "", "farmer", salt, digest, int(time.time())),
            )
            return new_id
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
    
    is_expert = payload.role in EXPERT_ROLES
    status = "Pending_Verification" if is_expert else "Approved"

    salt, digest = hash_password(payload.password)
    user_id = secrets.token_urlsafe(18)
    try:
        with database() as conn:
            conn.execute(
                "INSERT INTO comm_users(id, name, email, phone, role, status, nida_name, education_level, "
                "college_name, reg_number, license_expiry, cert_doc, license_doc, password_salt, password_hash, created_at) "
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (
                    user_id,
                    payload.name.strip(),
                    email,
                    payload.phone.strip(),
                    payload.role,
                    status,
                    payload.nida_name.strip() or payload.name.strip(),
                    payload.education_level.strip(),
                    payload.college_name.strip(),
                    payload.reg_number.strip(),
                    payload.license_expiry.strip(),
                    payload.cert_doc,
                    payload.license_doc,
                    salt,
                    digest,
                    int(time.time()),
                ),
            )
    except sqlite3.IntegrityError as exc:
        raise HTTPException(status_code=409, detail="An account with this email already exists.") from exc
    session_token(response, user_id)
    with database() as conn:
        row = conn.execute("SELECT * FROM comm_users WHERE id=?", (user_id,)).fetchone()
    return {"user": public_user(row)}


@router.post("/login")
def login(payload: LoginRequest, response: Response) -> dict:
    ident = payload.email.strip().lower()
    with database() as conn:
        row = conn.execute(
            "SELECT * FROM comm_users WHERE lower(email)=? OR lower(name)=? OR (id='admin_root' AND (? IN ('@mimi ni mkulima', 'admin@miminikulima.com', 'mimi ni mkulima')))",
            (ident, ident, ident),
        ).fetchone()
    if row is None:
        raise HTTPException(status_code=401, detail="Email or password is incorrect.")
    _, digest = hash_password(payload.password, bytes.fromhex(row["password_salt"]))
    if not hmac.compare_digest(digest, row["password_hash"]):
        raise HTTPException(status_code=401, detail="Email or password is incorrect.")
    session_token(response, row["id"])
    return {"user": public_user(row)}


# ========================================================
# Administrator Endpoints (Webapp Control & Verification)
# ========================================================

@router.get("/admin/experts")
def list_experts(status: str | None = None, request: Request = None) -> dict:
    user = current_user(request)
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin authorization required.")
    query = "SELECT * FROM comm_users WHERE role IN ('crop_expert', 'livestock_expert')"
    params = []
    if status and status != "all":
        query += " AND status=?"
        params.append(status)
    query += " ORDER BY created_at DESC"
    with database() as conn:
        rows = conn.execute(query, params).fetchall()
    return {"experts": [public_user(r) for r in rows]}


@router.post("/admin/experts/{expert_id}/status")
def update_expert_status(expert_id: str, payload: ExpertStatusUpdateRequest, request: Request = None) -> dict:
    admin = current_user(request)
    if admin.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin authorization required.")
    now_ts = int(time.time())
    with database() as conn:
        row = conn.execute("SELECT * FROM comm_users WHERE id=?", (expert_id,)).fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="Expert not found.")
        conn.execute(
            "UPDATE comm_users SET status=?, rejection_reason=?, verified_at=?, verified_by=? WHERE id=?",
            (payload.status, payload.reason.strip(), now_ts, admin.get("name", "Admin"), expert_id),
        )
        updated_row = conn.execute("SELECT * FROM comm_users WHERE id=?", (expert_id,)).fetchone()
    return {"ok": True, "expert": public_user(updated_row)}


@router.get("/admin/stats")
def get_admin_stats(request: Request = None) -> dict:
    admin = current_user(request)
    if admin.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin authorization required.")
    with database() as conn:
        total_users = conn.execute("SELECT count(*) as c FROM comm_users").fetchone()["c"]
        pending_experts = conn.execute("SELECT count(*) as c FROM comm_users WHERE status='Pending_Verification'").fetchone()["c"]
        approved_experts = conn.execute("SELECT count(*) as c FROM comm_users WHERE role IN ('crop_expert','livestock_expert') AND status='Approved'").fetchone()["c"]
        rejected_experts = conn.execute("SELECT count(*) as c FROM comm_users WHERE status='Rejected'").fetchone()["c"]
        total_messages = conn.execute("SELECT count(*) as c FROM comm_messages").fetchone()["c"]
    return {
        "total_users": total_users,
        "pending_experts": pending_experts,
        "approved_experts": approved_experts,
        "rejected_experts": rejected_experts,
        "total_messages": total_messages,
    }


@router.get("/admin/users")
def get_admin_users(request: Request = None) -> dict:
    admin = current_user(request)
    if admin.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin authorization required.")
    with database() as conn:
        rows = conn.execute("SELECT * FROM comm_users ORDER BY created_at DESC LIMIT 200").fetchall()
    return {"users": [public_user(r) for r in rows]}


@router.delete("/admin/users/{user_id}")
def delete_admin_user(user_id: str, request: Request = None) -> dict:
    admin = current_user(request)
    if admin.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin authorization required.")
    if user_id == "admin_root" or user_id == admin["id"]:
        raise HTTPException(status_code=400, detail="Cannot delete root administrator account.")
    with database() as conn:
        conn.execute("DELETE FROM comm_users WHERE id=?", (user_id,))
    return {"ok": True}


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
            f"SELECT id, name, email, role FROM comm_users WHERE role IN ({placeholders}) AND status='Approved' ORDER BY name COLLATE NOCASE",
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