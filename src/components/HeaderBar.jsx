import { Bars3Icon } from "@heroicons/react/24/outline"
import { NavLinkButton } from "./NavLinkButton"
import { Link } from "react-router-dom"

export function HeaderBar({ setMobileOpen }) {
  return (
    <header className="flex items-end justify-between mb-10 lg:mb-24">
      <Link to={"/"}>
        <button
          className="font-extrabold text-2xl hover:cursor-pointer fancy-text-style text-transparent"
          onClick={(e) => console.log("home page")}
        >
          David Vu
        </button>
      </Link>
      <h2 className="text-color mr-auto ml-4">Software Developer</h2>
      <div className="text-color hidden md:flex md:items-center md:justify-between md:gap-x-8">
        <Link to="/skills">
          <NavLinkButton text={"Skills"} />
        </Link>
        <Link to="/projects">
          <NavLinkButton text={"Projects"} />
        </Link>
        <Link to="/experiences">
          <NavLinkButton text={"Work Experiences"} />
        </Link>
        <Link to="/stepper">
          <NavLinkButton text={"Stepper"} />
        </Link>
        <NavLinkButton text={"Contact"} />
      </div>
      <button
        className="relative top-2 hover:cursor-pointer md:hidden"
        onClick={(e) => setMobileOpen(true)}
      >
        <Bars3Icon className="text-color h-10 w-10" />
      </button>
    </header>
  )
}
