const BACKEND_URL = "http://localhost:8000";

export async function getGithubStatus() {
    const res = await fetch(`${BACKEND_URL}/auth/github/status`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    });

    if (!res.ok) throw new Error("Failed to fetch GitHub status");

    return res.json();
}

export async function redirectToGithubConnect() {
    const res = await fetch(`${BACKEND_URL}/auth/github/login`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to initialize GitHub OAuth flow");
    }

    const data = await res.json();
    window.location.href = data.url;
}
