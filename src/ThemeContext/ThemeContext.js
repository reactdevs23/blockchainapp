import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  let last_theme = localStorage.getItem("theme");

  // convert to bool

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    if (last_theme) {
      if (last_theme === "true") {
        setIsDarkTheme(true);
      } else {
        setIsDarkTheme(false);
      }
    }
  }, []);

  const toggleTheme = () => {
    localStorage.setItem("theme", !isDarkTheme);
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
