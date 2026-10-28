from fastapi import APIRouter

router = APIRouter()

@router.get("/me")
async def read_user_me():
    return {"username": "test_user", "email": "test@example.com"}
