"use client";

import Image from "next/image";
import { Briefcase, FolderKanban, Globe, Languages, MapPin, Sparkles, Zap } from "lucide-react";
import { CurvedPath, DotMatrix, GradientBubble, ScatterDots } from "@/components/deco";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { siteConfig } from "@/lib/site-config";

const highlightStyles = [
  { icon: Zap, color: "#3b4fd8", bg: "linear-gradient(135deg,#eef2fb,#dde6f8)" },
  { icon: Sparkles, color: "#7c5cc4", bg: "linear-gradient(135deg,#f0edf8,#e5dff5)" },
  { icon: Globe, color: "#2a9d8f", bg: "linear-gradient(135deg,#ddf5f1,#c8ede8)" },
];

const statIcons = [Briefcase, FolderKanban, Languages, MapPin] as const;

const outcomeColors = ["#3b4fd8", "#7c5cc4", "#2a9d8f"];

function PhotoFrame() {
  return (
    <>
      {/* Big gradient bubble behind photo — matches reference top-right */}
      <GradientBubble
        size={420}
        colorA="rgb(132 103 255 / 0.38)"
        colorB="rgb(197 212 240 / 0.48)"
        className="hidden lg:block"
        style={{ top: "-14%", right: "-18%", zIndex: 0 }}
      />
      {/* Small teal bubble — bottom left */}
      <GradientBubble
        size={180}
        colorA="rgb(42 157 143 / 0.4)"
        colorB="rgb(221 245 241 / 0.55)"
        className="hidden lg:block"
        style={{ bottom: "-5%", left: "-8%", zIndex: 0 }}
      />

      {/* Outer ring */}
      <div
        className="ring-deco hidden lg:block"
        style={{ width: 510, height: 510, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 1 }}
      />
      {/* Pulsing middle ring */}
      <div
        className="glow-ring hidden lg:block"
        style={{ width: 410, height: 410, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 1, animationDelay: "1.5s" }}
      />
      {/* Inner ring */}
      <div
        className="ring-deco-sm hidden lg:block"
        style={{ width: 318, height: 318, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 1 }}
      />

      {/* SVG curved lines connecting photo to float cards */}
      <svg
        aria-hidden
        className="pointer-events-none absolute hidden lg:block"
        style={{ top: "30%", right: "-14%", width: "18%", height: "42%", zIndex: 2 }}
        viewBox="0 0 80 200"
        fill="none"
      >
        <path d="M 4 20 Q 40 40 72 60" stroke="rgb(91 125 184 / 0.3)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 4 100 Q 40 100 72 100" stroke="rgb(132 103 255 / 0.25)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 4 180 Q 40 160 72 140" stroke="rgb(42 157 143 / 0.3)" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      {/* Orbit dots */}
      <div className="orbit-dot hidden size-3 lg:block" style={{ top: "2%",  left: "50%", zIndex: 3 }} />
      <div className="orbit-dot hidden size-2 lg:block" style={{ top: "48%", right: "0%",  zIndex: 3, background: "rgb(132 103 255 / 0.55)" }} />
      <div className="orbit-dot hidden size-4 lg:block" style={{ bottom: "6%", left: "8%",  zIndex: 3, background: "rgb(42 157 143 / 0.45)" }} />
      <div className="orbit-dot hidden size-1.5 lg:block" style={{ top: "25%", right: "4%", zIndex: 3, background: "rgb(59 79 216 / 0.45)" }} />
      <div className="orbit-dot hidden size-2.5 lg:block" style={{ top: "72%", left: "2%",  zIndex: 3, background: "rgb(197 212 240 / 0.6)" }} />

      {/* Scatter small circles around frame */}
      <ScatterDots
        className="hidden lg:block"
        style={{ top: "-0.5rem", left: "60%", zIndex: 2 }}
        dots={[
          { cx: 10, cy: 10, r: 4,  fill: "rgb(91 125 184 / 0.25)" },
          { cx: 28, cy: 6,  r: 2.5, fill: "rgb(132 103 255 / 0.35)" },
          { cx: 44, cy: 14, r: 3.5, fill: "rgb(42 157 143 / 0.28)" },
        ]}
      />

      {/* Offset thin border frame */}
      <div
        className="pointer-events-none absolute -right-2.5 bottom-3 left-3 top-2.5 hidden rounded-[1.75rem] border border-[#5b7db8]/15 lg:block"
        style={{ zIndex: 2 }}
      />

      {/* Dot matrix — bottom right of photo */}
      <DotMatrix
        cols={5}
        rows={4}
        gap={14}
        r={1.5}
        fill="rgb(30 58 95 / 0.1)"
        className="hidden lg:block"
        style={{ bottom: "0.5rem", right: "-0.5rem", zIndex: 2 }}
      />
    </>
  );
}

