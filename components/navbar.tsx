"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { LangSwitch } from "@/components/lang-switch";
import { ThemeToggle } from "@/components/theme-toggle";

type NavDict = {
  about: string;
  projects: string;
  skills: string;
  experience: string;
  contact: string;
};

export function Navbar({
  lang,
  nav,
  name,
}: {
  lang: string;
  nav: NavDict;
  name: string;
}) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: nav.about },
    { href: "#projects", label: nav.projects },
    { href: "#skills", label: nav.skills },
    { href: "#experience", label: nav.experience },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href={`/${lang}`}
          className="font-mono text-lg font-semibold tracking-tight"
        >
          {name.slice(0, -3)}
          <span className="bg-gradient-to-r from-accent via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {name.slice(-3)}
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
