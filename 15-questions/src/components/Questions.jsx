import React, { useState } from "react";
import Question from "./Question";

const Questions = ({ data, activeQuestion, toggleQuestion }) => {
  const [displayedQuestions, setDisplayedQuestions] = useState(5);

  const showMoreQuestions = () => {
    setDisplayedQuestions(displayedQuestions + 5);
  };

  return (
    <section className="questions-container">
      <h1>Deep learning Questions</h1>
      {data.slice(0, displayedQuestions).map((question) => (
        <Question
          key={question.id}
          {...question}
          activeQuestion={activeQuestion}
          toggleQuestion={toggleQuestion}
        />
      ))}

      {displayedQuestions < data.length && (
        <button onClick={showMoreQuestions}>Show More Questions</button>
      )}
    </section>
  );
};

export default Questions;
