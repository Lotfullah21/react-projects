import { useGlobalContext } from "../context";

const SearchBar = () => {
	const { setSearchedItem } = useGlobalContext();
	const handelSubmit = (e) => {
		e.preventDefault();
		const searchValue = e.target.elements.search.value;
		if (!searchValue) {
			return;
		}
		setSearchedItem(searchValue);
	};

	return (
		<section>
			<h1 className="title">Unsplash Images</h1>
			<form className="search-form" name="search-form" onSubmit={handelSubmit}>
				<input
					type="text"
					className="form-input search-input"
					name="search"
					placeholder="cat"
				/>
				<button type="submit" className="btn">
					search
				</button>
			</form>
		</section>
	);
};
export default SearchBar;
