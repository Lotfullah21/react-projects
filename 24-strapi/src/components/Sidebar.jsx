import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import subLinks from "../data";

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar "}>
			<div className="sidebar-container">
				<button className="close-btn" onClick={closeSidebar}>
					<FaTimes></FaTimes>
				</button>
				<div className="sidebar-links">
					{subLinks.map((link) => {
						const { links, page, pageId } = link;
						return (
							<article key={pageId}>
								<h4>{page}</h4>
								<div className="sidebar-sublinks">
									{links.map((link) => {
										const { label, icon, url, id } = link;
										return (
											<a key={id} href={url}>
												{icon} {label}
											</a>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</aside>
	);
};
export default Sidebar;
