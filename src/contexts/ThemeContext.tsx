import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'aura' | 'crimson' | 'field';
type Mode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  mode: Mode;
  toggleTheme: () => void;
  toggleMode: () => void;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => localStorage.getItem('theme') as Theme || 'field');
  const [mode, setMode] = useState<Mode>(() => localStorage.getItem('mode') as Mode || 'light');

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(mode);
    localStorage.setItem('theme', theme);
    localStorage.setItem('mode', mode);
  }, [theme, mode]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'field' ? 'aura' : prev === 'aura' ? 'crimson' : 'field');
  };

  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme,
      mode,
      toggleTheme,
      toggleMode,
      setTheme,
      setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
