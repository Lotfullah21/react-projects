import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Question = ({ activeId, question, answer, id, toggleQuestion }) => {
	const isActive = id === activeId;
	return (
		<article className="question">
			<header>
				<h3>{question}</h3>
				<button className="btn btn-question" onClick={() => toggleQuestion(id)}>
					{isActive ? (
						<AiOutlineMinus></AiOutlineMinus>
					) : (
						<AiOutlinePlus></AiOutlinePlus>
					)}
				</button>
			</header>
			{isActive && <p>{answer}</p>}
		</article>
	);
};
export default Question;
