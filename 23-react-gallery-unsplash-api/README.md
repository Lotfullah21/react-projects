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
          className="form-input search-input"
        ></input>
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
