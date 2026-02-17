from fastapi import APIRouter

router = APIRouter()


@router.get("/{user_id}")
def get_recommendation(user_id: str) -> dict[str, str]:
    return {
        "user_id": user_id,
        "recommended_course": "Machine Learning Fundamentals",
        "difficulty": "intermediate",
    }
