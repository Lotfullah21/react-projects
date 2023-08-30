import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Sidebar></Sidebar>
      <Submenu></Submenu>
    </main>
  );
}

export default App;
