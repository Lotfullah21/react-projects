import { useState } from "react";
import ColorsList from "./components/ColorsList";
import Values from "values.js";
import Form from "./components/Form";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [colors, setColors] = useState(new Values("#F3234F").all(10));
  const addColor = (color) => {
    try {
      const addedColors = new Values(color).all(10);
      setColors(addedColors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Form addColor={addColor}></Form>
      <ColorsList colors={colors}></ColorsList>
      <ToastContainer position="top-center"></ToastContainer>
    </>
  );
}

export default App;
