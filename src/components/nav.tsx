"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageToggle } from "@/components/language-toggle";
import { useLocale } from "@/lib/i18n/context";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLocale();

  const close = () => setOpen(false);

  const isActive = (href: string) => {
    if (href === routes.home || href === routes.services || href === routes.faq) {
      return pathname === routes.home;
    }
    if (href.startsWith("/#")) {
      return pathname === routes.home;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7e2da]/80 bg-ivory/96 backdrop-blur-md">
      <nav className="mx-auto grid min-h-[4.5rem] w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto_auto] lg:gap-6 lg:px-10">
        <BrandLogo onClick={close} size="md" className="min-w-0 shrink" />

        <div className="hidden items-center justify-center gap-8 lg:flex">
          {t.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("nav-link", isActive(link.href) && "is-active")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <Link href={routes.booking} className="btn-primary h-10 px-5 text-xs">
            {t.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 justify-self-end lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-ink transition-colors hover:bg-sand"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-white px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {t.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  "flex min-h-[3rem] items-center rounded-xl px-4 text-base font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-[#ddf5f1] text-teal"
                    : "text-navy hover:bg-[#faf9f7]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={routes.booking}
            onClick={close}
            className="btn-talk mt-4 inline-flex w-full justify-center"
          >
            {t.nav.talkCta}
          </Link>
        </div>
      )}
    </header>
  );
}
