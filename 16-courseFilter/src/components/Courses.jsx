import Course from "./Course";
import courseData from "../data/courses";
import CoursesCategories from "./CoursesCategories";

const Courses = ({ courses }) => {
	return (
		<section className="section-center">
			{courses.map((course) => {
				return <Course {...course} key={course.id}></Course>;
			})}
		</section>
	);
};
export default Courses;
