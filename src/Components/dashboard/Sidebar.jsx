import React from "react";
import { Home, FolderKanban, Users, Bell, User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ onSelect }) {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("/auth/user/logout", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Logout failed");
      }
      const data = await response.json();
      console.log("Logout successful:", data);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, key: "dashboard" },
    { name: "Projects", icon: <FolderKanban size={20} />, key: "projects" },
    { name: "Community Posts", icon: <Users size={20} />, key: "community" },
    { name: "Notifications", icon: <Bell size={20} />, key: "notifications" },
    { name: "Profile", icon: <User size={20} />, key: "profile" },
    { name: "Settings", icon: <Settings size={20} />, key: "settings" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white shadow-lg flex flex-col p-4">
      <div className="text-2xl font-bold text-blue-400 mb-8">DevPlatform</div>
      <nav className="flex-1 space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onSelect(item.key)}
            className="flex items-center space-x-2 hover:text-blue-400 w-full text-left"
          >
            {item.icon} <span>{item.name}</span>
          </button>
        ))}
        <button
          onClick={handleLogout}
          className="flex items-center cursor-pointer space-x-2 text-red-400 hover:text-red-300 mt-4 w-full text-left"
        >
          <LogOut size={20} /> <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
}
