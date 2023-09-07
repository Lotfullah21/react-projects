import { useState, useTransition } from "react";
import data from "./data/data";
import Questions from "./components/Questiones";
function App() {
  const [questions, setQuestions] = useState(data);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const toggleQuestion = (id) => {
    const newId = id === activeQuestion ? null : id;
    setActiveQuestion(newId);
    console.log(id, newId);
  };
  return (
    <main>
      <Questions
        data={questions}
        activeQuestion={activeQuestion}
        toggleQuestion={toggleQuestion}
      ></Questions>
    </main>
  );
}

export default App;
