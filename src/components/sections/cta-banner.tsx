"use client";

import { ArrowRight } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { CurvedPath, DotMatrix, GradientBubble, ScatterDots } from "@/components/deco";
import { routes } from "@/lib/routes";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";

export function CtaBanner() {
  const { t } = useLocale();

  return (
    <Section id="contact" flush className="!py-14 lg:!py-16">
      <div className="cta-banner">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-18" />

        <GradientBubble
          size={280}
          colorA="rgb(132 103 255 / 0.45)"
          colorB="rgb(197 212 240 / 0.55)"
          style={{ bottom: "-20%", right: "-8%", zIndex: 0 }}
        />
        <GradientBubble
          size={140}
          colorA="rgb(42 157 143 / 0.4)"
          colorB="rgb(221 245 241 / 0.5)"
          style={{ top: "-15%", left: "-4%", zIndex: 0 }}
        />

        <DotMatrix
          cols={7}
          rows={5}
          gap={16}
          r={1.5}
          fill="rgb(30 58 95 / 0.08)"
          className="hidden lg:block"
          style={{ top: "0.75rem", right: "1rem", zIndex: 1 }}
        />

        <CurvedPath
          className="hidden lg:block"
          style={{ top: 0, left: 0, width: "100%", height: "60%", zIndex: 1 }}
          d="M 0 100 Q 200 30 480 80 T 900 50"
          stroke="rgb(91 125 184 / 0.18)"
          strokeWidth={1.5}
          viewBox="0 0 900 110"
        />

        <ScatterDots
          className="hidden lg:block"
          style={{ bottom: "1.5rem", left: "3rem", zIndex: 1 }}
          dots={[
            { cx: 8, cy: 8, r: 5, fill: "rgb(91 125 184 / 0.22)" },
            { cx: 24, cy: 20, r: 3, fill: "rgb(132 103 255 / 0.28)" },
            { cx: 40, cy: 8, r: 4, fill: "rgb(42 157 143 / 0.22)" },
          ]}
        />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <span className="micro-chip mb-4 inline-flex">{t.ctaBanner.label}</span>
            <h2 className="font-heading text-[clamp(1.55rem,2.8vw,2.15rem)] font-semibold leading-[1.12] tracking-tight text-navy">
              {t.ctaBanner.title}{" "}
              <span
                style={{
                  background: "linear-gradient(105deg, #3b4fd8, #2a9d8f)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.ctaBanner.titleHighlight}
              </span>
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.ctaBanner.subtitle}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {t.ctaBanner.perks.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#e7e2da] bg-white/80 px-3 py-1 text-[11px] font-medium text-navy"
                >
                  <ArrowRight className="size-3 text-[#5b7db8]" />
                  {p}
                </span>
              ))}
            </div>
          </div>
          <CtaButton href={routes.booking} showArrow className="shrink-0 !h-12 !px-8 text-base">
            {t.ctaBanner.cta}
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
