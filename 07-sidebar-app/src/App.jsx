import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Modal from "./components/Modal";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home></Home>
      <Sidebar></Sidebar>
      <Modal></Modal>
    </>
  );
}

export default App;
