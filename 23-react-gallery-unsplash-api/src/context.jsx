import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getDarkMode = () => {
  // it returns true or false based on user preference.
  const darkModePreference = window.matchMedia(
    "(prefers-color-scheme)"
  ).matches;
  const storedMode = localStorage.getItem("white-theme") === "true";
  return storedMode || darkModePreference;
};

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getDarkMode());
  const [searchQuery, setSearchQuery] = useState("flower");
  const toggleDarkTheme = () => {
    const whiteTheme = !isDarkTheme;
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", whiteTheme);
    setIsDarkTheme(whiteTheme);
    localStorage.setItem("white-theme", whiteTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, []);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchQuery, setSearchQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { useGlobalContext, AppProvider };
