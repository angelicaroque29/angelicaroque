"use client";

import Link from "next/link";
import { AtSign, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { t } = useLocale();

  return (
    <Section bare className="mt-6 bg-espresso px-5 pb-10 pt-12 text-marfil sm:px-8 lg:px-12">
      <footer className="section-inner">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <BrandLogo href={routes.home} size="md" tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-marfil/70">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-dorado uppercase">
              {t.footer.navigation}
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {t.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-marfil/75 transition-colors hover:text-marfil"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-dorado uppercase">
              {t.footer.services}
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {t.footer.serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-marfil/75 transition-colors hover:text-marfil"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-dorado uppercase">
              {t.footer.legal}
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {t.footer.legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-marfil/75 transition-colors hover:text-marfil"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-marfil/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-dorado uppercase">
              {t.footer.connect}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-marfil/75 transition-colors hover:text-marfil"
              >
                <AtSign className="size-4" />
                Instagram
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-marfil/75 transition-colors hover:text-marfil"
              >
                <Mail className="size-4" />
                Email
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:items-end">
            <p className="font-mono text-xs text-marfil/80">
              angelica.build()
              <span className="brand-cursor" aria-hidden />
            </p>
            <p className="text-xs text-marfil/60">
              © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </Section>
  );
}
