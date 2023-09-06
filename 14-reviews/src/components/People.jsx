import reviews from "../data/Data";
const People = ({ data }) => {
  return (
    <main>
      {data?.map((person) => {
        const { id, name, job, img, text } = person;
        console.log(name);
        return (
          <article key={id} className="container">
            <div className="img-container">
              <img src={img}></img>
            </div>
            <h4 className="author">{name}</h4>
            <h5 className="job">{job}</h5>
            <p className="info">{text}</p>
          </article>
        );
      })}
    </main>
  );
};
export default People;
