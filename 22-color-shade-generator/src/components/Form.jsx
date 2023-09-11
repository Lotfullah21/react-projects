import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("#F3234F");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="form-container">
      <h2>Generate color</h2>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="#fff"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: `${color}` }}
        >
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
