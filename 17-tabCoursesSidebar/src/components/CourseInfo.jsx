import Features from "./Features";
import Goals from "./Goals";
const CourseInfo = ({ data, currentCourse }) => {
  const firstCourse = data[currentCourse];
  return (
    <div>
      <article key={firstCourse.id}>
        <span className="course-name">{firstCourse.courseName}</span>
        <h4 className="title">{firstCourse.title}</h4>
        <p className="duration">{firstCourse.duration}</p>
        <Goals goals={firstCourse.goals}></Goals>
        <Features features={firstCourse.features}></Features>
      </article>
    </div>
  );
};
export default CourseInfo;
