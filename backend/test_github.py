import requests

try:
    requests.post("http://localhost:8000/auth/signup", json={"email":"test_user@example.com", "password":"test123"})
except:
    pass
    
login_res = requests.post("http://localhost:8000/auth/login", json={"email":"test_user@example.com", "password":"test123"})
if login_res.status_code != 200:
    print(f"Login failed: {login_res.text}")
    exit(1)

token = login_res.json()["access_token"]
headers = {"Authorization": f"Bearer {token}"}

# Test 1 - Status before login
print("Status Before GitHub:")
status_res = requests.get("http://localhost:8000/auth/github/status", headers=headers)
print(status_res.status_code, status_res.text)

# Test 2 - Grab Redirect URL (Mocking browser hit to /login)
print("\nFetching Redirect URL Endpoint:")
try:
    auth_req = requests.get("http://localhost:8000/auth/github/login", headers=headers, allow_redirects=False)
    print(auth_req.status_code)
    print("Redirect Location:", auth_req.headers.get("Location", None))
except Exception as e:
    print(e)
