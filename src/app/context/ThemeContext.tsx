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

  // Sync document theme classes, root background, and favicon
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const finalPath = isDark ? '/favicon-dark.svg' : '/favicon-light.svg';

    // Safari requires removing old favicon links and re-appending new elements to trigger icon re-render
    const existingIcons = document.querySelectorAll("link[rel*='icon'], link[rel*='mask-icon']");
    existingIcons.forEach(el => el.remove());

    const head = document.getElementsByTagName('head')[0];

    // Standard SVG icon (with sizes="any" required by Safari)
    const iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.type = 'image/svg+xml';
    iconLink.setAttribute('sizes', 'any');
    iconLink.href = finalPath;
    head.appendChild(iconLink);

    // Shortcut icon fallback
    const shortcutLink = document.createElement('link');
    shortcutLink.rel = 'shortcut icon';
    shortcutLink.type = 'image/svg+xml';
    shortcutLink.href = finalPath;
    head.appendChild(shortcutLink);

    // Safari pinned tab mask-icon
    const maskLink = document.createElement('link');
    maskLink.rel = 'mask-icon';
    maskLink.href = finalPath;
    maskLink.setAttribute('color', '#60A5FA');
    head.appendChild(maskLink);

    // Apple touch icon
    const touchLink = document.createElement('link');
    touchLink.rel = 'apple-touch-icon';
    touchLink.href = finalPath;
    head.appendChild(touchLink);

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
