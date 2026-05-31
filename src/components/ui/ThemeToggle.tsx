import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const themeContext = useContext(ThemeContext);

  const theme = themeContext?.theme ?? 'dark';
  const toggleTheme = themeContext?.toggleTheme ?? (() => {});

  return (
    <button
      onClick={toggleTheme}
      aria-label='Toggle Theme'
      className={`rounded-full border border-neutral-200 dark:border-[#181D27] flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white bg-neutral-50 dark:bg-[#0D0E12] hover:bg-neutral-200/50 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer outline-none relative overflow-hidden ${className}`}
    >
      <div
        className={`transform transition-all duration-500 ${
          theme === 'dark'
            ? 'rotate-180 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        }`}
      >
        🌙
      </div>

      <div
        className={`absolute transform transition-all duration-500 ${
          theme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-180 scale-0 opacity-0'
        }`}
      >
        ☀️
      </div>
    </button>
  );
};
