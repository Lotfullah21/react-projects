import { FaCode, FaCubes, FaBook } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
const Features = ({ features }) => {
  return (
    <div>
      <h4 className="headline">Topics</h4>
      {features.map((feature) => {
        const id = uuidv4();

        return (
          <div className="features" key={id}>
            <FaCubes className="feature-icon"></FaCubes>
            <p>{feature}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Features;
