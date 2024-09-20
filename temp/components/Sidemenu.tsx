import React from "react"
import Link from "next/link"
import { Home, ShoppingCart, Package, Users2, LineChart, Settings, Package2 } from "lucide-react"

function Sidemenu() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <MenuLink href="#" icon={<Home className="h-5 w-5" />} label="Dashboard" />
        <MenuLink href="#" icon={<ShoppingCart className="h-5 w-5" />} label="Orders" active />
        <MenuLink href="#" icon={<Package className="h-5 w-5" />} label="Products" />
        <MenuLink href="#" icon={<Users2 className="h-5 w-5" />} label="Customers" />
        <MenuLink href="#" icon={<LineChart className="h-5 w-5" />} label="Analytics" />
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <MenuLink href="#" icon={<Settings className="h-5 w-5" />} label="Settings" />
      </nav>
    </aside>
  )
}

function MenuLink({ href, icon, label, active = false }) {
  return (
    <Link
      href={href}
      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
        active ? "bg-accent text-accent-foreground" : "text-muted-foreground"
      }`}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  )
}

export default Sidemenu