import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import reviews from "./data/Data";
import People from "./components/People";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
function App() {
  const [index, setIndex] = useState(0);
  const { id, name, img, url, text, job } = reviews[index];

  const checkIndex = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkIndex(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return reviews.length - 1;
      }
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    console.log(randomNumber);
    if (randomNumber === index) {
      randomNumber += 1;
    }

    setIndex(checkIndex(randomNumber));
  };

  return (
    <main>
      <article key={id} className="container">
        <div className="img-container">
          <img src={img} className="img"></img>
          <span className="quote">
            {" "}
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <h5 className="job">{job}</h5>
        <p className="info">{text}</p>
        {/* <People data={reviews}></People> */}
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className="next-btn" onClick={() => nextPerson()}>
            <FaChevronRight></FaChevronRight>
          </button>
        </div>
        <button className="btn btn-random" onClick={randomPerson}>
          random person
        </button>
      </article>
    </main>
  );
}

export default App;