export function Hero() {
  const { t } = useLocale();

  return (
    <Section id="hero" bare className="relative overflow-hidden">
      {/* ── Background atmosphere ── */}
      {/* Large periwinkle blob — top left */}
      <div
        className="deco-blob"
        style={{ width: 640, height: 640, top: "-18%", left: "-16%", background: "rgb(197 212 240 / 0.28)" }}
      />
      {/* Soft teal blob — bottom right */}
      <div
        className="deco-blob"
        style={{ width: 480, height: 480, bottom: "-14%", right: "-10%", background: "rgb(221 245 241 / 0.26)" }}
      />

      {/* ── Big gradient bubble — top right (matches reference) ── */}
      <GradientBubble
        size={380}
        colorA="rgb(132 103 255 / 0.42)"
        colorB="rgb(197 212 240 / 0.52)"
        className="hidden lg:block"
        style={{ top: "-6%", right: "-4%", zIndex: 0 }}
      />

      {/* ── Dot matrix — top right corner ── */}
      <DotMatrix
        cols={10}
        rows={8}
        gap={20}
        r={1.8}
        fill="rgb(30 58 95 / 0.09)"
        className="hidden lg:block"
        style={{ top: "2rem", right: "2rem", zIndex: 1 }}
      />

      {/* ── Scattered circles — left side ── */}
      <ScatterDots
        className="hidden lg:block"
        style={{ top: "28%", left: "1rem", zIndex: 1 }}
        dots={[
          { cx: 12, cy: 8,  r: 8,  fill: "rgb(132 103 255 / 0.18)" },
          { cx: 36, cy: 28, r: 5,  fill: "rgb(91 125 184 / 0.22)" },
          { cx: 8,  cy: 46, r: 12, fill: "rgb(42 157 143 / 0.14)" },
          { cx: 48, cy: 56, r: 4,  fill: "rgb(132 103 255 / 0.3)" },
        ]}
      />

      {/* ── Curved path — upper background arc ── */}
      <CurvedPath
        className="hidden lg:block"
        style={{ top: "4%", left: "30%", width: "55%", zIndex: 1 }}
        d="M 0 120 Q 140 20 300 80 T 520 40"
        stroke="rgb(91 125 184 / 0.18)"
        strokeWidth={1.5}
        viewBox="0 0 520 140"
      />
      {/* Lower arc */}
      <CurvedPath
        className="hidden lg:block"
        style={{ bottom: "5%", right: "5%", width: "45%", zIndex: 1 }}
        d="M 0 60 Q 100 10 200 50 T 380 20"
        stroke="rgb(42 157 143 / 0.2)"
        strokeWidth={1.2}
        viewBox="0 0 380 80"
      />

      <div className="section-inner relative grid items-center gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-18">

        {/* ── Left copy ── */}
        <div className="text-center lg:text-left">
          <div className="fade-in-1 flex justify-center lg:justify-start">
            <span className="micro-chip">
              <span className="pulse-dot mr-1.5 inline-block size-1.5 rounded-full" style={{ background: "#5b7db8" }} />
              {t.hero.chip}
            </span>
          </div>

          <h1 className="fade-in-2 mt-5 max-w-[580px] font-heading text-[clamp(2.6rem,5.2vw,4.15rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-navy">
            {t.hero.title}{" "}
            <span className="shimmer-text">{t.hero.titleHighlight}</span>
          </h1>

          <p className="fade-in-3 mx-auto mt-6 max-w-[440px] text-[0.9375rem] leading-[1.85] text-muted-foreground lg:mx-0">
            {t.hero.subtitle}
          </p>

          {/* Outcome pills */}
          <div className="fade-in-3 mx-auto mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
            {t.hero.outcomes.map((o, i) => (
              <span
                key={o}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#e7e2da] bg-white px-3 py-1.5 text-[11px] font-medium text-navy shadow-xs transition-all duration-200 hover:border-[#5b7db8]/40 hover:shadow-sm"
                style={{ animationDelay: `${0.32 + i * 0.07}s` }}
              >
                <span className="size-1.5 rounded-full" style={{ background: outcomeColors[i] }} />
                {o}
              </span>
            ))}
          </div>

          <div className="fade-in-4 mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <CtaButton href="#booking" showArrow className="!h-12 !px-8">
              {t.hero.primaryCta}
            </CtaButton>
            <CtaButton variant="ghost" href="#services" className="!h-12 !px-7">
              {t.hero.secondaryCta}
            </CtaButton>
          </div>

          {/* Credentials */}
          <div className="fade-in-4 mt-10 grid gap-4 border-t border-[#e7e2da]/60 pt-8 sm:grid-cols-2 lg:max-w-xl">
            {t.hero.stats.map((item, i) => {
              const Icon = statIcons[i] ?? Briefcase;
              return (
                <span key={item.label} className="inline-flex items-center gap-2.5 text-xs text-muted-foreground">
                  <span className="flex size-8 items-center justify-center rounded-full border border-[#e7e2da] bg-white shadow-xs transition-colors duration-200 hover:border-[#5b7db8]/40">
                    <Icon className="size-3.5 text-[#5b7db8]" />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{item.label}</span>
                    <span className="text-[11px]">{item.detail}</span>
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        {/* ── Right: photo with decorations ── */}
        <div className="fade-in-delay-2 relative mx-auto flex w-full max-w-[390px] items-center justify-center lg:mx-0 lg:max-w-[450px]">
          {/* All ring/orbit decorations via PhotoFrame */}
          <PhotoFrame />

          {/* Photo card */}
          <div className="relative z-10 w-full overflow-hidden rounded-[1.5rem] border border-[#e7e2da] bg-white shadow-xl">
            <Image
              src={siteConfig.images.profile}
              alt={siteConfig.founder}
              width={768}
              height={1024}
              priority
              quality={100}
              unoptimized
              sizes="(max-width: 1024px) 90vw, 450px"
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
            />
          </div>

          {/* Float service chips — right, below face */}
          <div className="absolute -right-5 bottom-0 z-20 hidden flex-col gap-3 lg:flex xl:-right-14">
            {t.hero.highlights.map((item, i) => {
              const style = highlightStyles[i];
              const Icon = style.icon;
              return (
                <div
                  key={item.title}
                  className="float-card flex w-[192px] items-center gap-3"
                  style={{ marginLeft: i === 1 ? "1rem" : 0 }}
                >
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: style.bg }}
                  >
                    <Icon className="size-4" style={{ color: style.color }} />
                  </span>
                  <span className="min-w-0 leading-snug">
                    <span className="block text-xs font-semibold text-navy">{item.title}</span>
                    <span className="text-[11px] text-muted-foreground">{item.label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
