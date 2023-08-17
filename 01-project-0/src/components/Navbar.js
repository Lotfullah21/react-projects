import logo from "../assets/logo/main-logo.png";
import { pageLinks } from "../components/data";
const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="#home">
            <img src={logo} alt="Hoshmandlab logo" className="nav-logo" />
          </a>
          <button className="nav-toggle" id="nav-toggle">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-home nav-link scroll-link">
                  {link.title}
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
