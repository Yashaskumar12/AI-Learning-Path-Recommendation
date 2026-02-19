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

# Setup test DB
SQLALCHEMY_DATABASE_URL = "sqlite:///./test_reproduce.db"
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

def test_progress_tracking():
    # Reset DB
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    # 1. Create User
    db = TestingSessionLocal()
    user = User(email="test@example.com", password_hash="pw")
    db.add(user)
    db.commit()
    db.refresh(user)
    user_id = str(user.id)
    
    print(f"Created user with ID: {user_id}")
    
    # 2. Send Event
    payload = {
        "user_id": user_id,
        "event_type": "course_completed",
        "course_id": "python:basics"
    }
    print(f"Sending event: {payload}")
    response = client.post("/events", json=payload)
    
    if response.status_code != 200:
        print(f"Error: {response.status_code} - {response.text}")
        exit(1)
    
    assert response.status_code == 200
    print("Event received successfully.")
    
    # 3. Verify Event
    event = db.query(Event).filter(Event.user_id == user_id).first()
    if event:
        print(f"Event found: {event.id}, roadmap_id: {event.roadmap_id}")
        assert event.roadmap_id == "python", f"Expected roadmap_id 'python', got '{event.roadmap_id}'"
    else:
        print("Error: Event not found.")
        exit(1)
    
    # 4. Verify UserSkill (New)
    skill = db.query(UserSkill).filter(UserSkill.user_id == user_id, UserSkill.skill_name == "python").first()
    if skill:
        print(f"UserSkill found: {skill.skill_name}, trust_score: {skill.trust_score}, proficiency: {skill.proficiency_level}")
        assert skill.trust_score == 850
        assert abs(skill.proficiency_level - 0.1) < 0.0001
    else:
        print("Error: UserSkill not found.")
        exit(1)
    
    # 5. Send another event (Update)
    payload_update = {
        "user_id": user_id,
        "event_type": "course_completed",
        "course_id": "python:advanced"
    }
    print(f"Sending second event: {payload_update}")
    response = client.post("/events", json=payload_update)
    assert response.status_code == 200
    
    db.refresh(skill)
    print(f"UserSkill updated: {skill.skill_name}, trust_score: {skill.trust_score}, proficiency: {skill.proficiency_level}")
    assert skill.trust_score == 900
    assert abs(skill.proficiency_level - 0.15) < 0.0001
    
    print("\nVerification Passed! All logic works as expected.")
    
    db.close()
    if os.path.exists("./test_reproduce.db"):
        os.remove("./test_reproduce.db")

if __name__ == "__main__":
    test_progress_tracking()
