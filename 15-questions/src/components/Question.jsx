import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
const Question = ({ id, question, answer, activeQuestion, toggleQuestion }) => {
  const [readMore, setReadMore] = useState(false);
  const isActiveQuestion = id === activeQuestion;
  return (
    <article className="question">
      <header>
        {" "}
        <h5>{question}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActiveQuestion ? (
            <AiOutlineMinus className="minus"></AiOutlineMinus>
          ) : (
            <AiOutlinePlus className="plus"></AiOutlinePlus>
          )}
        </button>
      </header>{" "}
      <p className="answer">
        {isActiveQuestion
          ? readMore
            ? answer
            : `${answer.substring(0, 400)} ...`
          : ""}
        {isActiveQuestion && (
          <button className="btn-read" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        )}
      </p>
    </article>
  );
};
export default Question;
