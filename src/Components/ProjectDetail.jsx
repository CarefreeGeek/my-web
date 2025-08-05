// ProjectDetail.jsx
import React from "react";
import { X } from "lucide-react";

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed top-0 right-0 w-full sm:w-[90%] md:w-[70%] lg:w-[30%] h-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg shadow-xl z-50 overflow-y-auto transition-all">
      <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {project.name}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 dark:text-gray-300 hover:text-red-500"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-4 space-y-4 text-sm text-gray-700 dark:text-gray-300">
        <p className="whitespace-pre-wrap">
          {project.description || "No description provided."}
        </p>
        <p>
          <strong>Category:</strong> {project.category || "N/A"}
        </p>
        <p>
          <strong>Language:</strong> {project.language || "N/A"}
        </p>
        <p>
          <strong>Level:</strong> {project.level || "N/A"}
        </p>
        <p>
          <strong>Link:</strong>{" "}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline break-words"
          >
            {project.link}
          </a>
        </p>
        <p>
          <iframe
            src={project.link}
            width="100%"
            height="600"
            style={{ border: "none" }}
            title="External Website"
          ></iframe>

        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
