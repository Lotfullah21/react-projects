import { useState } from "react";
import Question from "./Question";

const Questions = ({ data, activeQuestion, toggleQuestion }) => {
  const [displayQuestions, setDisplayQuestions] = useState(10);

  const allQuestions = data.length;

  const showMoreQuestions = () => {
    setDisplayQuestions(displayQuestions + 5);
  };
  return (
    <section className="questions-container">
      <h1>Deep learning questions</h1>
      {data.slice(0, displayQuestions).map((question) => {
        return (
          <>
            <Question
              key={question.id}
              {...question}
              activeQuestion={activeQuestion}
              toggleQuestion={toggleQuestion}
            ></Question>
          </>
        );
      })}
      {displayQuestions < data.length && (
        <button onClick={showMoreQuestions} className="additionalQuestion">
          show more question{" "}
        </button>
      )}
    </section>
  );
};
export default Questions;
