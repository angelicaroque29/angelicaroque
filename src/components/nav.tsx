"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-cream/80 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 md:px-8">
        <Link
          href="#hero"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="brand-gradient flex size-8 items-center justify-center rounded-lg text-xs font-bold text-primary-foreground shadow-sm">
            AiT
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-sm font-semibold tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] text-muted-foreground">
              {siteConfig.handle}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-lavender/50 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <CtaButton size="default" className="ml-3 h-9 rounded-full px-4">
            Book Appointment
          </CtaButton>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-xl border border-border/60 bg-surface md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-border/50 bg-background md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-lavender/50 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <CtaButton className="w-full rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
