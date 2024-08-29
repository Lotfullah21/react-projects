import { FaYoutube } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

const Course = ({
	id,
	gitSrc,
	youtubeSrc,
	imgSrc,
	startDate,
	title,
	description,
	level,
	duration,
}) => {
	const formattedDate = startDate.toLocaleDateString("eng", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<article className="course">
			<div className="img-container">
				<img src={imgSrc}></img>
				<h4 className="course-date">{formattedDate}</h4>
			</div>
			<header className="course-info">
				<h3>{title}</h3>
				<p>{description}</p>
			</header>
			<footer className="course-footer">
				<button className="btn btn-footer course-level">{level}</button>
				<button className="btn btn-footer course-duration">{duration}</button>
			</footer>
			<div className="course-icons">
				<a className="youtube" href={youtubeSrc}>
					<FaYoutube />
				</a>
				<a className="github" href={gitSrc}>
					<FaGithub />
				</a>
			</div>
		</article>
	);
};
export default Course;
