import React from "react";

const ProjectFilters = ({ filters, setFilters }) => {
  const categories = ["All", "Web", "App", "AI", "ML"];
  const languages = ["All", "JavaScript", "Python", "C++"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Filter Projects</h3>
      <div className="space-y-3">
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Category</label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Language</label>
          <select
            value={filters.language}
            onChange={(e) => setFilters({ ...filters, language: e.target.value })}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            {languages.map((lang) => (
              <option key={lang}>{lang}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Level</label>
          <select
            value={filters.level}
            onChange={(e) => setFilters({ ...filters, level: e.target.value })}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            {levels.map((lvl) => (
              <option key={lvl}>{lvl}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;