import { useLocation, Link } from 'react-router-dom';
import { HomeIcon, ChatBubbleLeftIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export function Navigation() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  
  if (isLoginPage) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200">
      <div className="flex justify-around p-3">
        <Link to="/matches" className="flex flex-col items-center">
          <HomeIcon className="h-6 w-6 text-gray-500" />
          <span className="text-xs mt-1">Matches</span>
        </Link>
        <Link to="/chat" className="flex flex-col items-center">
          <ChatBubbleLeftIcon className="h-6 w-6 text-gray-500" />
          <span className="text-xs mt-1">Chat</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center">
          <UserCircleIcon className="h-6 w-6 text-gray-500" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center">
          <Cog6ToothIcon className="h-6 w-6 text-gray-500" />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </nav>
  );
}