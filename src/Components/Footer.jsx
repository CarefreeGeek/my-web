import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:px-10 lg:px-20 flex flex-col md:flex-row justify-between gap-10">

        <div>
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">FreeGeek</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Free ka mila hua gyan free me hi bat diya.  
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">© {new Date().getFullYear()} FreeGeek. All rights reserved.</p>
        </div>


        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/courses" className="hover:underline">Courses</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/join" className="hover:underline">Join Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Support</h4>
            <ul className="space-y-1">
              <li><a href="/faq" className="hover:underline">FAQs</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Follow Us</h4>
          <div className="flex gap-4 mt-2 text-gray-600 dark:text-gray-300">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5 hover:text-indigo-600" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="w-5 h-5 hover:text-blue-500" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5 hover:text-pink-500" /></a>
            <a href="https://linkedin.com/in/carefreegeek" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 hover:text-blue-700" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
