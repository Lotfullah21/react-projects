import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GoalForm from "./components/GoalForm";
import GoalLists from "./components/GoalLists";
function App() {
  const [goals, setGoals] = useState([]);

  const addGoals = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <>
      <GoalForm addGoal={addGoals}></GoalForm>
      <GoalLists goalsList={goals}></GoalLists>
    </>
  );
}

export default App;
