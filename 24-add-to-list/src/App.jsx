import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Courses from "./components/Courses";
import { ToastContainer, toast } from "react-toastify";
const getLocalStorageData = () => {
  let list = localStorage.getItem("courses");
  if (list) {
    list = JSON.parse(list);
  } else {
    list = [];
  }
  return list;
};

const setToLocalStorage = (courses) => {
  localStorage.setItem("courses", JSON.stringify(courses));
};

const courseList = JSON.parse(localStorage.getItem("courses") || []);

function App() {
  getLocalStorageData();
  const [courses, setCourses] = useState(getLocalStorageData());
  // adding the course to the list
  const addCourse = (course) => {
    const addedCourse = {
      id: nanoid(),
      name: course,
      done: false,
    };
    const newCourses = [...courses, addedCourse];
    setCourses(newCourses);
    setToLocalStorage(newCourses);
    toast.success("course added to reading list");
  };
  // editing the courses globally to have them in local storage and also to do not lose them while refreshing the page.
  const editCourse = (courseId) => {
    const newCourses = courses.map((course) => {
      if (course.id === courseId) {
        const newCourse = { ...course, done: !course.done };
        return newCourse;
      }
      return course;
    });
    setCourses(newCourses);
    setToLocalStorage(newCourses);
  };

  const removeCourse = (courseId) => {
    const filteredCourses = courses.filter((course) => course.id !== courseId);
    setCourses(filteredCourses);
    setToLocalStorage(filteredCourses);
    toast.success("course deleted from reading list");
  };
  return (
    <div className="section-center">
      <ToastContainer position="top-center"></ToastContainer>
      <Form addCourse={addCourse}></Form>
      <Courses
        courses={courses}
        removeCourse={removeCourse}
        editCourse={editCourse}
      ></Courses>
    </div>
  );
}

export default App;
