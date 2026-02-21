import { useEffect, useState } from "react";
import { getProgress, Progress } from "../services/progressApi";

export function useProgress(userId: string, roadmapId: string) {

    const [progress, setProgress] = useState<Progress | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const data = await getProgress(roadmapId);
            setProgress(data);
            setLoading(false);
        }

        if (roadmapId) load();
    }, [userId, roadmapId]);

    return { progress, loading };
}
