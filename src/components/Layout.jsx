import { Outlet } from "react-router-dom"
import { HeaderBar } from "./HeaderBar"
import { useState } from "react"
import { MobileMenu } from "./MobileMenu"
import { FooterSection } from "./FooterSection"

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div
      className="layout h-full flex gap-y-14 flex-col justify-between py-3 px-4 md:px-10 lg:max-w-5xl xl:max-w-[1400px] lg:mx-auto"
      onMouseMove={(e) => {
        let { currentTarget: target } = e
        let rect = target.getBoundingClientRect()
        let x = e.clientX - rect.left
        let y = e.clientY - rect.top
        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
      }}
    >
      <HeaderBar setMobileOpen={setMobileOpen} />
      <MobileMenu opened={mobileOpen} setMobileOpen={setMobileOpen} />
      <Outlet />
      <FooterSection />
    </div>
  )
}
