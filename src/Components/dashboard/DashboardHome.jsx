import React from "react";
export default function DashboardHome() {
  const { user } = {}
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <div className="flex items-center space-x-4">
        <div>
          <h2 className="text-xl font-semibold">
            {user?.profile?.fullName || user?.userName || "User"}
          </h2>
          <p className="text-gray-500">
            {user?.profile?.role ? `${user.profile.role}` : "Role not defined"} |{" "}
            {user?.enrolledMaterials ? `Courses: ${user.enrolledMaterials.length}` : "Courses: 0"} |{" "}
            {user?.projects ? `Projects: ${user.projects.length}` : "Projects: 0"}
          </p>
        </div>
      </div>
    </div>
  );
}
