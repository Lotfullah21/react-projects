import University from "./University.jsx";

const Colleges = ({ colleges }) => {
	console.log(colleges);
	return (
		<div className="section-center">
			{colleges.map((college) => {
				return <University {...college} key={college.id} />;
			})}
		</div>
	);
};
export default Colleges;
