## Images

Images will be optimized and our application will be faster, make sure the images folder is placed in the src file

```js
import caltech from "../assets/images/caltech.jpg";
import cmu from "../assets/images/cmu.jpg";
import cornell from "../assets/images/cornell.jpeg";
...
```

If a function doesn't return anything, it won't render the elements. You need to add a return statement in the Colleges component to ensure that the mapped University components are rendered.

```js
import universities from "../data/data.js";
import University from "./University.jsx";

const Colleges = () => {
	<>
		{universities.map((college) => {
			const { name, course, id, img } = college;
			return <University name={name} id={id} imgSrc={img} course={course} />;
		})}
	</>;
};
export default Colleges;
```

## Cleaner way using spread operator

```js
Colleges.jsx;

import universities from "../data/data.js";
import University from "./University.jsx";

const Colleges = () => {
	return (
		<>
			{universities.map((college) => {
				const { name, course, id, img } = college;
				return <University {...college} />;
			})}
		</>
	);
};
export default Colleges;
```

```js
University.jsx;

const University = ({ img, course, id, name }) => {
	return (
		<article key={id} className="uni-container">
			<img src={img}></img>
			<h3>{name}</h3>
			<h3>{course}</h3>
		</article>
	);
};
export default University;
```

### Spread operator

The spread operator (...) i allows us to expand or unpack elements from an array, object, or any iterable into individual elements or properties. It can be used in various scenarios, such as copying objects, merging arrays, and passing arguments to functions.

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }
```

## How to align all items in a single line.

```css
@media screen and (min-width: 768px) {
	.uni-container {
		display: grid;
		/* Crucial to set 1fr for the contents we don't know its size to align with other contents.*/
		grid-template-rows: auto 1fr;
	}
}
```

Or just add

```css
@media screen and (min-width: 768px) {
	.uni-container {
		display: grid;
		/* Crucial to set 1fr for the contents we don't know its size to align with other contents.*/
		grid-template-rows: auto 1fr;
		align-items: start;
	}
}
```
