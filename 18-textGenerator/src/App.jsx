import { useState } from "react";
import data from "./data/data";
import persianData from "./data/PersianData";
import { nanoid } from "nanoid";
function App() {
	const [text, setText] = useState([]);
	const [paraCount, setParaCount] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		const paraAmount = parseInt(paraCount);
		setText(data.slice(0, paraAmount));
	};

	return (
		<section className="section-center">
			<h1 className="section-title">Lets get some info about AI</h1>
			<form onSubmit={handleSubmit} className="input-form">
				<label htmlFor="inputVal" className="input-label">
					Paragraph
				</label>
				<input
					type="number"
					min={0}
					max={10}
					id="inputVal"
					placeholder="Enter number of paragraphs"
					value={paraCount}
					onChange={(e) => setParaCount(e.target.value)}
					className="input-value"></input>
				<button className="btn form-btn">Generate</button>
			</form>

			{text.map((textContent) => {
				const { title, content } = textContent;
				console.log(title);
				console.log(nanoid());
				return (
					<article className="article" key={nanoid()}>
						<h3 className="article-title">{title}</h3>
						<p className="article-info">{content}</p>
					</article>
				);
			})}
		</section>
	);
}
export default App;
