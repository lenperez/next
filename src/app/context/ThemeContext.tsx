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
  const [hasUserPreference, setHasUserPreference] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      return localStorage.getItem('theme_preference') !== null;
    } catch {
      return false;
    }
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const userPref = localStorage.getItem('theme_preference');
      if (userPref === 'dark' || userPref === 'light') {
        return userPref === 'dark';
      }
    } catch {
      // Ignore localStorage restrictions
    }

    try {
      return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
    } catch {
      return false;
    }
  });

  // Listen for system theme changes if user hasn't explicitly toggled theme
  useEffect(() => {
    if (typeof window === 'undefined' || hasUserPreference) return;
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mediaQuery) return;

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [hasUserPreference]);

  // Sync document theme classes and root background
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#0a0a0a';
      document.documentElement.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#F5F5F5';
      document.documentElement.style.color = '#0a0a0a';
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      setHasUserPreference(true);
      try {
        localStorage.setItem('theme_preference', next ? 'dark' : 'light');
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch {
        // Ignore localStorage restrictions
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
