import React from "react";

export default function Settings() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div>
        <label className="block mb-1 font-medium">Notification Preferences</label>
        <select className="w-full p-2 border rounded-lg">
          <option>Email</option>
          <option>Push Notification</option>
          <option>None</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 font-medium">Theme</label>
        <select className="w-full p-2 border rounded-lg">
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
    </div>
  );
}
