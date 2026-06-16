"use client";

import { ArrowRight, Check, Sparkles } from "lucide-react";
import { CurvedPath, DotMatrix, GradientBubble, ScatterDots } from "@/components/deco";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

const tierStyles = [
  {
    bar: "linear-gradient(90deg, #5b7db8, #8aa4d4)",
    chip: { bg: "#eef2fb", text: "#3b4fd8" },
  },
  {
    bar: "linear-gradient(90deg, #1e3a5f, #2a9d8f)",
    chip: { bg: "#ddf5f1", text: "#1e3a5f" },
  },
  {
    bar: "linear-gradient(90deg, #7c5cc4, #a07dd8)",
    chip: { bg: "#f0edf8", text: "#7c5cc4" },
  },
] as const;

function isFromPrice(price: string) {
  return price.startsWith("desde") || price.startsWith("from");
}

export function Packages() {
  const { t } = useLocale();
  const { ui } = t.packages;

  return (
    <Section id="packages" flush className="relative !py-16 lg:!py-20">
      <GradientBubble
        size={300}
        colorA="rgb(91 125 184 / 0.2)"
        colorB="rgb(197 212 240 / 0.3)"
        className="hidden lg:block"
        style={{ top: "-8%", right: "-6%", zIndex: 0 }}
      />
      <GradientBubble
        size={200}
        colorA="rgb(42 157 143 / 0.22)"
        colorB="rgb(221 245 241 / 0.35)"
        className="hidden lg:block"
        style={{ bottom: "5%", left: "-4%", zIndex: 0 }}
      />
      <CurvedPath
        className="hidden lg:block"
        style={{ top: "10%", left: "0", width: "100%", zIndex: 0 }}
        d="M 0 50 Q 200 0 400 60 T 800 30"
        stroke="rgb(59 79 216 / 0.08)"
        strokeWidth={1.5}
        viewBox="0 0 800 100"
      />
      <ScatterDots
        className="hidden lg:block"
        style={{ top: "3rem", left: "2rem", zIndex: 0 }}
        dots={[
          { cx: 6, cy: 6, r: 4, fill: "rgb(132 103 255 / 0.2)" },
          { cx: 20, cy: 20, r: 2.5, fill: "rgb(91 125 184 / 0.25)" },
          { cx: 34, cy: 8, r: 3, fill: "rgb(42 157 143 / 0.2)" },
        ]}
      />

      <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <span className="micro-chip mb-3 inline-flex">{t.packages.label}</span>
          <h2 className="font-heading text-[clamp(1.65rem,3vw,2.35rem)] font-semibold leading-[1.1] tracking-tight text-navy">
            {t.packages.title}
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:text-right">
          {t.packages.subtitle}
        </p>
      </div>

      <div className="relative mb-6 overflow-hidden rounded-[1.35rem] border border-[#e7e2da] bg-white p-5 shadow-sm md:p-6">
        <div className="corner-grid -right-4 -top-4" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#5b7db8] uppercase">
              {t.packages.discovery.prefix} {t.packages.discoveryMeta.timeline}
            </p>
            <h3 className="mt-1.5 text-xl font-semibold text-navy">{t.packages.discovery.name}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {t.packages.discovery.description}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <p className="font-heading text-2xl font-semibold text-navy">
              {t.packages.discoveryMeta.price}
            </p>
            <a
              href="#booking"
              className="hidden items-center gap-1 text-sm font-semibold text-[#5b7db8] hover:text-navy sm:inline-flex"
            >
              {t.packages.discovery.cta} <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {t.packages.items.map((pkg, index) => {
          const style = tierStyles[index];
          const isHighlighted = pkg.highlighted;
          return (
            <div
              key={pkg.name}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-[1.35rem] border p-6 transition-all duration-300",
                isHighlighted
                  ? "animated-border border-transparent bg-gradient-to-b from-[#f8fdfc] to-white shadow-lg lg:-mt-3 lg:mb-3 lg:pt-8"
                  : "card-glow border-[#e7e2da] bg-white shadow-sm"
              )}
              style={{ animation: `fadeIn 0.7s cubic-bezier(.22,.68,0,1.2) ${0.1 + index * 0.14}s both` }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px] rounded-t-[1.35rem]"
                style={{ background: style.bar }}
              />

              {isHighlighted && (
                <span className="brand-gradient mb-4 inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide text-white uppercase shadow-sm">
                  <Sparkles className="size-3" />
                  {ui.mostPopular}
                </span>
              )}

              <span
                className="mb-3 inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase"
                style={{ background: style.chip.bg, color: style.chip.text }}
              >
                {pkg.tier}
              </span>

              <h3 className="font-heading text-xl font-semibold text-navy">{pkg.name}</h3>

              <p className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy">
                {isFromPrice(pkg.price) ? (
                  pkg.price
                ) : (
                  <>
                    <span className="text-sm font-normal text-muted-foreground">{ui.from} </span>
                    {pkg.price}
                    {pkg.priceRange}
                  </>
                )}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{pkg.audience}</p>

              <div
                className="mt-4 rounded-xl px-3 py-2 text-xs font-medium leading-relaxed"
                style={{ background: style.chip.bg, color: style.chip.text }}
              >
                {pkg.bestFor}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0" style={{ color: style.chip.text }} />
                    {feature}
                  </li>
                ))}
              </ul>

              {pkg.includes && (
                <p className="mt-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-navy">{ui.includes}:</span> {pkg.includes}
                </p>
              )}
              {pkg.excludes && (
                <p className="mt-1 text-xs text-muted-foreground">
                  <span className="font-semibold text-navy">{ui.notIncluded}:</span> {pkg.excludes}
                </p>
              )}

              <div className="mt-6">
                <CtaButton
                  href="#booking"
                  variant={isHighlighted ? "primary" : "ghost"}
                  className="w-full"
                  showArrow
                >
                  {t.nav.cta}
                </CtaButton>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mt-8 overflow-hidden rounded-[1.35rem] border border-[#e7e2da] bg-gradient-to-r from-[#f8f6ff] to-white p-6 shadow-sm md:p-8">
        <div
          className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgb(255 255 255 / 0.9) 0 10%, rgb(197 212 240 / 0.85) 24%, rgb(132 103 255 / 0.38) 55%, transparent 70%)",
          }}
        />
        <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#7c5cc4] uppercase">
              {t.packages.retainer.label}
            </p>
            <h3 className="mt-2 font-heading text-xl font-semibold text-navy">
              {t.packages.retainer.name}
            </h3>
            <p className="mt-2 font-heading text-2xl font-semibold text-navy">
              <span className="text-sm font-normal text-muted-foreground">
                {t.packages.retainer.from}{" "}
              </span>
              {t.packages.retainerMeta.price}
              {t.packages.retainerMeta.priceRange}
              <span className="text-base font-normal text-muted-foreground">
                {t.packages.retainer.suffix}
              </span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{t.packages.retainer.description}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {t.packages.retainerFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-[#7c5cc4]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <CtaButton href="#booking" variant="ghost" className="w-full md:w-auto" showArrow>
            {t.packages.retainer.cta}
          </CtaButton>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
        {t.packages.note}
      </p>
    </Section>
  );
}
