import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Course = {
  id: string;
  title: string;
  roadmap_id: string;
  difficulty_level: number | null;
  description?: string | null;
};

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [roadmap, setRoadmap] = useState<any[]>([]);
  const [roadmapLoading, setRoadmapLoading] = useState(true);

  useEffect(() => {
    if (!courseId) return;

    fetch(`http://localhost:8000/courses/${courseId}`)
      .then((res) => res.json())
      .then(setCourse)
      .catch(() => setCourse(null));

    const fetchRoadmap = async () => {
      try {
        const res = await fetch(`http://localhost:8000/courses/${courseId}/roadmap`);
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        setRoadmap(Array.isArray(data) ? data : []);
      } catch {
        setRoadmap([]);
      } finally {
        setRoadmapLoading(false);
      }
    };
    fetchRoadmap();
  }, [courseId]);

  if (!course) {
    return <div className="space-y-6">Loading course...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1>{course.title}</h1>
        <p className="text-muted-foreground">{course.description}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-8 mb-4">Learning Roadmap</h2>
        {roadmapLoading ? (
          <div>Loading roadmap...</div>
        ) : (
          Object.entries(
            Array.isArray(roadmap)
              ? roadmap.reduce((acc: any, item: any) => {
                const level = item.difficulty_level ?? 0;
                if (!acc[level]) acc[level] = [];
                acc[level].push(item);
                return acc;
              }, {})
              : {}
          ).map(([difficultyLevel, items]) => (
            <div key={difficultyLevel} className="mb-4">
              <h3 className="font-medium mb-2">Difficulty {difficultyLevel}</h3>
              {(items as any[]).map((item: any) => (
                <div key={item.id} className="border rounded p-4 mb-3">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Difficulty: {item.difficulty_level}
                  </p>
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-[6px] border border-border p-4 bg-card">
          <p className="text-sm text-muted-foreground">Roadmap</p>
          <p className="font-medium">{course.roadmap_id}</p>
        </div>
        <div className="rounded-[6px] border border-border p-4 bg-card">
          <p className="text-sm text-muted-foreground">Difficulty</p>
          <p className="font-medium">{course.difficulty_level}</p>
        </div>
        <div className="rounded-[6px] border border-border p-4 bg-card">
          <p className="text-sm text-muted-foreground">Course ID</p>
          <p className="font-medium">{course.id}</p>
        </div>
      </div>
    </div>
  );
}
