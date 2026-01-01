import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLinkButton } from "./NavLinkButton";
import { Link } from "react-router-dom";

export function HeaderBar({ setMobileOpen }) {
  return (
    <header className="flex items-end justify-between">
      <Link to={"/"}>
        <button className="font-extrabold text-2xl hover:cursor-pointer fancy-text-style text-transparent">
          David Vu
        </button>
      </Link>
      <div className="text-color hidden md:flex md:items-center md:justify-between md:gap-x-8">
        <NavLinkButton path="/resume_IT.pdf" text={"Resume"} download />
        <NavLinkButton path="/projects" text={"Projects"} />
        <NavLinkButton path="/experiences" text={"Experiences"} />
        <NavLinkButton path="/contact" text={"Contact"} />
      </div>
      <button
        className="relative top-2 hover:cursor-pointer md:hidden"
        onClick={(e) => setMobileOpen(true)}
      >
        <Bars3Icon className="text-color h-10 w-10" />
      </button>
    </header>
  );
}
