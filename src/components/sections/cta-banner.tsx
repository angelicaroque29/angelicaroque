"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

export function CtaBanner() {
  const { t } = useLocale();

  return (
    <Section id="contact" flush className="!py-14 lg:!py-16">
      <div className="cta-banner">
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-lime uppercase">
              {t.ctaBanner.label}
            </p>
            <h2 className="mt-4 font-heading text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.08] tracking-tight !text-white">
              {t.ctaBanner.title}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{t.ctaBanner.subtitle}</p>
            <p className="mt-5 text-sm text-white/80">
              {t.ctaBanner.emailLabel}{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
          <Link href={routes.booking} className="cta-banner__button">
            {t.ctaBanner.cta}
            <span aria-hidden="true" className="text-2xl leading-none">
              →
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
