import sublinks from "../data/data";
import { useGlobalContext } from "../context";
import { useRef } from "react";
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const handleMouseLeave = (e) => {
    const submenuRef = subMenuContainer.current;
    const { left, right, bottom } = submenuRef.getBoundingClientRect();
    const { clientX, clientY } = e;
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };
  const subMenuContainer = useRef(null);
  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
      ref={subMenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { url, id, icon, label } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
