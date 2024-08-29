import Question from "./Question";
const Questions = ({ questions, activeId, toggleQuestion }) => {
	return (
		<section className="questions-center">
			{questions.map((question) => {
				return (
					<Question
						key={question.id}
						{...question}
						activeId={activeId}
						toggleQuestion={toggleQuestion}></Question>
				);
			})}
		</section>
	);
};
export default Questions;
