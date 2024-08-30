import { nanoid } from "nanoid";
import {
	FaPython,
	FaCode,
	FaHtml5,
	FaJs,
	FaRobot,
	FaBrain,
	FaDatabase,
	FaCogs,
} from "react-icons/fa";

const subLinks = [
	{
		page: "کورس ها",
		pageId: nanoid(), // Unique ID for the page
		links: [
			{
				label: "پایتون",
				icon: <FaPython />, // React Icon for Python
				url: "./courses/python.html",
				category: "python",
				id: nanoid(), // Unique ID for the sub-link
			},
			{
				label: "الگوریتم ها با پایتون",
				icon: <FaCode />, // React Icon for Code
				url: "./courses/dsa.html",
				category: "python",
				id: nanoid(), // Unique ID for the sub-link
			},
			{
				label: "جاواسکریپت",
				icon: <FaJs />, // React Icon for JavaScript
				url: "./courses/js.html",
				category: "web",
				id: nanoid(), // Unique ID for the sub-link
			},
			{
				label: "هوش مصنوعی",
				icon: <FaRobot />, // React Icon for Artificial Intelligence
				url: "./courses/ai.html",
				category: "artificial-intelligence",
				id: nanoid(), // Unique ID for the sub-link
			},
		],
	},
	{
		page: "درس ها",
		pageId: nanoid(), // Unique ID for the page
		links: [
			{
				label: "یادگیری عمیق",
				icon: <FaBrain />, // React Icon for Deep Learning
				url: "./tutorials/deep-learning.html",
				category: "artificial-intelligence",
				id: nanoid(), // Unique ID for the sub-link
			},
			{
				label: "داده کاوی",
				icon: <FaDatabase />, // React Icon for Data Mining
				url: "./tutorials/data-mining.html",
				category: "artificial-intelligence",
				id: nanoid(), // Unique ID for the sub-link
			},
			{
				label: "یادگیری ماشین",
				icon: <FaCogs />, // React Icon for Machine Learning
				url: "./tutorials/machine-learning.html",
				category: "artificial-intelligence",
				id: nanoid(), // Unique ID for the sub-link
			},
			{
				label: "پردازش زبان طبیعی",
				icon: <FaBrain />, // React Icon for NLP
				url: "./tutorials/nlp.html",
				category: "artificial-intelligence",
				id: nanoid(), // Unique ID for the sub-link
			},
			{
				label: "الگوریتم ها با پایتون",
				icon: <FaCode />, // React Icon for Code
				url: "./tutorials/dsa.html",
				category: "python",
				id: nanoid(), // Unique ID for the sub-link
			},
			{
				label: "جاواسکریپت",
				icon: <FaJs />, // React Icon for JavaScript
				url: "./tutorials/js.html",
				category: "web",
				id: nanoid(), // Unique ID for the sub-link
			},
		],
	},
	{
		page: "هوش مصنوعی",
		pageId: nanoid(), // Unique ID for the page
		links: [
			{
				label: "شبکه های عصبی",
				icon: <FaBrain />, // React Icon for Neural Networks
				url: "./ai/neural-networks.html",
				category: "artificial-intelligence",
				id: nanoid(), // Unique ID for the sub-link
			},
			{
				label: "کلان داده",
				icon: <FaDatabase />, // React Icon for Big Data
				url: "./ai/big-data.html",
				category: "artificial-intelligence",
				id: nanoid(), // Unique ID for the sub-link
			},
		],
	},
];

export default subLinks;
