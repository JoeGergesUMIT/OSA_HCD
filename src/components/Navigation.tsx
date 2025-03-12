import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Moon, BookOpen, ListTodo, MessageCircle, Video } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between py-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center p-2 ${
                isActive ? 'text-purple-600' : 'text-gray-600'
              }`
            }
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </NavLink>
          <NavLink
            to="/sleep"
            className={({ isActive }) =>
              `flex flex-col items-center p-2 ${
                isActive ? 'text-purple-600' : 'text-gray-600'
              }`
            }
          >
            <Moon size={24} />
            <span className="text-xs mt-1">Sleep</span>
          </NavLink>
          <NavLink
            to="/knowledge"
            className={({ isActive }) =>
              `flex flex-col items-center p-2 ${
                isActive ? 'text-purple-600' : 'text-gray-600'
              }`
            }
          >
            <BookOpen size={24} />
            <span className="text-xs mt-1">Learn</span>
          </NavLink>
          <NavLink
            to="/recommendations"
            className={({ isActive }) =>
              `flex flex-col items-center p-2 ${
                isActive ? 'text-purple-600' : 'text-gray-600'
              }`
            }
          >
            <ListTodo size={24} />
            <span className="text-xs mt-1">Tips</span>
          </NavLink>
          <NavLink
            to="/teleconsultation"
            className={({ isActive }) =>
              `flex flex-col items-center p-2 ${
                isActive ? 'text-purple-600' : 'text-gray-600'
              }`
            }
          >
            <Video size={24} />
            <span className="text-xs mt-1">Consult</span>
          </NavLink>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `flex flex-col items-center p-2 ${
                isActive ? 'text-purple-600' : 'text-gray-600'
              }`
            }
          >
            <MessageCircle size={24} />
            <span className="text-xs mt-1">Chat</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;