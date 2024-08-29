import { useState } from "react";
import data from "./data/data";
import persianData from "./data/PersianData";
import { nanoid } from "nanoid";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let paraAmount = parseInt(count);
    let paragraph = data.slice(0, paraAmount);
    setText(paragraph);
  };
  return (
    <section className="section-center">
      <h3>AI: Origins, Breakthroughs, and Impact</h3>

      <form className="text-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          min={1}
          max={10}
          step={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="article">
        {text.map((para, index) => {
          const { content, title } = para;
          return (
            <div key={nanoid()}>
              <h5>{title}</h5>
              <p className="paragraph">{content}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default App;
