import "./App.css";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
function App() {
	return (
		<>
			<main>
				<ThemeToggle></ThemeToggle>
				<SearchBar></SearchBar>
				<Gallery></Gallery>
			</main>
		</>
	);
}

export default App;
