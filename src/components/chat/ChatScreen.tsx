import React from 'react';

const DUMMY_CHATS = [
  {
    id: 1,
    name: 'Sarah Parker',
    lastMessage: 'Hey, how are you doing?',
    time: '2m ago',
    image: 'https://i.pravatar.cc/150?img=1',
    unread: 2,
  },
  {
    id: 2,
    name: 'Dating Coach Amy',
    lastMessage: "Let's discuss your dating goals",
    time: '1h ago',
    image: 'https://i.pravatar.cc/150?img=4',
    unread: 0,
  },
];

export function ChatScreen() {
  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <div className="bg-purple-600 p-4">
        <h1 className="text-2xl font-bold text-white">Messages</h1>
      </div>
      
      <div className="p-4">
        {DUMMY_CHATS.map((chat) => (
          <div key={chat.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
            <img
              src={chat.image}
              alt={chat.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{chat.name}</h3>
                <span className="text-sm text-gray-500">{chat.time}</span>
              </div>
              <p className="text-gray-600 text-sm">{chat.lastMessage}</p>
            </div>
            {chat.unread > 0 && (
              <div className="ml-2 bg-purple-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                {chat.unread}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}