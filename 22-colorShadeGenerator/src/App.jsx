import { useCallback, useState } from "react";
import Form from "./components/Form";
import Values from "values.js";
import ColorsList from "./components/ColorsList";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
	const [colors, setColors] = useState(new Values("red").all(10));
	const addColor = (color) => {
		try {
			const newColors = new Values(color).all(10);
			setColors(newColors);
		} catch (error) {
			toast.error(error.message);
		}
	};
	return (
		<section className="section-center">
			<Form addColor={addColor}></Form>
			<ColorsList colors={colors}></ColorsList>
			<ToastContainer position="top-center"></ToastContainer>
		</section>
	);
};
export default App;
