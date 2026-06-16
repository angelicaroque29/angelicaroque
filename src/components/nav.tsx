"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/site-config";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7e2da]/80 bg-ivory/96 backdrop-blur-md">
      <nav className="mx-auto grid min-h-[4.5rem] w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-10">
        <BrandLogo onClick={() => setOpen(false)} size="md" className="min-w-0 shrink" />

        <div className="hidden items-center justify-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <CtaButton size="default" href="#booking" showArrow className="h-9 px-5 text-xs">
            {siteConfig.cta.book}
          </CtaButton>
        </div>

        <button
          type="button"
          className="justify-self-end rounded-lg p-2 text-ink transition-colors hover:bg-sand lg:hidden"
          aria-label={open ? "Cerrar" : "Menú"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-white px-5 py-5 lg:hidden">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block border-b border-border/60 py-3.5 text-sm font-medium text-muted-foreground last:border-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <CtaButton href="#booking" showArrow className="mt-4 w-full">
            {siteConfig.cta.book}
          </CtaButton>
        </div>
      )}
    </header>
  );
}
