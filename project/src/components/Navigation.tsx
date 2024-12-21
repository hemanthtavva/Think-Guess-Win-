import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Play } from 'lucide-react';

export const Navigation: React.FC = () => {
  const navItems = [
    { to: "/", icon: <Home className="w-5 h-5" />, text: "Game" },
    { to: "/how-to-play", icon: <BookOpen className="w-5 h-5" />, text: "How to Play" },
    { to: "/demo", icon: <Play className="w-5 h-5" />, text: "Demo" }
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 mb-8 rounded-lg transition-colors duration-200">
      <ul className="flex justify-center space-x-8">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`
              }
            >
              {item.icon}
              <span>{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};