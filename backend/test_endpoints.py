import requests

# 1. Login
login_res = requests.post("http://localhost:8000/auth/login", json={"email":"test_user@example.com", "password":"test123"})
token = login_res.json()["access_token"]
headers = {"Authorization": f"Bearer {token}"}

# 2. Progress
progress_res = requests.get("http://localhost:8000/progress/terraform", headers=headers)
print("Progress:", progress_res.status_code, progress_res.json())

# 3. Learning Path
lp_res = requests.get("http://localhost:8000/learning-path/terraform:basics", headers=headers)
print("Learning Path:", lp_res.status_code, lp_res.json() if lp_res.status_code == 200 else lp_res.text)

# 4. Users Skills
skills_res = requests.get("http://localhost:8000/users/skills", headers=headers)
print("Users Skills:", skills_res.status_code, skills_res.json())

# 5. Events
event_res = requests.post("http://localhost:8000/events", headers=headers, json={"event_type":"course_completed", "course_id":"terraform:basics"})
print("Events:", event_res.status_code, event_res.json())

