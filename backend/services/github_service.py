import httpx

async def exchange_code_for_token(client_id: str, client_secret: str, code: str, redirect_uri: str, state: str) -> dict:
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://github.com/login/oauth/access_token",
            headers={"Accept": "application/json"},
            data={
                "client_id": client_id,
                "client_secret": client_secret,
                "code": code,
                "redirect_uri": redirect_uri,
                "state": state,
            },
        )
        return response.json()

async def fetch_github_profile(access_token: str) -> dict:
    async with httpx.AsyncClient() as client:
        response = await client.get(
            "https://api.github.com/user",
            headers={
                "Authorization": f"Bearer {access_token}",
                "Accept": "application/json",
            },
        )
        return response.json()

# Stubs for future use
async def fetch_user_repositories(access_token: str) -> list:
    return []

async def fetch_repository_languages(access_token: str, repo_name: str) -> dict:
    return {}
