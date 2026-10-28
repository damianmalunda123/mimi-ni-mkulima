from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.get("/me")
async def read_user_me():
    raise HTTPException(
        status_code=501,
        detail="User authentication is not configured on this backend.",
    )
