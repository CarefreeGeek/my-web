import React from "react";

export default function Profile() {
  const { user } = {}
  console.log("User Profile:", user);
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <p><span className="font-semibold">Full Name:</span> {user?.profile?.fullName || "User"}</p>
      <p><span className="font-semibold">Username:</span> {user?.userName}</p>
      <p><span className="font-semibold">Role:</span> {user?.profile?.role || "Not defined"}</p>
      <p><span className="font-semibold">Courses:</span> {user?.enrolledMaterials?.length || 0}</p>
      <p><span className="font-semibold">Projects:</span> {user?.projects?.length || 0}</p>
    </div>
  );
}
