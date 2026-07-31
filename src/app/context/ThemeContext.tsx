import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const saved = localStorage.getItem('theme');
      if (saved !== null) {
        return saved === 'dark';
      }
    } catch {
      // Ignore localStorage restrictions in Safari private mode
    }
    try {
      return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // Ignore localStorage restrictions in Safari private mode
    }
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
