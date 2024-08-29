## Adding transition effect for links container

```jsx
import { FaBars } from "react-icons/fa";
import { pageLinks, socialLinks } from "../data";
import { useState } from "react";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const toggleLinks = () => {
		setShowLinks(!showLinks);
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
				{showLinks && (
					<div className="links-container">
						<div className="links">
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
				)}
			</div>
		</nav>
	);
};
export default Navbar;
```

#### 1. Fixed Approach

```jsx
import { FaBars } from "react-icons/fa";
import { pageLinks, socialLinks } from "../data";
import { useState } from "react";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const toggleLinks = () => {
		setShowLinks(!showLinks);
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

				<div
					className={
						showLinks ? "links-container show-links" : "links-container"
					}>
					<div className="links">
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
			</div>
		</nav>
	);
};
export default Navbar;
```

```css
.links-container {
	height: 0;
	overflow: hidden;
	transition: var(--transition);
}

.show-links {
	height: 316.75px;
	transition: var(--transition);
}
```

## Dynamic approach when we do not know the number of items in our nav

useRef is used to access the DOM elements directly and manage their properties without triggering a re-render.

useRef provides a way to reference and interact with DOM elements directly.

Unlike state, updating a ref does not cause a re-render of the component. This makes useRef ideal for holding values that do not affect the component’s rendering or need to trigger updates based on changes.

```jsx
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
			</div>
		</nav>
	);
};
export default Navbar;
```

```css
.links-container {
	overflow: hidden;
	transition: var(--transition);
}
```

```jsx
const linksStyle = {
	height: showLinks
		? `${linksRef.current.getBoundingClientRect().height}px`
		: "0px",
};
```

We use this to control the height of the container, the links will alway have their own height.
