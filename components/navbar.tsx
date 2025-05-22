'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import {cn} from "@/lib/utils"

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/blog", label: "BLOG" },
  { href: "/project", label: "PROJECT" },
  { href: "/about", label: "ABOUT" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="flex justify-center pt-1 z-10 relative">
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-black/10 dark:border-0 shadow-sm px-4 py-2 rounded-full flex space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-3 py-1.5 rounded-md transition-all",
              pathname === item.href
                ? "text-purple-600 font-semibold border-b-2 border-purple-600"
                : "text-muted-foreground hover:text-purple-500"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>

  )
}
