import React from "react";

export default function Notifications() {
  const notifications = [
    { id: 1, message: "New project assigned", type: "info" },
    { id: 2, message: "Course completed", type: "success" },
    { id: 3, message: "Profile update required", type: "warning" },
  ];

  const getColor = (type) => {
    switch(type) {
      case "success": return "text-green-500";
      case "warning": return "text-yellow-500";
      case "info": return "text-blue-500";
      default: return "text-gray-500";
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      <div className="space-y-3">
        {notifications.map((note) => (
          <div key={note.id} className={`bg-white p-4 rounded-xl shadow hover:shadow-md transition ${getColor(note.type)}`}>
            {note.message}
          </div>
        ))}
      </div>
    </div>
  );
}

