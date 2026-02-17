from fastapi import APIRouter

router = APIRouter()


@router.get("/{user_id}")
def get_user_profile(user_id: str) -> dict[str, str | float]:
    return {
        "user_id": user_id,
        "skill_level": "beginner",
        "engagement_score": 0.65,
    }
