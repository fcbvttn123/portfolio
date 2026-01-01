import { Link, useLocation } from "react-router-dom";

export function NavLinkButton({ path, text, download = false }) {
  const location = useLocation();
  return download ? (
    <a href={path} download>
      <button className="nav-link-button">
        <span className="actual-text">Resume</span>
        <span className="nav-link-button-hover-text">Resume</span>
      </button>
    </a>
  ) : (
    <Link to={path}>
      <button
        className={`nav-link-button ${
          location.pathname == path ? "isHovered" : ""
        }`}
      >
        <span className="actual-text">{text}</span>
        <span aria-hidden="true" className="nav-link-button-hover-text">
          {text}
        </span>
      </button>
    </Link>
  );
}
