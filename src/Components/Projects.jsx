import React from "react";
import { Laptop2, Smartphone, Server } from "lucide-react";

const projects = [
  {
    title: "Aahaaram – Restaurant Website",
    icon: <Laptop2 className="w-8 h-8 text-red-500 dark:text-red-400" />,
    description:
      "React + Tailwind se banaya gaya stylish food ordering site. Full responsive with menu & cart features.",
  },
  {
    title: "APPLICARE – Home Appliance Services",
    icon: <Smartphone className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    description:
      "Home Appliance service app. Django + AWS Lambda backend with React frontend.",
  },
  {
    title: "DevConnector – Social Platform for Coders",
    icon: <Server className="w-8 h-8 text-green-500 dark:text-green-400" />,
    description:
      "MERN stack pe banaya gaya professional network for developers. Auth, profile & posts included.",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          💼 Real Projects Showcase
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Theory se nahi, projects se banate hain real developers. Yeh lo kuch code ke sample!
        </p>

        <div className="grid gap-10 md:grid-cols-3 text-left">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href="/join"
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                Learn from this →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
