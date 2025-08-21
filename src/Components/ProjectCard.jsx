import React from "react";
import * as motion from "motion/react-client"

const ProjectCard = ({ project, onClick }) => {
  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  return (
    <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.15 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
        {project.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
        {project.about}
      </p>
      <div className="flex flex-wrap gap-2 text-xs mb-2">
        <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
          {project.languages}
        </span>
        <span className={`px-2 py-1 rounded ${levelColors[project.level]}`}>
          {project.level}
        </span>
      </div>
      <a
        href={project.link}
        target="_blank"
        className="text-blue-500 text-sm underline"
      >
        View Project
      </a>
    </motion.div>
  );
};

export default ProjectCard;
