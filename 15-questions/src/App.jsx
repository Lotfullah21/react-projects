import { useState } from "react";
import data from "./data/data";
import Questions from "./components/Alternative/Questions";

const App2 = () => {
	const [questions, setQuestions] = useState(data);
	const [activeId, setActiveId] = useState(null);

	const toggleQuestion = (id) => {
		const newID = id === activeId ? "null" : id;
		setActiveId(newID);
	};

	return (
		<section className="section">
			<div className="section-title">
				<h2>FAQ</h2>
				<div className="underline"></div>
			</div>
			<Questions
				questions={questions}
				activeId={activeId}
				toggleQuestion={toggleQuestion}></Questions>
		</section>
	);
};
export default App2;
