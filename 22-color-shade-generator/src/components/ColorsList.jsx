import { nanoid } from "nanoid";
import Color from "./Color";
const ColorsList = ({ colors }) => {
  return (
    <section className="colors-container">
      {colors.map((color, index) => {
        return <Color key={nanoid()} index={index} color={color}></Color>;
      })}
    </section>
  );
};
export default ColorsList;
