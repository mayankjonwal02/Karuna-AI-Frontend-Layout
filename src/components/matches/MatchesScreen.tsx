import React from 'react';

const DUMMY_MATCHES = [
  { id: 1, name: 'Sarah Parker', age: 28, compatibility: 95, image: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'John Davis', age: 32, compatibility: 88, image: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Emma Wilson', age: 26, compatibility: 92, image: 'https://i.pravatar.cc/150?img=3' },
];

export function MatchesScreen() {
  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <div className="bg-purple-600 p-4">
        <h1 className="text-2xl font-bold text-white">Your Matches</h1>
      </div>
      
      <div className="p-4">
        {DUMMY_MATCHES.map((match) => (
          <div key={match.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
            <img
              src={match.image}
              alt={match.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold text-lg">{match.name}, {match.age}</h3>
              <div className="flex items-center mt-1">
                <div className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm">
                  {match.compatibility}% Match
                </div>
              </div>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}