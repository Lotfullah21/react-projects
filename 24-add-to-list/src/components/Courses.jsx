import Course from "./Course";
const Courses = ({ removeCourse, courses, editCourse }) => {
  return (
    <div className="courses">
      {courses.map((course) => {
        return (
          <Course
            key={course.id}
            course={course}
            removeCourse={removeCourse}
            editCourse={editCourse}
          ></Course>
        );
      })}
    </div>
  );
};
export default Courses;
