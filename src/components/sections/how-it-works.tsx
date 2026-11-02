"use client";

import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const { t } = useLocale();
  const { howItWorks } = t;
  const flowLabels = ["input", "logic", "action"] as const;

  return (
    <Section id="how-it-works" flush className="!py-8 lg:!py-10">
      <div className="rounded-[1.5rem] border border-[#e2e8f0]/80 bg-white px-5 py-8 shadow-sm sm:px-8 lg:px-10 lg:py-10">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
          <div>
            <span className="micro-chip mb-3 inline-flex">{howItWorks.label}</span>
            <h2 className="font-heading text-[clamp(1.4rem,2.5vw,1.85rem)] font-semibold tracking-tight text-navy">
              {howItWorks.title}
            </h2>
            <p className="mt-4 hidden font-mono text-xs text-nogal lg:block">
              angelica.build()
              <span className="brand-cursor" aria-hidden />
            </p>
          </div>

          <figure className="mx-auto w-full max-w-md lg:max-w-none">
            <Image
              src={siteConfig.images.workflowModel}
              alt="Ilustración de herramientas conectadas que transforman información en acciones automáticas"
              width={1536}
              height={1024}
              sizes="(max-width: 768px) 92vw, 50vw"
              className="h-auto w-full"
            />
            <figcaption className="-mt-6 grid grid-cols-3 sm:-mt-10 text-center font-mono text-[11px] text-nogal">
              {flowLabels.map((label) => (
                <span key={label} className="flex flex-col items-center gap-1.5">
                  <span aria-hidden className="h-4 border-l border-dashed border-nogal/40" />
                  <span className="size-1 rounded-full bg-nogal" aria-hidden />
                  {label}
                </span>
              ))}
            </figcaption>
          </figure>
        </div>

        <ol className="mt-8 grid lg:mt-10 lg:grid-cols-4 lg:gap-4">
          {howItWorks.steps.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === howItWorks.steps.length - 1;

            return (
              <li
                key={step.title}
                className={cn(
                  "relative flex gap-4 pb-6 lg:flex-col lg:gap-0 lg:rounded-[1.15rem] lg:border lg:p-5",
                  isLast && "pb-0",
                  isFirst ? "lg:border-teal/30 lg:bg-[#eef4ff]" : "lg:border-[#e8eef5] lg:bg-[#f7f9fc]"
                )}
              >
                {!isLast && (
                  <span aria-hidden className="absolute top-9 bottom-0 left-4 w-px bg-[#e2e8f0] lg:hidden" />
                )}
                <span
                  className={cn(
                    "relative z-10 inline-flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold text-marfil",
                    isFirst ? "bg-teal" : "bg-navy"
                  )}
                >
                  {index + 1}
                </span>
                <div className="min-w-0 pt-1 lg:pt-0">
                  <div className="flex flex-wrap items-center gap-2 lg:mt-4">
                    <h3 className="text-base font-semibold text-navy">{step.title}</h3>
                    {"tag" in step && (
                      <span className="rounded-full bg-[#e8f0fe] px-2.5 py-0.5 text-[11px] font-bold text-verde">
                        {step.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm leading-[1.7] text-muted-foreground">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 flex justify-center lg:justify-start">
          <CtaButton href={routes.booking} showArrow className="w-full !h-12 sm:w-auto">
            {howItWorks.cta}
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
