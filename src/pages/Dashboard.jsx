import React, { useState } from "react";
import DashboardHome from "../Components/dashboard/DashboardHome.jsx";
import Projects from "../Components/dashboard/Projects.jsx";
import CommunityPosts from "../Components/dashboard/CommunityPosts.jsx";
import Notifications from "../Components/dashboard/Notifications.jsx";
import Profile from "../Components/dashboard/Profile.jsx";
import Settings from "../Components/dashboard/Settings.jsx";
import Sidebar from "../Components/dashboard/Sidebar.jsx";
import { useAuth } from '../Components/auth/useAuth.jsx';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const [selected, setSelected] = useState('dashboard');

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-gray-500">Loading...</div>;
  }

  if (!user) {
    return <div className="flex items-center justify-center h-screen text-gray-500">Not authenticated</div>;
  }

  const renderContent = () => {
    if (selected === 'dashboard' && !user.profile) return <DashboardHome />;
    if (selected === 'projects') return <Projects />;
    if (selected === 'community') return <CommunityPosts />;
    if (selected === 'notifications') return <Notifications />;
    if (selected === 'profile') return <Profile />;
    if (selected === 'settings') return <Settings />;
    return <DashboardHome />;
  };

  return (
    <div className="flex h-screen text-black bg-gray-100">
      <Sidebar onSelect={setSelected} />
      <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
    </div>
  );
}



















// import React from "react";
// import { Home, BookOpen, FolderKanban, Users, Bell, User, Settings, LogOut } from "lucide-react";
// import { useAuth } from "./useAuth";

// export default function Dashboard() {
//   const { user, logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     window.location.href = "/login";

//   };

//   return (
//     <div className="flex h-screen text-black bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 text-white shadow-lg flex flex-col p-4">
//         <div className="text-2xl font-bold text-blue-400 mb-8">DevPlatform</div>
//         <nav className="flex-1 space-y-4">
//           <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
//             <Home size={20} /> <span>Dashboard</span>
//           </a>
//           {/* <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
//             <BookOpen size={20} /> <span>My Learning</span>
//           </a> */}
//           <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
//             <FolderKanban size={20} /> <span>Projects</span>
//           </a>
//           <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
//             <Users size={20} /> <span>Community Posts</span>
//           </a>
//           <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
//             <Bell size={20} /> <span>Notifications</span>
//           </a>
//           <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
//             <User size={20} /> <span>Profile</span>
//           </a>
//           <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
//             <Settings size={20} /> <span>Settings</span>
//           </a>
//         <button
//           onClick={handleLogout}
//           className="flex items-center space-x-2 text-red-400 hover:text-red-300 mt-4"
//           >
//           <LogOut size={20} /> <span>Logout</span>
//         </button>
//           </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         {/* User Overview */}
//         <section className="mb-6">
//           <div className="bg-white p-6 rounded-2xl shadow">
//             <div className="flex items-center space-x-4">
//               <div>
//                 <h2 className="text-xl font-semibold">{user?.profile?.fullName || user?.userName || "User"}</h2>
//                 <p className="text-gray-500">
//                   {user?.profile?.role ? `${user.profile.role}` : "Not define"} |
//                   {user?.enrolledMaterials ? ` Courses: ${user.enrolledMaterials.length}` : " Courses: 0"} |
//                   {user?.projects ? ` Projects: ${user.projects.length}` : " Projects: 0"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
        
//       </main>
//     </div>
//   );
// }
