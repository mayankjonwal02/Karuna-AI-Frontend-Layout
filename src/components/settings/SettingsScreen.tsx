import React from 'react';

export function SettingsScreen() {
  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <div className="bg-purple-600 p-4">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
      </div>
      
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md divide-y">
          <div className="p-4">
            <h3 className="text-lg font-medium">Account Settings</h3>
            <div className="mt-4 space-y-4">
              <button className="w-full text-left py-2">Edit Profile</button>
              <button className="w-full text-left py-2">Privacy Settings</button>
              <button className="w-full text-left py-2">Notifications</button>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-medium">Preferences</h3>
            <div className="mt-4 space-y-4">
              <button className="w-full text-left py-2">Match Preferences</button>
              <button className="w-full text-left py-2">Location Settings</button>
              <button className="w-full text-left py-2">Language</button>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-medium">Support</h3>
            <div className="mt-4 space-y-4">
              <button className="w-full text-left py-2">Help Center</button>
              <button className="w-full text-left py-2">Contact Us</button>
              <button className="w-full text-left py-2">Terms of Service</button>
              <button className="w-full text-left py-2">Privacy Policy</button>
            </div>
          </div>
          
          <div className="p-4">
            <button className="w-full text-red-600 text-left py-2">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}