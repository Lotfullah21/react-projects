const Title = ({ title }) => {
	return (
		<div className="section-title">
			<h1> Our {title || "default title"} </h1>
			<div className="underline"></div>
		</div>
	);
};
export default Title;
