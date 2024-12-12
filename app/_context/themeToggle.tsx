import React from 'react';
import { useTheme } from './themeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle: React.FC = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg flex items-center gap-2 transition-all theme-toggle-shadow
        ${isDark 
          ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' 
          : 'bg-white text-gray-800 hover:bg-gray-100'}`}
      aria-label="Toggle theme"
    >
      <span className="text-sm font-medium mr-2">{isDark ? 'Dark' : 'Light'}</span>
      <FiSun
        className={`w-5 h-5 text-yellow-500 transition-all absolute ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
      />
      <FiMoon
        className={`w-5 h-5 text-blue-500 transition-all ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
      />
    </button>
  );
};

export default ThemeToggle;
