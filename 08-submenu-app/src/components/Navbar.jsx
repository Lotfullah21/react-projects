import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    console.log(e.target);
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h2 className="logo">HoshmandLab</h2>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars></FaBars>
        </button>
        <NavLinks></NavLinks>
      </div>
    </nav>
  );
};
export default Navbar;
