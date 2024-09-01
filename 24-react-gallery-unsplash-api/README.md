https://image-gallery-api-unsplash.netlify.app/

## 1. Context

```js
export const AppProvider = ({ children }) => {
	const greeting = "hello";
	return (
		<AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
	);
};
```

#### Few Points to note

1. Add the values as the object, for instance if we pass simply `<AppContext.Provider value={ greeting }>{children}</AppContext.Provider>`, it does not work.
2. Always return the `useContext` from custom globalHook, simply by calling, it does not work.

```js
export const useGlobalContext = () => {
	// It does not work
	useContext(AppContext);
};
```

```js
export const useGlobalContext = () => {
	return useContext(AppContext);
};
```

## 2. Adding dark theme based on user preference

Simply, using `CSS` we can add the following to check for user preference and based on that, we set a different style, But the user cannot toggle the theme unless we add some additional js logic.

```css
@media (prefers-color-scheme: dark) {
	:root {
		background: var(--dark-mode-bg-color);
		color: var(--dark-mode-text-color);
	}
}
```

## Second approach to toggle

Manage the state using `useEffect`.

```js
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
```

return storedMode === "true"; ensures that the function returns a boolean value (true or false), which is necessary for consistent and expected behavior when using this value later in your application, such as setting the theme mode.

```jsx
useEffect(() => {
	// Check the user's system preference for dark mode
	const userPrefersDark = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	setIsDarkTheme(userPrefersDark);
	document.body.classList.toggle("dark-theme", userPrefersDark);
}, []);
```

###

```js
useEffect(() => {
	document.body.classList.toggle("dark-theme", isDarkTheme);
}, [isDarkTheme]);
```

Check the user preference, if it is dark mode, toggle the theme and whenever the `isDarkTheme` changes, re-render the page.

## 3. Unsplash API

`-WIgrMRaR6k31S6KPXPhtR-4YXZIULISQXjvmRCkjXo`

## 4. React Query

React query is a library that is used to handle API requests in our applications.

```jsx
- terminal

npm install @tanstack/react-query
npm install @tanstack/react-query-devtools
```

```jsx
main.jsx;
import { QueryClient, QueryClientProvider } from "react-query";
```

```js
-main.jsx;
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<AppProvider>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</AppProvider>
);
```

```js
const getDarkMode = () => {
  // it returns true or false based on user preference.
  const darkModePreference = window.matchMedia(
    "(prefers-color-scheme)"
  ).matches;
  return darkModePreference;
};
const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getDarkMode());
  const [searchQuery, setSearchQuery] = useState("flower");
  const toggleDarkTheme = () => {
    const whiteTheme = !isDarkTheme;
    setIsDarkTheme(whiteTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", whiteTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, []);
```

```js
const toggleDarkTheme = () => {
	const whiteTheme = !isDarkTheme;
	setIsDarkTheme(whiteTheme);
	const body = document.querySelector("body");
	body.classList.toggle("dark-theme", whiteTheme);
	// document.body.classList.toggle("dark-theme", whiteTheme); alternative approach.
};
```

```js
body.classList.toggle("dark-theme", whiteTheme);
```

`whiteTheme` controls whether the dark class should be added or removed
`whiteTheme` will be true iof dark theme is false
if `whiteTheme` is true, then 'dark-theme' class will be added to the body element
if `whiteTheme` is false, then 'dark-theme' class will be removed from the body element.

When we call the toggleDarkTheme function, it toggles the class list on the body element based on the boolean value of whiteTheme.

```js
const getDarkMode = () => {
	const darkModePreference = window.matchMedia(
		"(prefers-color-scheme)"
	).matches;
	return darkModePreference;
};
```

`getDarkMode` checks whether the user prefers dark mode or net, and it only returns a boolean value, true or false and we can pass the function to our state value, so that we can control the dark theme based on user preference.
if `getDarkMode` returns a true value, set the theme automatically to dark theme, if false, set it to white theme.

```js
useEffect(() => {
	document.body.classList.toggle("dark-theme", isDarkTheme);
}, []);
```

if user preference is true for dark-mode, while our application is loading, toggle the dark-theme function.

### Search bar

alternative approach to what we have used in the searchBar.

```js
import { useState } from "react";
import { useGlobalContext } from "../context";
const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(searchValue);
		setSearchValue("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="machine"
					name="search"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					className="form-input search-input"></input>
				<button type="submit">submit</button>
			</form>
		</div>
	);
};
export default SearchBar;
```

```js
  queryKey: ["images", searchQuery],

```

re-fetch when searchQuery value changes, if we do not add this, even the state value changes using form, but still there will not be any change, due to the fact that react-query changes the value if the key value changes.

```

```
