from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from db.database import get_db
from models.course import Course
from models.course_prerequisite import CoursePrerequisite

router = APIRouter()


@router.get("")
def list_courses(
    limit: int = Query(default=100, ge=1),
    roadmap_id: str | None = Query(default=None),
    db: Session = Depends(get_db),
) -> list[dict[str, str | int | None]]:
    query = db.query(Course)
    
    if roadmap_id:
        query = query.filter(Course.roadmap_id == roadmap_id)
    
    courses = query.order_by(Course.difficulty_level).limit(limit).all()
    return [
        {
            "id": course.id,
            "title": course.title,
            "roadmap_id": course.roadmap_id,
            "difficulty_level": course.difficulty_level,
        }
        for course in courses
    ]


@router.get("/{course_id}")
def get_course(course_id: str, db: Session = Depends(get_db)):
    course = db.query(Course).filter(Course.id == course_id).first()

    if not course:
        raise HTTPException(status_code=404, detail="Course not found")

    return {
        "id": course.id,
        "title": course.title,
        "roadmap_id": course.roadmap_id,
        "difficulty_level": course.difficulty_level,
        "description": course.description,
    }


@router.get("/{course_id}/roadmap")
def get_course_roadmap(course_id: str, db: Session = Depends(get_db)):
    prereqs = db.query(CoursePrerequisite).filter(
        CoursePrerequisite.course_id == course_id
    ).all()

    prerequisite_ids = [p.prerequisite_id for p in prereqs]

    if not prerequisite_ids:
        return []

    courses = db.query(Course).filter(
        Course.id.in_(prerequisite_ids)
    ).all()

    return [
        {
            "id": c.id,
            "title": c.title,
            "difficulty_level": c.difficulty_level,
            "roadmap_id": c.roadmap_id
        }
        for c in courses
    ]
