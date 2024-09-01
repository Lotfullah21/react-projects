import axios from "axios";
import { useQuery } from "react-query";
import { useGlobalContext } from "../context";

const url = `https://api.unsplash.com/search/photos?client_id=${
	import.meta.env.VITE_API_KEY
}`;
// console.log("API", import.meta.env.VITE_API_KEY);
const Gallery = () => {
	const { searchedItem } = useGlobalContext();
	const response = useQuery({
		queryKey: ["images", searchedItem],
		queryFn: async () => {
			const data = await axios.get(`${url}&query=${searchedItem}`);
			// console.log("DATA", data);
			// console.log("BIG DATA", data.data);
			return data.data;
		},
	});
	// console.log("RESPONSE", response);

	if (response.isLoading) {
		return (
			<section className="image-container">
				<h4>Loading...</h4>
			</section>
		);
	}
	if (response.isError) {
		return (
			<section className="image-container">
				<h4>Something went wrong with your application</h4>
			</section>
		);
	}

	const results = response.data.results;
	if (results.length < 1) {
		return (
			<section className="image-container">
				<h4>No result found</h4>
			</section>
		);
	}

	return (
		<section className="image-container">
			{results.map((result) => {
				const { id, urls, alt_description } = result;
				const { regular } = urls;
				const url = result?.urls?.regular;
				return <img key={id} src={url} alt={alt_description}></img>;
			})}
		</section>
	);
};
export default Gallery;
