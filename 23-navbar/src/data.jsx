import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const pageLinks = [
	{ id: 1, url: "/", title: "home" },

	{ id: 2, url: "/services", title: "services" },

	{ id: 3, url: "/courses", title: "courses" },

	{ id: 4, url: "/about", title: "about" },

	{ id: 5, url: "/contact", title: "contact" },
];

const socialLinks = [
	{
		id: 1,
		url: "https/www.twitter.com",
		icon: <FaTwitter></FaTwitter>,
		class: "footer-icon twitter",
	},
	{
		id: 2,
		url: "https/www.facebook.com",
		icon: <FaFacebook></FaFacebook>,
		class: "footer-icon facebook",
	},
	{
		id: 3,
		url: "https/www.instagram.com",
		icon: <FaInstagram></FaInstagram>,
		class: "footer-icon instagram",
	},
];

export { pageLinks, socialLinks };
