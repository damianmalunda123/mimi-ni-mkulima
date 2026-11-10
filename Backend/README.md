# Backend

## Run locally

From this directory, install `requirements.txt` and start the API:

```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

The API serves the frontend on the same origin at `http://127.0.0.1:8000/`. Accounts and private text messages are stored in `communications.sqlite3` by default; set `COMMS_DB_PATH` to choose another persistent location.

## Expert communication

People choose Farmer, Livestock keeper, Crop expert, or Livestock expert during signup. Expert roles are self-selected and are not independently verified. Private chat is stored on the backend and delivered to connected accounts over the authenticated WebSocket. Audio/video uses WebRTC inside the app; it does not open the phone dialer. Both users must be signed in and online to receive a call.

For production, serve the app over HTTPS, set `COOKIE_SECURE=true`, and set `CORS_ORIGINS` to the exact frontend origins. Configure `WEBRTC_ICE_SERVERS` with valid STUN and TURN servers; the example STUN server alone cannot connect peers on every network. Treat TURN credentials as deployment secrets and use time-limited credentials where supported.

The default message store is SQLite and WebSocket presence is process-local. Run a single API worker for this setup. Multi-worker or multi-instance deployments need shared persistent storage and a shared signaling/presence service.
