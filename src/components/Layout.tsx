import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import RecordingWidget from './RecordingWidget';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="max-w-md mx-auto h-screen flex flex-col">
        <main className="flex-1 overflow-y-auto pb-16">
          <Outlet />
        </main>
        <RecordingWidget />
        <Navigation />
      </div>
    </div>
  );
};

export default Layout;