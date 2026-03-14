import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../provider/ThemeProvider.jsx';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        
        relative w-14 h-7 rounded-full border-2 border-foreground
        transition-colors duration-300
        bg-foreground
        flex items-center
        cursor-pointer
        group
        overflow-hidden
      "
    >
      {/* Track fill */}
      <span
        className={`
          absolute inset-0 rounded-full transition-all duration-300
          ${theme === 'dark' ? 'bg-white' : 'bg-black'}
        `}
      />

      {/* Sliding knob */}
      <span
        className={`
          relative z-10 w-5 h-5 rounded-full flex items-center justify-center
          bg-background shadow-md
          transition-all duration-300
          ${theme === 'dark' ? 'translate-x-0.5' : 'translate-x-7'}
        `}
      >
        {theme === 'dark'
          ? <Moon size={11} className="text-foreground" />
          : <Sun size={11} className="text-foreground" />
        }
      </span>
    </button>
  );
}
