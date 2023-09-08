import { FaBullseye } from "react-icons/fa"; // Import the goal icon from React Icons
import { v4 as uuidv4 } from "uuid";
const Goals = ({ goals }) => {
  return (
    <div>
      <h4 className="headline">Goals</h4>
      {goals.map((goal) => {
        const id = uuidv4();
        return (
          <div key={id} className="goals">
            <FaBullseye className="goal-icon"></FaBullseye>
            <p>{goal}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Goals;
