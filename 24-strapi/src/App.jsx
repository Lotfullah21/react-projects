import { useGlobalContext } from "./context";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
const App = () => {
	const { isSidebarOpen } = useGlobalContext();
	console.log(isSidebarOpen);
	return (
		<div>
			<Navbar></Navbar>
			<Hero></Hero>
			<Sidebar></Sidebar>
			<Submenu></Submenu>
		</div>
	);
};
export default App;
