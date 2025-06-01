"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/blog", label: "BLOG" },
  { href: "/project", label: "PROJECT" },
  { href: "/about", label: "ABOUT" },
];

export default function Navbar({ showToggle = true }: { showToggle?: boolean }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Mobile Hamburger */}
      {showToggle && (
        <>
          <button
            ref={toggleRef}
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-md border border-slate-300 dark:border-slate-700 w-8 h-8 flex items-center justify-center"
            aria-label="Toggle navigation"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute z-50 top-12 left-0 sm:hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md shadow-md py-2 px-4 space-y-2 w-max"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md transition-all text-left",
                    pathname === item.href
                      ? "text-purple-600 font-semibold bg-purple-50 dark:bg-slate-800"
                      : "text-muted-foreground hover:text-purple-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </>
      )}

      {/* Desktop Menu */}
      <nav className="hidden sm:flex justify-center gap-6 text-sm font-medium">
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
  );
}
