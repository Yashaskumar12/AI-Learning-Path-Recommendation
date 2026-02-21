from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func, distinct

from db.database import get_db
from models.skill_profile import SkillProfile
from models.course import Course
from models.event import Event
from models.user import User
from core.security import get_current_user

router = APIRouter()

@router.get("/me/skills")
def get_user_skills(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    user_id = str(current_user.id)
    # Query all synthesized skills for the user
    profiles = db.query(SkillProfile).filter(SkillProfile.user_id == user_id).all()

    print(f"[UsersRouter] Fetching skills for {user_id}: found {len(profiles)} profiles")

    if not profiles:
        return {
            "user_id": user_id,
            "skills": []
        }

    skill_list = []

    for profile in profiles:
        roadmap_id = profile.skill_name
        
        # Count total courses in roadmap
        total_courses = db.query(func.count(Course.id)) \
            .filter(Course.roadmap_id == roadmap_id) \
            .scalar() or 0

        # Count completed courses
        completed_courses = db.query(func.count(distinct(Event.course_id))) \
            .filter(
                Event.user_id == user_id,
                Event.event_type == "course_completed",
                Event.roadmap_id == roadmap_id
            ) \
            .scalar() or 0

        # Calculate progress percent safely
        progress_percent = round((completed_courses / total_courses) * 100, 2) if total_courses > 0 else 0.0

        skill_list.append({
            "roadmap_id": roadmap_id,
            "trust_score": float(profile.synthesized_weight * 1000) if profile.synthesized_weight else 800.0,
            "proficiency_level": float(profile.confidence) if profile.confidence else 0.0,
            "completed_courses": completed_courses,
            "total_courses": total_courses,
            "progress_percent": progress_percent,
            "last_updated": profile.last_updated
        })

    return {
        "user_id": user_id,
        "skills": skill_list
    }
