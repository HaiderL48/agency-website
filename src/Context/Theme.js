import React, { useContext, createContext } from "react";

const ThemeContext = createContext({
  themeMode: false,
  themeToggle: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  useContext(ThemeContext);
}
