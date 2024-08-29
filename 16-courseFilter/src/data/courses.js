import pyImg from "../assets/images/py.jpg";
import algoImg from "../assets/images/algorithms.jpg";
import aiImg from "../assets/images/ai.jpg";
import webImg from "../assets/images/web.jpg";
import jsImg from "../assets/images/js.jpg";

const courses = [
	{
		id: 1,
		url: "./pages/courses/python.html",
		gitSrc: "https://github.com/Lotfullah21/Python",
		youtubeSrc: "https://www.youtube.com/@HoohmandLab",
		imgSrc: pyImg,
		startDate: new Date(2024, 7, 8),
		title: "برنامه نویسی با پایتون",
		searchQuery: "برنامه نویسی با پایتون(programming with python)",
		description: "معرفی مفاهیم اساسی کمپیتر ساینس و برنامه نویسی با پایتون",
		level: "آسان",
		levelClass: "easy",
		duration: "دوازده ساعت",
		category: "پایتون",
	},
	{
		id: 2,
		url: "./pages/courses/dsa.html",
		gitSrc: "https://github.com/Lotfullah21/Data-Structures-And-Algorithms",
		youtubeSrc: "https://www.youtube.com/@HoohmandLab",
		imgSrc: algoImg,
		startDate: new Date(2024, 8, 25),
		title: "الگوریتم ها با پایتون",
		searchQuery: "الگوریتم ها با پایتون (Data structures and algorithms)",
		description:
			"آموزش الگوریتم‌ها و ساختمان داده‌ها با پایتون الگوریتم ها شامل دینامیک پروگرامینگ.",
		level: "پیشرفته",
		levelClass: "hard",
		duration: "بیست ساعت",
		category: "الگوریتم ها",
	},
	{
		id: 3,
		url: "./pages/courses/web.html",
		gitSrc: "https://github.com/Lotfullah21/HTML-CSS",
		youtubeSrc: "https://www.youtube.com/@HoohmandLab",
		imgSrc: webImg,
		startDate: new Date(2024, 8, 12),
		title: "CSS و HTML",
		searchQuery: "انشکاف ویب با استفاده از HTML AND CSS",
		description: " آموزش عناصر اساسی در ساختار ویبسایت و ساختن پروژ های حقیثی",
		level: "آسان",
		levelClass: "easy",
		duration: "هژده ساعت",
		category: "انکشاف ویب",
	},
	{
		id: 4,
		url: "./pages/courses/js.html",
		gitSrc: "https://github.com/Lotfullah21/javascript",
		youtubeSrc: "https://www.youtube.com/@HoohmandLab",
		imgSrc: jsImg,
		startDate: new Date(2024, 9, 18),
		title: "جاوا اسکریپت",
		searchQuery:
			"برنامه نویسی با جاواسکریپت و انکشاف ویب, (programming and web designing using java script)",
		description:
			"موزش مفاهیم اساسی در زبان جاواسکریپت و ساختن اپلیکشن های حقیقی با استفاده از این زبان",
		level: "متوسط",
		levelClass: "medium",
		duration: "پانزده ساعت",
		category: "انکشاف ویب",
	},
	{
		id: 5,
		url: "./pages/courses/ai.html",
		gitSrc: "https://github.com/Lotfullah21/Artificial-Intelligence-Algorithms",
		youtubeSrc: "https://www.youtube.com/@HoohmandLab",
		imgSrc: aiImg,
		startDate: new Date(2024, 10, 18),
		title: "هوش مصنوعی با پایتون",
		searchQuery:
			"هوش مصنوعی یادگیری ماشین و دیتاساینس با پایتون, Artificial Intelligence, data science, machine learning, ai",
		description:
			" آموزش الگوریتم های اساسی در ساحه هوش مصنوعی و نوشتن آن ها با استفاده از پایتون",
		level: "پیشرفته",
		levelClass: "hard",
		duration: "بیست و پنج ساعت",
		category: "هوش مصنوعی",
	},
];

export default courses;
