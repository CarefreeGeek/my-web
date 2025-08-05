import React from "react";
import { Terminal, Globe, Database } from "lucide-react";

const courses = [
  {
    title: "Full Stack Web Development",
    icon: <Globe className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    description:
      "HTML, CSS, JS, React, Django — sab ek course mein. Real projects, real learning.",
  },
  {
    title: "Backend with Python & Django",
    icon: <Database className="w-8 h-8 text-green-600 dark:text-green-400" />,
    description:
      "Django, REST API, PostgreSQL aur deployment — job-ready backend skills with full guidance.",
  },
  {
    title: "JavaScript Mastery Bootcamp",
    icon: <Terminal className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
    description:
      "JavaScript ki gahraiyan — banaye apps, samjhein logic, aur crack karein interviews confidently.",
  },
];

const Courses = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          📚 Popular Courses
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Chuno apna rasta, aur coding ki duniya mein nikal pado — hum saath hain!
        </p>

        <div className="grid gap-10 md:grid-cols-3 text-left">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {course.description}
              </p>
              <a
                href="/join"
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                Join Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
