import React from "react";

export default function Projects() {
  const projects = [
    { id: 1, name: "Project Alpha", status: "In Progress" },
    { id: 2, name: "Project Beta", status: "Completed" },
    { id: 3, name: "Project Gamma", status: "Pending" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-medium">{project.name}</h3>
            <p className={`mt-2 font-semibold ${project.status === "Completed" ? "text-green-500" : project.status === "Pending" ? "text-yellow-500" : "text-blue-500"}`}>
              {project.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
