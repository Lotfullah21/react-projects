import { pageLinks, icons } from "./data";

function Footer() {
  return (
    <footer className="section footer" id="footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link scroll-link">
                {link.title}
              </a>
            </li>
          );
        })}

        <li>
          <a href="#about" className="footer-link scroll-link">
            about us
          </a>
        </li>
      </ul>

      <ul className="footer-icons">
        {icons.map((icon) => {
          return (
            <li>
              <a
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                className={icon.class}
              >
                <i className={icon.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; HoshmandLab Inc{" "}
        <span id="date">{new Date().getFullYear()}</span>. all rights reserverd
      </p>
    </footer>
  );
}
export default Footer;
