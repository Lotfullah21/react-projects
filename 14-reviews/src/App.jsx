import { useState } from "react";
import "./index.css";
import reviewData from "./data/Data";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";

const App = () => {
	const [index, setIndex] = useState(0);
	const [reviews, setReviews] = useState(reviewData);
	const { name, job, img, text } = reviewData[index];

	const checkIndex = (idx) => {
		if (idx < 0) {
			return reviewData.length - 1;
		}
		if (idx > reviewData.length - 1) {
			return 0;
		}
		return idx;
	};

	const nextPerson = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex + 1;
			return checkIndex(newIndex);
		});
	};
	const prevPerson = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex - 1;
			return checkIndex(newIndex);
		});
	};

	const handleRandom = () => {
		let num = Math.floor(Math.random() * reviewData.length);
		if (num === index) {
			num = index + 1;
		}
		setIndex(checkIndex(num));
	};

	return (
		<main>
			<article className="review">
				<div className="img-container">
					<img src={img} alt={name} className="person-img"></img>
					<span className="quote-icon">
						<FaQuoteRight></FaQuoteRight>
					</span>
				</div>
				<h4 className="person-name">{name}</h4>
				<h5 className="job">{job}</h5>
				<p className="info">{text}</p>
				<div className="btn-container">
					<button className="prev-btn" onClick={prevPerson}>
						<FaChevronLeft></FaChevronLeft>
					</button>
					<button className="next-btn" onClick={nextPerson}>
						<FaChevronRight></FaChevronRight>
					</button>
				</div>
				<button className="btn btn-block" onClick={handleRandom}>
					random person
				</button>
			</article>
		</main>
	);
};
export default App;
