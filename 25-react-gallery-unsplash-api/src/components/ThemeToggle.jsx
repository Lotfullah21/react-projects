import { useGlobalContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ThemeToggle = () => {
	const { isDarkTheme, toggleTheme } = useGlobalContext();

	return (
		<section className="theme-toggle-container">
			<button className="dark-toggle" onClick={toggleTheme}>
				{isDarkTheme ? (
					<BsFillSunFill className="toggle-icon"></BsFillSunFill>
				) : (
					<BsFillMoonFill className="toggle-icon"></BsFillMoonFill>
				)}
			</button>
		</section>
	);
};
export default ThemeToggle;
