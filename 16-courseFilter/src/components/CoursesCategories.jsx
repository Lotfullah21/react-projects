const CoursesCategories = ({ categories, filterCourses }) => {
	return (
		<div className="btn-container">
			{categories.map((category) => {
				return (
					<button
						className="btn btn-filter"
						key={category}
						onClick={() => filterCourses(category)}>
						{category}
					</button>
				);
			})}
		</div>
	);
};
export default CoursesCategories;
