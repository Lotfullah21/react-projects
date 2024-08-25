import mlImg from "../assets/products/Machine-Learning-cover.png";
import dlImg from "../assets/products/deep-learning-cover-primary.webp";
import webImg from "../assets/products/wev-development.jpg";

const pageLinks = [
  { id: 1, href: "#hero", title: "home" },

  { id: 1, href: "#services", title: "services" },

  { id: 1, href: "#courses", title: "courses" },

  { id: 1, href: "#footer", title: "footer" },

  { id: 1, href: "#about", title: "about-us" },

  { id: 1, href: "#contact", title: "contact-us" },
];

const services = [
  {
    id: 1,
    icon: "fa-solid fa-earth-oceania",
    title: "online",
    info: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore ratione quam?",
  },
  {
    id: 2,
    icon: "fa-solid fa-earth-oceania",
    title: "online",
    info: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore ratione quam?",
  },
  {
    id: 3,
    icon: "fa-solid fa-graduation-cap",
    title: "online",
    info: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore ratione quam?",
  },
];

const courses = [
  {
    id: 1,
    image: mlImg,
    date: "August 23, 2023",
    title: "Machine learning",
    duration: "60 days",
    price: "from $20",
    info: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Doloremque reiciendis quidem fugit quo. Illo quos voluptate,",
  },
  {
    id: 2,
    image: dlImg,
    date: "september 20, 2023",
    title: "deep learning",
    duration: "90 days",
    price: "from $100",
    info: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Doloremque reiciendis quidem fugit quo. Illo quos voluptate,",
  },
  {
    id: 3,
    image: webImg,
    date: "December 20, 2023",
    title: "web development",
    duration: "90 days",
    price: "from $10",
    info: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Doloremque reiciendis quidem fugit quo. Illo quos voluptate,",
  },
];

const icons = [
  {
    id: 1,
    href: "https/www.twitter.com",
    icon: "fa-brands fa-twitter",
    class: "footer-icon twitter",
  },
  {
    id: 1,
    href: "https/www.facebook.com",
    icon: "fa-brands fa-facebook",
    class: "footer-icon facebook",
  },
  {
    id: 1,
    href: "https/www.instagram.com",
    icon: "fa-brands fa-square-instagram",
    class: "footer-icon instagram",
  },
];

export { pageLinks, services, courses, icons };
