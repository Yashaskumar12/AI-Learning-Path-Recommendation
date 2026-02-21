from fastapi.testclient import TestClient
from main import app
from db.database import SessionLocal, engine
from models.user import Base

Base.metadata.create_all(bind=engine)

def test_signup():
    with TestClient(app) as client:
        response = client.post(
            "/auth/signup",
            json={"email": "test_app123@example.com", "password": "password123"}
        )
        print("Status Code:", response.status_code)
        print("Response Body:", response.json())

if __name__ == "__main__":
    test_signup()
