"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { routes } from "@/lib/routes";

export function CaseTeaser() {
  const { t, locale } = useLocale();
  const copy = t.caseTeaser;
  const href = locale === "en" ? routes.caseStudyEn : routes.caseStudy;

  return (
    <Section id="casos" flush className="!py-8 lg:!py-10">
      <div className="grid overflow-hidden rounded-[20px] border border-[#dfe5ec] bg-white md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="flex flex-col justify-center px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
          <Image
            src="/casos/thales/thales-builders-logo.png"
            alt="Thales Builders Corp."
            width={1699}
            height={294}
            className="h-auto w-[190px] sm:w-[220px]"
            sizes="220px"
          />
          <p className="section-eyebrow mt-6">{copy.label}</p>
          <h2 className="heading-editorial text-navy">{copy.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{copy.body}</p>
          <dl className="mt-6 grid grid-cols-3 gap-3 border-y border-[#dfe5ec] py-5">
            {copy.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 font-mono text-[11px] leading-snug text-muted-foreground uppercase">
                  {stat.label}
                </dt>
                <dd className="font-heading text-2xl font-semibold tracking-tight whitespace-nowrap text-navy sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <Link href={href} className="btn-primary mt-6 min-h-12 w-full sm:w-fit">
            {copy.cta}
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
        <div className="relative order-first bg-marfil md:order-none">
          <Image
            src="/casos/contratista-estructura/antes-archivos-sueltos.webp"
            alt=""
            width={1280}
            height={720}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}
