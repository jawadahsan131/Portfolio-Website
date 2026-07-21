"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-container items-center justify-between gap-4 px-margin-mobile py-4 md:px-margin-desktop">
        <Link href="/" className="font-mono text-label-md text-on-surface">
          AI eng.dev
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b-2 py-1 text-label-md transition",
                  active ? "border-primary text-on-surface" : "border-transparent text-on-surface-variant hover:text-on-surface"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <ButtonLink href="/contact">Hire Me</ButtonLink>
        </div>
        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant text-on-surface lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="glass mx-margin-mobile mb-4 grid gap-2 rounded-lg p-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-label-md text-on-surface-variant hover:bg-surface-mid hover:text-on-surface"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-3">
            <ThemeToggle />
            <ButtonLink href="/contact" className="flex-1" onClick={() => setOpen(false)}>
              Hire Me
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
