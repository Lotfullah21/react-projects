import Title from "./Title";
import { courses } from "./data";
const Courses = () => {
  return (
    <section className="section courses" id="courses">
      <Title title="our" end="courses"></Title>

      <div className="section-center courses-center" id="courses">
        {courses.map((course) => {
          const { id, image, date, title, duration, price, info } = course;
          return (
            <article className="course-card" key={id}>
              <div className="course-img-container">
                <img
                  src={image}
                  className="course-img"
                  alt="machine learning"
                />
                <p className="course-date">{date}</p>
              </div>

              <div className="course-info">
                <h4>{title}</h4>
                <p className="course-text">{info}</p>
                <div className="course-footer">
                  <p>
                    <span>
                      <i className="fa-solid fa-sitemap"></i>online
                    </span>
                  </p>
                  <p>{duration}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="course-btn">
        <a href="#courses" className="btn">
          Explore more
        </a>
      </div>
    </section>
  );
};
export default Courses;
