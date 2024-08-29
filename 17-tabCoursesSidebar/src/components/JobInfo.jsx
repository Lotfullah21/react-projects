import Duties from "./Duties";

const JobInfo = ({ jobs, currentItem }) => {
	const { id, title, dates, duties, company } = jobs[currentItem];
	return (
		<article className="job-info">
			<h3 className="job-title">{title}</h3>
			<span className="job-company">{company}</span>
			<p className="job-date">{dates}</p>
			<Duties duties={duties}></Duties>
		</article>
	);
};
export default JobInfo;
