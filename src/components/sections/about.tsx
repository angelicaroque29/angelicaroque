"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type AboutProps = {
  standalone?: boolean;
};

export function About({ standalone = false }: AboutProps) {
  const { t } = useLocale();

  return (
    <Section id="about" flush className={cn(standalone && "!pt-10 lg:!pt-14")}>
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <div className="overflow-hidden rounded-[20px] border border-silver bg-white">
            <Image
              src={siteConfig.images.profile}
              alt={t.about.photoAlt}
              width={720}
              height={774}
              className="h-auto w-full"
              sizes="(max-width: 768px) 90vw, 420px"
            />
          </div>
        </div>

        <div>
          <p className="section-eyebrow">{t.about.label}</p>
          <h2 className="heading-editorial text-navy">{t.about.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.about.paragraph1}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.about.paragraph2}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.about.experience.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-navy">
                <Check className="mt-0.5 size-4 shrink-0 text-verde" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaButton href={routes.booking} showArrow className="w-full sm:w-auto">
              {t.about.cta}
            </CtaButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
