import { Outlet } from "react-router-dom"
import { HeaderBar } from "./HeaderBar"
import { useState } from "react"
import { MobileMenu } from "./MobileMenu"
import { FooterSection } from "./FooterSection"

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="h-full flex gap-y-14 flex-col justify-between py-3 px-4 md:px-10 lg:max-w-5xl xl:max-w-[1400px] lg:mx-auto">
      <HeaderBar setMobileOpen={setMobileOpen} />
      <MobileMenu opened={mobileOpen} setMobileOpen={setMobileOpen} />
      <Outlet />
      <FooterSection />
    </div>
  )
}
