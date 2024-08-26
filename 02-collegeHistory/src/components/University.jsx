const University = ({ img, course, id, name }) => {
	return (
		<article key={id} className="uni-container">
			<img src={img} alt={name}></img>
			<div className="info">
				<h4>{name}</h4>
				<h4>{course}</h4>
			</div>
		</article>
	);
};
export default University;
