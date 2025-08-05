import React, { useState } from "react";
import projectsData from "./projects.json";
import ProjectCard from "../Components/ProjectCard.jsx";
import ProjectDetail from "../Components/ProjectDetail.jsx";
import ProjectFilters from "../Components/ProjectFilters.jsx";

const ProjectPage = () => {
  const [filters, setFilters] = useState({
    category: "All",
    language: "All",
    level: "All",
  });
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((proj) => {
    const category = proj.category || "";
    const language = proj.language || "";
    const level = proj.level || "";

    return (
      (filters.category === "All" || filters.category === category) &&
      (filters.language === "All" || language.includes(filters.language)) &&
      (filters.level === "All" || filters.level === level)
    );
  });

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full h-full lg:w-1/5 p-4">
        <ProjectFilters filters={filters} setFilters={setFilters} />
      </div>

      <div className="w-full lg:w-3/4 p-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <div className="fixed top-0 right-0 w-full md:w-1/10 h-full z-50 bg-white dark:bg-gray-900 shadow-xl overflow-y-auto transition-transform duration-300">
            <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;