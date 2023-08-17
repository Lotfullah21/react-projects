import aboutImg from "../assets/school/light-1.jpg";
import Title from "./Title";
function About() {
  return (
    <section className="section about" id="about">
      <Title title="about" end="us"></Title>
      <div className="section-center about-center" id="about">
        <article className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="student in the className"
          />
        </article>

        <article className="about-info">
          <h3>we stand for our values</h3>
          <p>
            We believe in equal rights for all human beings regardless of their
            gender,race,ethniciy,border.
          </p>
          <p>
            all human beings should be given equall opportuniy for education,we
            will provide free education for every Afghan girls and boys.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
export default About;
