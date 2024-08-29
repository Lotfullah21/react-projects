import SingleQuestion from "./SingleQuestion";
const Questions = ({ data }) => {
	return (
		<section className="section">
			{data.map((question) => {
				return (
					<SingleQuestion key={question.id} {...question}></SingleQuestion>
				);
			})}
		</section>
	);
};
export default Questions;
