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
  const [learningPath, setLearningPath] = useState<any[]>([]);
  const [pathLoading, setPathLoading] = useState(true);

  useEffect(() => {
    if (!courseId) return;

    fetch(`http://localhost:8000/courses/${courseId}`)
      .then((res) => res.json())
      .then(setCourse)
      .catch(() => setCourse(null));

    const userId = localStorage.getItem("user_id");

    fetch(`http://localhost:8000/learning-path/${userId}/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        setLearningPath(data.path || []);
        setPathLoading(false);
      })
      .catch(() => setPathLoading(false));
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
        {pathLoading ? (
          <div>Loading learning path...</div>
        ) : (
          <div className="space-y-4">
            {learningPath.map((item: any) => {
              const status = item.status || "locked";
              let statusClasses = "border-gray-500/50 bg-gray-50/5 text-muted-foreground"; // locked

              if (status === "completed") {
                statusClasses = "border-green-500/50 bg-green-500/10";
              } else if (status === "ready") {
                statusClasses = "border-blue-500/50 bg-blue-500/10";
              }

              return (
                <div
                  key={item.id}
                  className={`border rounded p-4 flex justify-between items-center ${statusClasses}`}
                >
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm opacity-80">
                      Difficulty: {item.difficulty}
                    </p>
                  </div>
                  <div className="text-xs uppercase font-medium border px-2 py-1 rounded">
                    {status}
                  </div>
                </div>
              );
            })}
          </div>
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
