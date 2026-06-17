"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageToggle } from "@/components/language-toggle";
import { useLocale } from "@/lib/i18n/context";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type NavProps = {
  deck?: boolean;
  onNavigate?: () => void;
};

export function Nav({ deck = false, onNavigate }: NavProps) {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  const close = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <header
      className={cn(
        deck
          ? "relative z-20 w-full bg-transparent"
          : "sticky top-0 z-50 w-full border-b border-[#e7e2da]/80 bg-ivory/96 backdrop-blur-md"
      )}
    >
      <nav
        className={cn(
          "mx-auto grid min-h-[4.5rem] w-full items-center gap-4",
          deck
            ? "max-w-none grid-cols-[1fr_auto] px-5 pt-5 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-10 lg:pt-7"
            : "max-w-6xl grid-cols-[1fr_auto] px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto_auto] lg:gap-6 lg:px-10"
        )}
      >
        <BrandLogo onClick={close} size="md" className="min-w-0 shrink" />

        <div className="hidden items-center justify-center gap-8 lg:flex">
          {t.nav.links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(deck ? "nav-link-deck" : "nav-link", index === 0 && deck && "is-active")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <Link href="#booking" className={deck ? "btn-talk" : "btn-primary h-10 px-5 text-xs"}>
            {deck ? t.nav.talkCta : t.nav.cta}
          </Link>
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
        <div
          className={cn(
            "border-t border-border px-5 py-5 lg:hidden",
            deck ? "bg-white/95" : "bg-white"
          )}
        >
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block border-b border-border/60 py-3.5 text-sm font-medium text-muted-foreground last:border-0"
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <Link href="#booking" onClick={close} className="btn-talk mt-4 inline-flex w-full justify-center">
            {t.nav.talkCta}
          </Link>
        </div>
      )}
    </header>
  );
}
