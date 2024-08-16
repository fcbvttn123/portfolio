export function NavLinkButton({ text }) {
  return (
    <button className="nav-link-button" data-text="Awesome">
      <span className="actual-text">&nbsp;&nbsp;{text}&nbsp;&nbsp;</span>
      <span aria-hidden="true" className="nav-link-button-hover-text">
        &nbsp;&nbsp;{text}&nbsp;&nbsp;
      </span>
    </button>
  )
}
