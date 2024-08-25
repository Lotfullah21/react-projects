function Title({ title, end }) {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{end}</span>
      </h2>
    </div>
  );
}
export default Title;
