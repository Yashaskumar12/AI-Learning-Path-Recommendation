from db.database import SessionLocal, engine
from models.course import Course

with SessionLocal() as db:
    if not db.query(Course).filter_by(id="terraform:basics").first():
        db.add(Course(id="terraform:basics", title="Terraform Basics", roadmap_id="terraform", difficulty_level=100))
        db.commit()
