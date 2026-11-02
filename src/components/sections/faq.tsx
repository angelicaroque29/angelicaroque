"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function Faq() {
  const { t } = useLocale();
  const [openId, setOpenId] = useState<string | null>(t.faq.items[0]?.id ?? null);

  return (
    <Section id="faq" flush className="!py-14 lg:!py-20">
      <div className="relative overflow-hidden rounded-[20px] border border-[#dfe5ec] bg-white px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="micro-chip mb-4 inline-flex">{t.faq.label}</span>
            <h2 className="font-heading text-[clamp(1.65rem,3vw,2.25rem)] font-semibold leading-[1.1] tracking-tight text-navy">
              {t.faq.title}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-[1.85] text-muted-foreground">
              {t.faq.subtitle}
            </p>

            <div className="mt-8 hidden rounded-[1.15rem] border border-[#dfe5ec] bg-white/80 p-5 shadow-xs lg:block">
              <p className="text-sm font-semibold text-navy">{t.faq.stillCurious}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.faq.stillCuriousText}</p>
              <CtaButton href={routes.booking} showArrow className="mt-4 !h-10">
                {t.faq.cta}
              </CtaButton>
            </div>
          </div>

          <div className="space-y-3">
            {t.faq.items.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={cn(
                    "overflow-hidden rounded-[1.15rem] border bg-white/90 transition-all duration-300",
                    isOpen
                      ? "border-teal/25 shadow-[0_8px_28px_rgb(6_63_53_/_0.08)]"
                      : "border-[#dfe5ec]/90 shadow-xs hover:border-[#dfe5ec]"
                  )}
                  style={{
                    animation: `fadeIn 0.6s cubic-bezier(.22,.68,0,1.2) ${0.05 + index * 0.04}s both`,
                  }}
                >
                  <button
                    type="button"
                    id={`faq-trigger-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-heading text-[0.9375rem] font-semibold leading-snug text-navy sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "border-verde/30 bg-[#e3f5ee] text-verde"
                          : "border-[#dfe5ec] bg-[#f5f7fa] text-muted-foreground"
                      )}
                    >
                      <ChevronDown
                        className="size-4 transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${item.id}`}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-[#edf1f5] px-5 pb-5 pt-3 text-sm leading-[1.85] text-muted-foreground sm:px-6 sm:pb-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="rounded-[1.15rem] border border-[#dfe5ec] bg-white/80 p-5 shadow-xs lg:hidden">
              <p className="text-sm font-semibold text-navy">{t.faq.stillCurious}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.faq.stillCuriousText}</p>
              <CtaButton href={routes.booking} showArrow className="mt-4 w-full !h-10">
                {t.faq.cta}
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
