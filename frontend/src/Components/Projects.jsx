import React from "react";
import { Laptop2, Smartphone, Server } from "lucide-react";

const projects = [
  {
    title: "Aahaaram – Restaurant Website",
    icon: <Laptop2 className="w-8 h-8 text-red-500 dark:text-red-400" />,
    description:
      "A stylish food ordering website built with React + Tailwind. Fully responsive with menu & cart features.",
  },
  {
    title: "APPLICARE – Home Appliance Services",
    icon: <Smartphone className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    description:
      "A home appliance service app. Django + AWS Lambda backend with a React frontend.",
  },
  {
    title: "DevConnector – Social Platform for Coders",
    icon: <Server className="w-8 h-8 text-green-500 dark:text-green-400" />,
    description:
      "A professional network for developers built on the MERN stack. Includes authentication, profiles & posts.",
  },
];


const Projects = () => {
  return (
    <section className="bg-transparent py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          💼 Real Projects Showcase
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Real developers aren’t made by theory, but by projects. Here’s a glimpse of some code sample!
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
