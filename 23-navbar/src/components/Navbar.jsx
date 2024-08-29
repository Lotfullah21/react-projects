import { FaBars } from "react-icons/fa";
import { pageLinks, socialLinks } from "../data";
import { useState, useRef } from "react";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const toggleLinks = () => {
		console.log(linksRef.current.getBoundingClientRect().height);
		setShowLinks(!showLinks);
	};

	const linksStyle = {
		height: showLinks
			? `${linksRef.current.getBoundingClientRect().height}px`
			: "0px",
	};

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<h3 className="logo">HooshmandLab</h3>
					<button className="nav-toggle" onClick={toggleLinks}>
						<FaBars></FaBars>
					</button>
				</div>
				{/* assign a reference to the div */}
				<div
					className="links-container"
					ref={linksContainerRef}
					style={linksStyle}>
					<div className="links" ref={linksRef}>
						{pageLinks.map((link) => {
							const { url, title, id } = link;
							return (
								<li key={id}>
									<a href={url}>{title}</a>
								</li>
							);
						})}
					</div>
				</div>
				<ul className="social-icons">
					{socialLinks.map((link) => {
						const { id, url, icon, className } = link;
						return (
							<li key={id}>
								<a href={url} className={className}>
									{icon}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
