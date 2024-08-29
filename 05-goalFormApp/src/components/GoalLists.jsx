const GoalLists = (props) => {
  return (
    <ul>
      {props.goalsList.map((g) => (
        <li key={g.goal}>
          <h5>
            {g.goal} by {g.timeline}
          </h5>
        </li>
      ))}
    </ul>
  );
};
export default GoalLists;
