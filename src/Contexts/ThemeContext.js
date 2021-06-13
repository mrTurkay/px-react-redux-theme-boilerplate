import React, { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
