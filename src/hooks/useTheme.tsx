import { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '../enums/theme.enum';
import { LOCALSTORAGE_IDENTIFIER } from '../utils/constants';

interface ThemeData {
  theme: Theme;
  switchTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const localStoragePath = `${LOCALSTORAGE_IDENTIFIER}=theme`;

const ThemeContext = createContext({} as ThemeData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(() => {
    return (localStorage[localStoragePath] || Theme.DARK) as Theme;
  });

  const handleSwitchTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === Theme.DARK ? Theme.WHITE : Theme.DARK;

      document.body.classList.remove(currentTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    localStorage[localStoragePath] = theme;
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme: handleSwitchTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
