"use client";

import { AtSign, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { t } = useLocale();

  return (
    <Section bare className="bg-white/70 px-5 pb-10 pt-10 sm:px-8 lg:px-12">
      <footer className="section-inner">
        <div className="grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <BrandLogo href="#hero" size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              {t.footer.navigation}
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {t.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              {t.footer.services}
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {t.footer.serviceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              {t.footer.legal}
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {t.footer.legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              {t.footer.connect}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-ink"
              >
                <AtSign className="size-4" />
                Instagram
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-ink"
              >
                <Mail className="size-4" />
                Email
              </a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
          </p>
        </div>
      </footer>
    </Section>
  );
}
