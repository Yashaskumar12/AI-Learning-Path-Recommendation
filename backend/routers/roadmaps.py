from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from db.database import get_db
from models.course import Course

router = APIRouter()

@router.get("")
def get_roadmaps(db: Session = Depends(get_db)):
    # Group by roadmap_id and count courses
    # SQLite logic: group_by roadmap_id
    
    results = db.query(
        Course.roadmap_id,
        func.count(Course.id).label("topic_count")
    ).filter(
        Course.roadmap_id != None
    ).group_by(
        Course.roadmap_id
    ).all()
    
    return [
        {
            "id": r.roadmap_id,
            "topic_count": r.topic_count
        }
        for r in results
    ]
