import { useState } from "react";
import data from "./data/data";
import Questions from "./components/Questions";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions data={questions}></Questions>
    </main>
  );
}

export default App;
