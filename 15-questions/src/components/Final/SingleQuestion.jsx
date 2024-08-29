import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ question, answer }) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<article className="question">
			{/* Logic for toggling the question */}
			<header>
				<h4>{question}</h4>
				<button
					className="btn question-btn"
					onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? (
						<AiOutlineMinus></AiOutlineMinus>
					) : (
						<AiOutlinePlus></AiOutlinePlus>
					)}
				</button>
			</header>
			{/* Logic for toggling the answer */}
			{showInfo && <p>{answer}</p>}
		</article>
	);
};
export default SingleQuestion;
