import { useState } from "react";
import "./App.css";
import universities from "./data/Data";

const Rank = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.course}</h3>
      <img src={props.src}></img>
      <h3>{props.id}</h3>
    </div>
  );
};

function App() {
  const [dataset, setData] = useState(universities);
  const reversed = () => {
    setData([...universities].reverse());
  };
  return (
    <>
      <button onClick={reversed}>Year 2000</button>
      {dataset.map((data, index) => (
        <Rank
          key={data.id}
          name={data.name}
          course={data.course}
          src={data.img}
        ></Rank>
      ))}
    </>
  );
}

export default App;
