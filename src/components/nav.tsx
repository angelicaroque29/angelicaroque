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
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <Link
          href="#hero"
          className="flex flex-col"
          onClick={() => setOpen(false)}
        >
          <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
          <span className="text-[10px] text-muted-foreground">
            {siteConfig.handle}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <CtaButton size="default" className="h-9">
            Book a Call
          </CtaButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-border/60 bg-background md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-beige hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <CtaButton className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
