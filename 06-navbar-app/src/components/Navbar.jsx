import { useState, useRef } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, socialLinks } from "../data/data";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const navToggle = () => {
    console.log(linksRef.current.getBoundingClientRect());
    setShowLinks(!showLinks);
  };

  const addHeight = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : `0px`,
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="logo">HoshmandLab</h3>
          <button className="toggle" onClick={navToggle}>
            <FaBars></FaBars>
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={addHeight}
        >
          <div className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </div>
        </div>

        {/* social-links */}
        <div className="social-links">
          {socialLinks.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
