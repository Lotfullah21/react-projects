import { nanoid } from "nanoid";
import Color from "./Color";
const ColorsList = ({ colors }) => {
	return (
		<section className="colors-container">
			{colors.map((color, idx) => {
				const id = nanoid();
				return <Color color={color} key={id} index={idx}></Color>;
			})}
		</section>
	);
};
export default ColorsList;
