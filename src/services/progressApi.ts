export interface Progress {
    roadmap_id: string;
    total_courses: number;
    completed_courses: number;
    progress_percent: number;
    trust_score: number;
    proficiency_level: number;
}

const BACKEND_URL = "http://localhost:8000";

export async function getProgress(roadmapId: string): Promise<Progress | null> {
    try {
        const res = await fetch(`${BACKEND_URL}/progress/${roadmapId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        });
        if (!res.ok) return null;

        return await res.json();
    } catch {
        return null;
    }
}
