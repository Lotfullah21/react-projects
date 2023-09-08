import courseData from "./data/Data";
import BtnContainer from "./components/BtnContainer";
import { useState } from "react";
import Loading from "./components/Loading";
import CourseInfo from "./components/CourseInfo";
function App() {
  const [isLoading, setLoading] = useState(false);
  const [courses, setCourses] = useState(courseData);
  const [currentCourse, setCurrentCourse] = useState(2);

  if (isLoading) {
    return (
      <section className="section-center">
        <Loading></Loading>;
      </section>
    );
  }

  return (
    <section className="section-center">
      <BtnContainer
        data={courses}
        currentCourse={currentCourse}
        setCurrentCourse={setCurrentCourse}
      ></BtnContainer>
      <CourseInfo currentCourse={currentCourse} data={courses}></CourseInfo>
    </section>
  );
}

export default App;
