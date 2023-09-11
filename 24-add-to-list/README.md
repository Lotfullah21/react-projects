```js
<button className="course-btn" onClick={(id) => removeCourse(id)}>
```

The id parameter is not automatically passed to this function from the event. Instead, it would need to be explicitly passed as an argument when you use this syntax.

```js

<button className="course-btn" onClick={() => removeCourse(someId)}>

```

before adding data to local storage.

```js
import { useState } from "react";

const Course = ({ course, removeCourse, editCourse }) => {
  const [isDone, setIsDone] = useState(course.done);

  const id = course.id;

  return (
    <div className="course">
      <input
        type="checkbox"
        checked={isDone}
        onChange={(e) => setIsDone(!isDone)}
      ></input>
      <p style={{ textDecoration: isDone && "line-through" }}>{course.name}</p>
      <button className="course-btn" onClick={() => removeCourse(id)}>
        delete
      </button>
    </div>
  );
};
export default Course;
```
