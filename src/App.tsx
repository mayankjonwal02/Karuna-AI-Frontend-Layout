import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginScreen } from './components/auth/LoginScreen';
import { ProfileScreen } from './components/profile/ProfileScreen';
import { ChatScreen } from './components/chat/ChatScreen';
import { MatchesScreen } from './components/matches/MatchesScreen';
import { SettingsScreen } from './components/settings/SettingsScreen';
import { Navigation } from './components/common/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/matches" element={<MatchesScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
        </Routes>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;