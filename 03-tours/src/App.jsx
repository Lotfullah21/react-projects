import { useEffect } from "react";
import { useState } from "react";
const url = "https://course-api.com/react-tours-project";

function App() {
	const [count, setCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [tours, setTours] = useState([]);

	const fetchTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	return <h1>Hello</h1>;
}

export default App;
