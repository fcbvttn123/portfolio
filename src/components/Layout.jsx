import { Outlet } from "react-router-dom"
import { HeaderBar } from "./HeaderBar"

export default function Layout() {
  return (
    <div className="py-3 px-4">
      <HeaderBar />
      <Outlet />
    </div>
  )
}
