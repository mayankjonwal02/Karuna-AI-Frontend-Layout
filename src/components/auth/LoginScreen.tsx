import React from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginScreen() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/matches');
  };

  return (
    <div className="min-h-screen bg-white p-6 space-y-4">
      <div className="flex flex-col items-center mb-6">
        <div className="h-24 w-24 bg-purple-600 rounded-full flex items-center justify-center mb-6">
          <span className="text-3xl text-white">K</span>
        </div>
        <h1 className="text-2xl font-bold text-purple-600">
          Welcome to Karuna AI
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Find meaningful connections with AI-powered matching
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-4 rounded-lg font-bold"
        >
          Sign In
        </button>
      </form>

      <div className="flex items-center my-4">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-500">or</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <button
        onClick={() => navigate('/matches')}
        className="w-full bg-blue-500 text-white p-4 rounded-lg font-bold"
      >
        Continue with Phone
      </button>

      <button
        onClick={() => navigate('/matches')}
        className="w-full bg-gray-500 text-white p-4 rounded-lg font-bold"
      >
        Continue as Guest
      </button>
    </div>
  );
}