"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Dimas<span className="text-indigo-600">.Dev</span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-indigo-600",
                isActive(link.href)
                  ? "text-indigo-600"
                  : "text-zinc-600 dark:text-zinc-300"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 border-t border-zinc-200 px-4 pb-4 pt-2 dark:border-zinc-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-indigo-600 dark:hover:bg-zinc-800",
                isActive(link.href)
                  ? "text-indigo-600"
                  : "text-zinc-600 dark:text-zinc-300"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}