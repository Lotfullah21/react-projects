import { useContext, useEffect, useState, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	// Get the preference of the user.
	const getInitialTheme = () => {
		const prefersDarkTheme = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		// Check what is in the local storage
		const storedMode = localStorage.getItem("newTheme");
		// Initially, it would be null.
		if (storedMode === null) {
			return prefersDarkTheme;
		}
		return storedMode === "true";
	};

	// console.log(getInitialTheme());

	const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme());
	const [searchedItem, setSearchedItem] = useState("kids");

	useEffect(() => {
		document.body.classList.toggle("dark-theme", isDarkTheme);
	}, [isDarkTheme]);

	const toggleTheme = () => {
		const newTheme = !isDarkTheme;
		setIsDarkTheme(newTheme);
		localStorage.setItem("newTheme", newTheme);
	};

	return (
		<AppContext.Provider
			value={{ isDarkTheme, toggleTheme, searchedItem, setSearchedItem }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
