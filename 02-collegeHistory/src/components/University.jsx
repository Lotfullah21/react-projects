const University = (props) => {
  const { name, img, course, number } = props;

  return (
    <>
      <article className="university">
        <img src={img} alt={name} />
        <div className="info">
          <h1>{name}</h1>
          <h4>{course}</h4>
          <h5 className="rank">{`#${number}`}</h5>
        </div>
      </article>
    </>
  );
};

export { University };
