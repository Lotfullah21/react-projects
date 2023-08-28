import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  {
    id: 1,
    url: "/",
    text: "random",
  },
  {
    id: 2,
    url: "/home",
    text: "home",
  },
  {
    id: 3,
    url: "/about",
    text: "about",
  },
  {
    id: 4,
    url: "/projects",
    text: "projects",
  },
  {
    id: 5,
    url: "/contact",
    text: "contact",
  },
];

const socialLinks = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
];

export { links, socialLinks };
