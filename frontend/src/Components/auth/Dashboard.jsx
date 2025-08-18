import React from "react";
import { Home, BookOpen, FolderKanban, Users, Bell, User, Settings, LogOut } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen text-black bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-600 text-white shadow-lg flex flex-col p-4">
        <div className="text-2xl font-bold text-blue-600 mb-8">jzdfb</div>
        <nav className="flex-1 space-y-4">
          <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
            <Home size={20} /> <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
            <BookOpen size={20} /> <span>Learning</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
            <FolderKanban size={20} /> <span>Projects</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
            <Users size={20} /> <span>Community</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
            <Bell size={20} /> <span>Notifications</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
            <User size={20} /> <span>Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
            <Settings size={20} /> <span>Settings</span>
          </a>
        </nav>
        <a href="#" className="flex items-center space-x-2 text-red-600 hover:text-red-800 mt-4">
          <LogOut size={20} /> <span>Logout</span>
        </a>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* User Overview */}
        <section className="mb-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center space-x-4">
              <img src="https://via.placeholder.com/60" alt="avatar" className="rounded-full w-16 h-16" />
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-500">Courses Completed: 5 | Projects: 2 | Points: 320</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Progress */}
        <section className="mb-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-2">Learning Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div className="bg-blue-500 h-3 rounded-full" style={{ width: "60%" }}></div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Continue Learning
            </button>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-2">Your Projects</h3>
            <ul className="space-y-2">
              <li className="flex justify-between p-3 bg-gray-50 rounded-xl">
                <span>Portfolio Website</span>
                <span className="text-sm text-yellow-600">In Progress</span>
              </li>
              <li className="flex justify-between p-3 bg-gray-50 rounded-xl">
                <span>Chat App</span>
                <span className="text-sm text-green-600">Completed</span>
              </li>
            </ul>
            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">
              + Start New Project
            </button>
          </div>
        </section>

        {/* Community */}
        <section className="mb-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-2">Community Feed</h3>
            <ul className="space-y-2">
              <li className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer">
                How to optimize MongoDB queries?
              </li>
              <li className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer">
                React performance tips
              </li>
              <li className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer">
                Best way to structure large projects
              </li>
            </ul>
            <a href="#" className="text-blue-600 text-sm mt-2 inline-block">View All</a>
          </div>
        </section>

        {/* Notifications */}
        <section>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
            <ul className="space-y-2">
              <li className="p-3 bg-gray-50 rounded-xl">Your project got a new comment</li>
              <li className="p-3 bg-gray-50 rounded-xl">You earned the "Problem Solver" badge</li>
              <li className="p-3 bg-gray-50 rounded-xl">New reply on your community post</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
