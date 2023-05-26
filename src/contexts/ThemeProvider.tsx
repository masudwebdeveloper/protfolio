import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextType = "light" | "dark";

export type ThemeContextProps = {
  theme: ThemeContextType | null;
  handleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeContextType | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    if (theme === "dark") {
      localStorage.removeItem("themeMode");
      setTheme("light");
    } else {
      localStorage.setItem("themeMode", "dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    const themeMode = localStorage.getItem("themeMode");
    if (themeMode === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const themeInfo: ThemeContextProps = { theme, handleTheme };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
