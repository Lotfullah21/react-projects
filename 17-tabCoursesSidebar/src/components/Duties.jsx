import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
const Duties = ({ duties }) => {
	return (
		<div>
			{duties.map((duty, index) => {
				const id = uuidv4();
				console.log(id);
				return (
					<div className="job-description" key={id}>
						<FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
						<p className="job-info">{duty}</p>
					</div>
				);
			})}
		</div>
	);
};
export default Duties;
