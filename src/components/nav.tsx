"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { CtaButton } from "@/components/cta-button";
import { LanguageToggle } from "@/components/language-toggle";
import { useLocale } from "@/lib/i18n/context";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7e2da]/80 bg-ivory/96 backdrop-blur-md">
      <nav className="mx-auto grid min-h-[4.5rem] w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto_auto] lg:gap-6 lg:px-10">
        <BrandLogo onClick={() => setOpen(false)} size="md" className="min-w-0 shrink" />

        <div className="hidden items-center justify-center gap-8 lg:flex">
          {t.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <CtaButton size="default" href="#booking" showArrow className="h-9 px-5 text-xs">
            {t.nav.cta}
          </CtaButton>
        </div>

        <div className="flex items-center gap-2 justify-self-end lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-ink transition-colors hover:bg-sand"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-white px-5 py-5 lg:hidden">
          {t.nav.links.map((link) => (
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
            {t.nav.cta}
          </CtaButton>
        </div>
      )}
    </header>
  );
}
