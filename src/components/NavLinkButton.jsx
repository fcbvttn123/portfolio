import { Link, NavLink, useLocation } from "react-router-dom"

export function NavLinkButton({ path, text }) {
  const location = useLocation()
  return (
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
  )
}
