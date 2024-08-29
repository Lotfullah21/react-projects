## And (&&) operator

```js
A && B;
```

It returns `B` if `A` is `true` or it returns `false`.

It returns the values presents on the right side of (&&) if the value on left is `true`, otherwise, it returns `undefined.`

### use case

```js
{
	showInfo && <p>{answer}</p>;
}
```

If `showInfo` is true, we will get the answer, otherwise we will get undefined.

```js
import { useState } from "react";
import data from "./data/data";
import Questions from "./components/Final/Questions";
function App() {
	const [questions, setQuestions] = useState(data);
	return (
		<main>
			<Questions data={questions}></Questions>
		</main>
	);
}

export default App;
```

```js
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ question, answer }) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<article className="question">
			{/* Logic for toggling the question */}
			<header>
				<h4>{question}</h4>
				<button
					className="btn question-btn"
					onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? (
						<AiOutlineMinus></AiOutlineMinus>
					) : (
						<AiOutlinePlus></AiOutlinePlus>
					)}
				</button>
			</header>
			{/* Logic for toggling the answer */}
			{showInfo && <p>{answer}</p>}
		</article>
	);
};
export default SingleQuestion;
```

Two control a question to be rendered and be closed when opening another question, we need to control this from a top level parent.

That's why we need to set the questions from `App.jsx`.

```js
const toggleQuestion = (id) => {
	const newID = id === activeId ? "null" : id;
	setActiveId(newID);
};
```

In the above snippet, we are checking when toggle if current id is === active id, if so, set it to null, other wise, set to id.
