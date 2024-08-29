import { useState } from "react";

const Form = ({ addColor }) => {
	const [color, setColor] = useState("");

	const handleChange = (e) => {
		setColor(e.target.value);
	};

	const handleSubmitColor = (e) => {
		e.preventDefault();
		addColor(color);
	};

	return (
		<form onSubmit={handleSubmitColor}>
			<input type="color" onChange={(e) => handleChange(e)}></input>
			<input
				type="text"
				name="color"
				value={color}
				placeholder="#f1505"
				onChange={(e) => handleChange(e)}></input>
			<button className="btn" style={{ background: color }}>
				Submit
			</button>
		</form>
	);
};
export default Form;
