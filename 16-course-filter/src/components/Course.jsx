const Course = ({ name, id, url, description, price }) => {
  return (
    <article className="course">
      {" "}
      <img src={url} alt={name}></img>
      <div className="course-info">
        <h5>{name}</h5>
        <span className="price">{price}</span>
        <p>{description}</p>
      </div>
    </article>
  );
};
export default Course;
