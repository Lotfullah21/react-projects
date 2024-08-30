import subLinks from "../data";
import { useGlobalContext } from "../context";
const NavLinks = () => {
	const { setPageId } = useGlobalContext();

	return (
		<div className="nav-links">
			{subLinks.map((link) => {
				const { page, pageId } = link;
				return (
					<button
						key={pageId}
						className="nav-link"
						onMouseEnter={() => setPageId(pageId)}>
						{page}
					</button>
				);
			})}
		</div>
	);
};
export default NavLinks;
