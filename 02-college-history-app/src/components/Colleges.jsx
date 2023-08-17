import { University } from "./University";
// remember the {} while getting the data from parent
const College = ({ colleges }) => {
  return (
    <section>
      {colleges.map((college, index) => {
        return (
          <University
            key={college.id}
            {...college}
            number={index + 1}
          ></University>
        );
      })}
    </section>
  );
};

export default College;
