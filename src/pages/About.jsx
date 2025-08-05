import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl shadow-lg p-10"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Hello! 👋 I’m <span className="font-semibold">carefreegeek</span>, a
          passionate software developer from Banaras. I love crafting beautiful,
          functional, and performant web applications using modern technologies
          like <span className="text-blue-600 dark:text-blue-300">React</span>,{" "}
          <span className="text-green-600 dark:text-green-300">Node.js</span>,{" "}
          and <span className="text-purple-600 dark:text-purple-300">Django</span>. 
          I'm a big fan of the Banarasi style & language, and I mix that flair into my work. 🌸
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            What I Do 🚀
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li>🌐 Build full-stack applications (MERN, Django, AWS)</li>
            <li>🎨 Craft responsive UIs with Tailwind, Framer Motion</li>
            <li>📦 Deploy on Vercel, Netlify, and AWS</li>
            <li>📚 Mentor peers and share knowledge through content</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://live.staticflickr.com/65535/54689648712_cc3c9e21c8_b.jpg"
            alt="developer"
            width="350"
            height="350"
            className="rounded-full mx-auto shadow-lg max-w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
