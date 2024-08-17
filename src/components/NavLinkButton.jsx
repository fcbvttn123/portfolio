export function NavLinkButton({ text }) {
  return (
    <button className="nav-link-button">
      <span className="actual-text">{text}</span>
      <span aria-hidden="true" className="nav-link-button-hover-text">
        {text}
      </span>
    </button>
  )
}
