import { useState } from "react";
import Question from "./Question";

const Questions = ({ data, activeQuestion, toggleQuestion }) => {
  return (
    <section className="questions-container">
      <h1>Deep learning Questions</h1>
      {data.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeQuestion={activeQuestion}
            toggleQuestion={toggleQuestion}
          ></Question>
        );
      })}
    </section>
  );
};
export default Questions;
