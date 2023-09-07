import { useState } from "react";
import courses from "./Data";
import Title from "./components/Title";
import CoursesCard from "./components/CoursesCard";
import Category from "./components/Category";
import "./App.css";

const tempCategories = courses.map((data) => data.category);
const categorySet = new Set(tempCategories);
const courseCategory = ["all", ...categorySet];

const allCategories = ["all", ...new Set(courses.map((data) => data.category))];

function App() {
  const [courseItems, setCourseItems] = useState(courses);
  const [categories, setCategories] = useState(courseCategory);

  const selectedCategory = (category) => {
    if (category === "all") {
      setCourseItems(courses);
      return;
    }
    const newData = courses.filter((course) => course.category === category);
    setCourseItems(newData);
  };

  return (
    <main>
      <section className="courses">
        <Title title={"our courses"}></Title>
        <Category
          categories={categories}
          selectedCategory={selectedCategory}
        ></Category>
        <CoursesCard courses={courseItems}></CoursesCard>
      </section>
    </main>
  );
}

export default App;
