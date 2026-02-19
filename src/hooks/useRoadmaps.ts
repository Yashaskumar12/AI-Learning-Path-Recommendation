
import { useEffect, useState } from "react";
import { getRoadmaps, Roadmap } from "../services/roadmapApi";

export function useRoadmaps() {
    const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function load() {
            try {
                const data = await getRoadmaps();
                setRoadmaps(data);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    return { roadmaps, loading, error };
}
