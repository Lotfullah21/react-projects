import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import { links, socialLinks } from "../data/data";

const Sidebar = () => {
	const { openSidebar, closeSidebar } = useGlobalContext();
	const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

	return (
		<aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
			<div className="sidebar-header">
				<h3 className="logo">HooshmandLab</h3>
				<button className="close-btn" onClick={closeSidebar}>
					<FaTimes></FaTimes>
				</button>
			</div>
			<ul className="links">
				{links.map((link) => {
					const { id, url, text, icon } = link;
					return (
						<li key={id}>
							<a href={url}>
								{icon}
								{text}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className="social-links">
				{socialLinks.map((link) => {
					const { id, url, icon } = link;
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};
export default Sidebar;
