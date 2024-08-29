import { useState } from "react";
import coursesData from "./data/courses";
import Title from "./components/Title";
import Courses from "./components/Courses";
import CoursesCategories from "./components/CoursesCategories";

const courses = coursesData.map((course) => course.category);
const uniqueCategories = new Set(courses);
const allCategories = ["تمام کورس ها", ...uniqueCategories];

const App = () => {
	const [courses, setCourses] = useState(coursesData);
	const [categories, setCategories] = useState(allCategories);

	const filterCourses = (category) => {
		if (category === "تمام کورس ها") {
			setCourses(coursesData);
			// Important
			return;
		}
		const newCourses = coursesData.filter(
			(course) => course.category === category
		);
		setCourses(newCourses);
	};

	return (
		<main className="section">
			<Title title="Courses"></Title>
			<CoursesCategories
				categories={categories}
				filterCourses={filterCourses}></CoursesCategories>
			<Courses courses={courses}></Courses>
		</main>
	);
};
export default App;
