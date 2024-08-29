import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loading";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [error, setError] = useState(false);
	const [currentItem, setCurrentItem] = useState(0);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			if (!response.ok) {
				setIsLoading(false);
				setError(true);
			}
			const data = await response.json();
			setJobs(data);
			setIsLoading(false);
			setError(false);
		} catch (error) {
			setIsLoading(false);
			setError(true);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) {
		return (
			<section className="section-center">
				<Loading></Loading>
			</section>
		);
	}

	return (
		<section className="section-center">
			<BtnContainer
				jobs={jobs}
				currentItem={currentItem}
				setCurrentItem={setCurrentItem}></BtnContainer>
			<JobInfo jobs={jobs} currentItem={currentItem}></JobInfo>
		</section>
	);
};
export default App;
