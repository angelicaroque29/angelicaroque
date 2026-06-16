"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { siteConfig } from "@/lib/site-config";

export function About() {
  const { t } = useLocale();

  return (
    <Section id="about" flush>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="thin-path -bottom-4 -right-4 hidden h-32 w-2/3 lg:block" />
          <div className="soft-sphere -left-8 -top-8 size-24 opacity-70" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-md">
            <Image
              src={siteConfig.images.office}
              alt={siteConfig.founder}
              width={600}
              height={750}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="micro-chip mb-4">{t.about.label}</span>
          <h2 className="heading-editorial text-navy">{t.about.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.about.paragraph1}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.about.paragraph2}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {t.about.principles.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-navy shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.about.experience.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaButton href="#booking" showArrow>
              {t.about.cta}
            </CtaButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
