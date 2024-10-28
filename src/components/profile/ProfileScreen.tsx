import React from 'react';

export function ProfileScreen() {
  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <div className="bg-purple-600 p-4">
        <h1 className="text-2xl font-bold text-white">Profile</h1>
      </div>
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
            <button className="text-purple-600">Edit Photo</button>
          </div>
          
          <div className="space-y-4 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                rows={3}
                placeholder="Tell us about yourself"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Interests</label>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  Travel
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  Music
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  Reading
                </span>
                <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  + Add More
                </button>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-purple-600 text-white p-3 rounded-lg mt-6">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}