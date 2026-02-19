import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProgress } from "../../hooks/useProgress";

interface Course {
    id: string;
    title: string;
    difficulty_level: number;
}

const BACKEND_URL = "http://localhost:8000";

export default function RoadmapDetailPage() {
    const { roadmapId } = useParams();
    const userId = localStorage.getItem("user_id") || "1";

    const { progress, loading: progressLoading } = useProgress(userId, roadmapId || "");

    const [courses, setCourses] = useState<Course[]>([]);
    const [coursesLoading, setCoursesLoading] = useState(true);

    useEffect(() => {
        async function loadCourses() {
            try {
                const res = await fetch(
                    `${BACKEND_URL}/courses?roadmap_id=${roadmapId}`
                );
                if (!res.ok) throw new Error("Failed to fetch courses");
                const data = await res.json();
                setCourses(data);
            } catch (err) {
                console.error(err);
            } finally {
                setCoursesLoading(false);
            }
        }

        if (roadmapId) {
            loadCourses();
        }
    }, [roadmapId]);

    if (coursesLoading) {
        return <div>Loading roadmap...</div>;
    }

    return (
        <div className="space-y-6">
            <Link to="/" className="text-blue-500 mb-4 block">
                ← Back
            </Link>

            <h1 className="text-2xl font-semibold capitalize mb-6">
                {roadmapId} Roadmap
            </h1>

            {/* Progress Section */}
            {progressLoading ? (
                <div className="mb-6 text-gray-500">Loading progress...</div>
            ) : progress ? (
                <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{progress.progress_percent.toFixed(1)}%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${progress.progress_percent}%` }}
                        />
                    </div>

                    <div className="text-sm text-gray-500">
                        {progress.completed_courses} of {progress.total_courses} completed
                    </div>
                </div>
            ) : (
                <div className="mb-6 text-gray-500">No progress yet</div>
            )}

            <div className="space-y-3">
                {courses.map((course) => (
                    <Link
                        key={course.id}
                        to={`/courses/${course.id}`}
                        className="block border p-4 rounded hover:bg-gray-50 transition"
                    >
                        <div className="font-medium">
                            {course.title}
                        </div>

                        <div className="text-sm text-gray-500">
                            Difficulty {course.difficulty_level}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
