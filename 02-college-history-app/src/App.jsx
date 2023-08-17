import { useState } from "react";
import universities from "./data/data";
import College from "./components/Colleges";
function App() {
  const [colleges, setColleges] = useState(universities);
  return (
    <>
      <section className="uni-container">
        <h3 className="title">top {colleges.length} universities</h3>
        <College colleges={colleges}></College>
        <button
          className="btn"
          onClick={() => {
            setColleges([]);
          }}
        >
          Clear All
        </button>
      </section>
    </>
  );
}

export default App;
