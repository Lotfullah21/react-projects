const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
	return (
		<div className="btn-container">
			{jobs.map((job, idx) => {
				const { company } = job;
				return (
					<button
						className={idx === currentItem ? "job-btn active-btn" : "job-btn"}
						onClick={() => setCurrentItem(idx)}
						key={idx}>
						{company}
					</button>
				);
			})}
		</div>
	);
};
export default BtnContainer;
