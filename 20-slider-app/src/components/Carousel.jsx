import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import scientists from "../assets/data/Data";
const Carousel = ({ data, persianData }) => {
  const [people, setPeople] = useState(persianData);
  const [currentPerson, setCurrentPerson] = useState(0);
  const prevSlide = () => {
    setCurrentPerson((currentIndex) => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return people.length - 1;
      }
      return newIndex;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((currentIndex) => {
      let newIndex = currentIndex + 1;
      if (newIndex >= people.length) {
        return 0;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    let carouselId = setInterval(() => {
      nextSlide();
    }, 15000);
    return () => {
      clearInterval(carouselId);
    };
  }, [currentPerson]);
  return (
    <section className="carousel-container">
      {people.map((pioneer, index) => {
        const { img, id, name, url, title, quote } = pioneer;
        return (
          <article
            key={id}
            className="carousel"
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%)`,
              opacity: currentPerson === index ? 1 : 0,
              visibility: currentPerson === index ? "visible" : "hidden",
            }}
          >
            <img src={img} alt={name} className="pioneer-img"></img>
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="quote">{quote}</p>
          </article>
        );
      })}
      <button className="prev-btn" onClick={prevSlide}>
        <FiChevronLeft></FiChevronLeft>
      </button>
      <button className="next-btn" onClick={nextSlide}>
        <FiChevronRight></FiChevronRight>
      </button>
    </section>
  );
};
export default Carousel;
