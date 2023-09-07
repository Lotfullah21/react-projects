import Course from "./Course";

const CoursesCard = ({ courses }) => {
  return (
    <div className="courses-container">
      {courses.map((data) => {
        return <Course key={data.id} {...data}></Course>;
      })}
    </div>
  );
};
export default CoursesCard;
