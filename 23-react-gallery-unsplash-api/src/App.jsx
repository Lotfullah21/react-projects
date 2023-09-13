import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <ThemeToggle></ThemeToggle>
        <SearchBar></SearchBar>
        <Gallery></Gallery>
      </main>
    </>
  );
}

export default App;
