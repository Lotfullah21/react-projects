import { useState } from "react";

const Course = ({ course, removeCourse, editCourse }) => {
  const id = course.id;

  return (
    <div className="course">
      <input
        type="checkbox"
        checked={course.done}
        onChange={() => editCourse(id)}
      ></input>
      <p style={{ textDecoration: course.done && "line-through" }}>
        {course.name}
      </p>
      <button className="remove-btn" onClick={() => removeCourse(id)}>
        delete
      </button>
    </div>
  );
};
export default Course;
