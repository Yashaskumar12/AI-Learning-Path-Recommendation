import sys
import os

# Add backend to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
# Import app and database
from main import app
from db.database import Base, get_db
from models import User, UserSkill, Event
from models.course import Course

# Setup test DB
SQLALCHEMY_DATABASE_URL = "sqlite:///./test_progress.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)

def test_progress_endpoint():
    # Reset DB
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    db = TestingSessionLocal()

    # 1. Create User
    user = User(email="progress@example.com", password_hash="pw")
    db.add(user)
    db.commit()
    db.refresh(user)
    user_id = str(user.id)
    print(f"Created user: {user_id}")

    # 2. Create Courses for 'terraform' roadmap
    courses = [
        Course(id="terraform:1", roadmap_id="terraform", node_id="1", title="TF 1"),
        Course(id="terraform:2", roadmap_id="terraform", node_id="2", title="TF 2"),
        Course(id="terraform:3", roadmap_id="terraform", node_id="3", title="TF 3"),
        Course(id="python:1", roadmap_id="python", node_id="1", title="Py 1") # Diff roadmap
    ]
    db.add_all(courses)
    db.commit()

    # 3. Create Events (Completed courses)
    # User completes 2 terraform courses + 1 duplicate + 1 python course
    events = [
        Event(user_id=user_id, event_type="course_completed", course_id="terraform:1", roadmap_id="terraform"),
        Event(user_id=user_id, event_type="course_completed", course_id="terraform:2", roadmap_id="terraform"),
        Event(user_id=user_id, event_type="course_completed", course_id="terraform:1", roadmap_id="terraform"), # Duplicate
        Event(user_id=user_id, event_type="course_completed", course_id="python:1", roadmap_id="python")
    ]
    db.add_all(events)
    db.commit()

    # 4. Create UserSkill
    skill = UserSkill(user_id=user_id, skill_name="terraform", trust_score=950.0, proficiency_level=0.45)
    db.add(skill)
    db.commit()

    # 5. Call Endpoint
    print("Requesting progress for terraform...")
    response = client.get(f"/progress/{user_id}/terraform")
    
    if response.status_code != 200:
        print(f"Error: {response.status_code} - {response.text}")
        exit(1)
        
    data = response.json()
    print(f"Response: {data}")

    # 6. Verify Logic
    # Total courses in terraform = 3
    # Completed unique = 2 (terraform:1, terraform:2) - distinct check
    # Progress = (2/3)*100 = 66.67%
    
    assert data["roadmap_id"] == "terraform"
    assert data["total_courses"] == 3
    assert data["completed_courses"] == 2
    assert data["trust_score"] == 950.0
    assert abs(data["progress_percent"] - 66.67) < 0.1

    print("\nVerification Passed! Progress calculation is correct.")

    db.close()
    if os.path.exists("./test_progress.db"):
        os.remove("./test_progress.db")

if __name__ == "__main__":
    test_progress_endpoint()
