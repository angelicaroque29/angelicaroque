"use client";

import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const { t } = useLocale();
  const { howItWorks } = t;

  return (
    <Section id="how-it-works" flush className="!py-8 lg:!py-10">
      <div className="rounded-[20px] border border-[#dfe5ec] bg-white px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="max-w-2xl">
          <p className="section-eyebrow">{howItWorks.label}</p>
          <h2 className="heading-editorial text-navy">{howItWorks.title}</h2>
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
                  isFirst ? "lg:border-teal/30 lg:bg-[#edf1f5]" : "lg:border-[#edf1f5] lg:bg-[#f5f7fa]"
                )}
              >
                {!isLast && (
                  <span aria-hidden className="absolute top-9 bottom-0 left-4 w-px bg-[#dfe5ec] lg:hidden" />
                )}
                <span
                  className={cn(
                    "relative z-10 inline-flex size-8 shrink-0 items-center justify-center rounded-lg font-mono text-[11px] font-bold text-marfil",
                    isFirst ? "bg-verde" : "bg-navy"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 pt-1 lg:pt-0">
                  <div className="flex flex-wrap items-center gap-2 lg:mt-4">
                    <h3 className="text-base font-semibold text-navy">{step.title}</h3>
                    {"tag" in step && (
                      <span className="rounded-full bg-[#e3f5ee] px-2.5 py-0.5 text-[11px] font-bold text-verde">
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
