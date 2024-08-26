import { useState } from "react";
import Colleges from "./components/Colleges";
import universities from "./data/data";

const App = () => {
	const [colleges, setUniversity] = useState(universities);
	const removeColleges = () => {
		setUniversity([]);
	};
	return (
		<div className="section">
			<h2 className="section-title">
				Top {colleges.length} colleges in the world
				<div className="underline"></div>
			</h2>
			<Colleges colleges={colleges}></Colleges>
			<div className="btn-center">
				<button className="btn btn-block" onClick={removeColleges}>
					Clear all
				</button>
			</div>
		</div>
	);
};
export default App;
