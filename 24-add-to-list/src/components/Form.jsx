import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Form = ({ addCourse }) => {
  const [courseName, setCourseName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseName) {
      toast.error("please provide a name");
      return;
    }
    addCourse(courseName);
    setCourseName("");
  };

  return (
    <section className="form-section">
      <form onSubmit={handleSubmit}>
        <h4>add to your course list</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          ></input>
          <button className="btn">add</button>
        </div>
      </form>
    </section>
  );
};
export default Form;
