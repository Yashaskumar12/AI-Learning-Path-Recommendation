from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from db.database import get_db
from models.course import Course
from models.event import Event
from models.user_skill import UserSkill

router = APIRouter()


@router.get("/{user_id}/{roadmap_id}")
def get_progress(user_id: str, roadmap_id: str, db: Session = Depends(get_db)):
    # total courses in roadmap
    total_courses = (
        db.query(func.count(Course.id))
        .filter(Course.roadmap_id == roadmap_id)
        .scalar()
    )
    total_courses = total_courses or 0

    # completed courses
    completed_courses = (
        db.query(func.count(func.distinct(Event.course_id)))
        .filter(
            Event.user_id == user_id,
            Event.event_type == "course_completed",
            Event.roadmap_id == roadmap_id
        )
        .scalar()
    )
    completed_courses = completed_courses or 0

    # skill data
    skill = (
        db.query(UserSkill)
        .filter(
            UserSkill.user_id == user_id,
            UserSkill.skill_name == roadmap_id
        )
        .first()
    )

    trust_score = skill.trust_score if skill and skill.trust_score is not None else 800.0
    proficiency_level = skill.proficiency_level if skill and skill.proficiency_level is not None else 0.0

    progress_percent = (
        (completed_courses / total_courses) * 100
        if total_courses > 0 else 0.0
    )
    
    # Clamp progress_percent to 100%
    progress_percent = min(100.0, progress_percent)

    return {
        "roadmap_id": roadmap_id,
        "total_courses": total_courses,
        "completed_courses": completed_courses,
        "progress_percent": round(progress_percent, 2),
        "trust_score": float(trust_score),
        "proficiency_level": float(proficiency_level)
    }
