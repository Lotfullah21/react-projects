import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";

const links = [
  { id: 1, url: "/", text: "home", icon: <FaHome></FaHome> },

  { id: 2, url: "/courses", text: "courses", icon: <FaSketch></FaSketch> },

  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen></FaFolderOpen>,
  },

  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt></FaCalendarAlt>,
  },

  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms></FaWpforms>,
  },
];

const socialLinks = [
  { id: 1, url: "https://www.twitter.com", icon: <FaTwitter></FaTwitter> },
  { id: 1, url: "https://www.facebook.com", icon: <FaFacebook></FaFacebook> },
  { id: 1, url: "https://www.linkedin.com", icon: <FaLinkedin></FaLinkedin> },
];

export { socialLinks, links };
