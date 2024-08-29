const BtnContainer = ({ data, currentCourse, setCurrentCourse }) => {
  return (
    <div className="btn-container">
      {data.map((course, index) => {
        return (
          <button
            key={course.id}
            className={
              index === currentCourse ? "btn-course btn-active" : "btn-course"
            }
            onClick={() => setCurrentCourse(index)}
          >
            {course.courseName}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
