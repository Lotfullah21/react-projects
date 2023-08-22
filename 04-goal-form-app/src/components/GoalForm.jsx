import { useState } from "react";

const GoalForm = (props) => {
  const [formData, setFormData] = useState({ goal: "", timeline: "" });

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addGoal(formData);
    setFormData({ goal: "", timeline: "" });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          onChange={changeHandler}
          value={formData.goal}
          placeholder="Goal"
        ></input>
        <input
          type="text"
          name="timeline"
          onChange={changeHandler}
          value={formData.timeline}
          placeholder="Due Date"
        ></input>
        <button>submit</button>
      </form>
    </div>
  );
};
export default GoalForm;
