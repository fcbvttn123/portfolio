import { Bars3Icon } from "@heroicons/react/24/outline"

export function HeaderBar({ setMobileOpen }) {
  return (
    <header className="flex items-end justify-between mb-10">
      <button
        className="text-color font-extrabold text-2xl hover:cursor-pointer"
        onClick={(e) => console.log("home page")}
      >
        David Vu
      </button>
      <h2 className="text-color mr-auto ml-4">Software Developer</h2>
      <button
        className="relative top-2 hover:cursor-pointer"
        onClick={(e) => setMobileOpen(true)}
      >
        <Bars3Icon className="text-color h-10 w-10" />
      </button>
    </header>
  )
}
