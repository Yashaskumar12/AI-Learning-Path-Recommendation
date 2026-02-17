from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class EventPayload(BaseModel):
    user_id: str
    event_type: str
    course_id: str


@router.post("")
def create_event(payload: EventPayload) -> dict[str, str]:
    return {"status": "event received"}
