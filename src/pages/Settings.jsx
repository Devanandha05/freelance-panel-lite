import React from "react";
import { Save, Lock, Bell } from "lucide-react";

const Settings = () => {
  return (
    <div className="section space-y-10">
      <h2 className="text-2xl font-semibold text-primary dark:text-white">Settings</h2>

      {/* Account Settings */}
      <div className="bg-warning dark:bg-darkcard rounded-2xl shadow p-6 space-y-6">
        <h3 className="text-lg font-semibold text-primary dark:text-white">
          Account Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Full Name", value: "John Doe", type: "text" },
            { label: "Email Address", value: "johndoe@example.com", type: "email" },
            { label: "Phone", value: "+91 98765 43210", type: "text" },
            { label: "Location", value: "Chennai, India", type: "text" },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="text-sm text-muted dark:text-gray-400">{field.label}</label>
              <input
                type={field.type}
                defaultValue={field.value}
                className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f182c] text-black dark:text-white rounded-md"
              />
            </div>
          ))}
        </div>
        <button className="mt-4 px-4 py-2 bg-[#db8a74] hover:bg-[#c37964] dark:bg-cardblueD dark:hover:bg-[#49356f] text-white rounded-md flex items-center">
          <Save className="w-4 h-4 mr-2" /> Save Changes
        </button>
      </div>

      {/* Password Settings */}
      <div className="bg-warning dark:bg-darkcard rounded-2xl shadow p-6 space-y-6">
        <h3 className="text-lg font-semibold text-primary dark:text-white flex items-center gap-2">
          <Lock className="w-5 h-5" /> Change Password
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["Current Password", "New Password", "Confirm New Password"].map((label, idx) => (
            <div key={idx}>
              <label className="text-sm text-muted dark:text-gray-400">{label}</label>
              <input
                type="password"
                className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f182c] text-black dark:text-white rounded-md"
              />
            </div>
          ))}
        </div>
        <button className="mt-4 px-4 py-2 dark:bg-cardblueD dark:hover:bg-[#49356f] bg-[#db8a74] hover:bg-[#c37964] text-white rounded-md flex items-center">
          <Lock className="w-4 h-4 mr-2" /> Update Password
        </button>
      </div>

      {/* Notification Preferences */}
      <div className="bg-warning dark:bg-darkcard rounded-2xl shadow p-6 space-y-6">
        <h3 className="text-lg font-semibold text-primary dark:text-white flex items-center gap-2">
          <Bell className="w-5 h-5" /> Notification Preferences
        </h3>
        <div className="space-y-4">
          {[
            { label: "Email me when I get new invoices", defaultChecked: true },
            { label: "Send push notifications for project updates", defaultChecked: false },
            { label: "Monthly newsletter", defaultChecked: true },
          ].map((item, idx) => (
            <label key={idx} className="flex items-center space-x-2">
              <input
                type="checkbox"
                defaultChecked={item.defaultChecked}
                className="accent-[#db8a74]"
              />
              <span className="text-sm text-muted dark:text-gray-400">{item.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
