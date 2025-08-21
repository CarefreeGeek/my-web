import React from "react";
import { Code, Users, Rocket } from "lucide-react";

const AfterHeroSection = () => {
  return (
    <section className="bg-transparent py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Kya Seekhoge Yahaan?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Real-world projects, full-stack coding, and job-ready skills, all in one place.        </p>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <Code className="text-indigo-600 dark:text-indigo-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Code Like a Pro</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Python, JavaScript, React, Django, everything taught through hands-on projects.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <Users className="text-green-600 dark:text-green-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Coding Community</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Local mentorship, group learning, and weekend coding meetups experience learning the real way.            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <Rocket className="text-pink-600 dark:text-pink-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Career Launchpad</h3>
            <p className="text-gray-600 dark:text-gray-300">
              From resume building to interview prep we’re with you at every step.            </p>
          </div>
        </div>

        <div className="mt-16">
          <a
            href="/join"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            🚀 Kickstart Your Tech Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default AfterHeroSection;
