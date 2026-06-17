"use client";

import Image from "next/image";
import Link from "next/link";
import { AtSign, Briefcase, FolderKanban, Globe, Languages, Mail, MapPin } from "lucide-react";
import { CurvedPath, DotMatrix, GradientBubble, ScatterDots } from "@/components/deco";
import { CtaButton } from "@/components/cta-button";
import { Nav } from "@/components/nav";
import { useLocale } from "@/lib/i18n/context";
import { siteConfig } from "@/lib/site-config";

const statIcons = [Briefcase, FolderKanban, Languages, MapPin] as const;
const outcomeColors = ["#3b4fd8", "#7c5cc4", "#2a9d8f"];

function PhotoFrame() {
  return (
    <>
      <GradientBubble
        size={420}
        colorA="rgb(132 103 255 / 0.38)"
        colorB="rgb(197 212 240 / 0.48)"
        className="hidden lg:block"
        style={{ top: "-14%", right: "-18%", zIndex: 0 }}
      />
      <GradientBubble
        size={180}
        colorA="rgb(42 157 143 / 0.4)"
        colorB="rgb(221 245 241 / 0.55)"
        className="hidden lg:block"
        style={{ bottom: "-5%", left: "-8%", zIndex: 0 }}
      />

      <div
        className="ring-deco hidden lg:block"
        style={{ width: 510, height: 510, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 1 }}
      />
      <div
        className="glow-ring hidden lg:block"
        style={{ width: 410, height: 410, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 1, animationDelay: "1.5s" }}
      />
      <div
        className="ring-deco-sm hidden lg:block"
        style={{ width: 318, height: 318, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 1 }}
      />

      <div className="orbit-dot hidden size-3 lg:block" style={{ top: "2%", left: "50%", zIndex: 3 }} />
      <div className="orbit-dot hidden size-2 lg:block" style={{ top: "48%", right: "0%", zIndex: 3, background: "rgb(132 103 255 / 0.55)" }} />
      <div className="orbit-dot hidden size-4 lg:block" style={{ bottom: "6%", left: "8%", zIndex: 3, background: "rgb(42 157 143 / 0.45)" }} />
      <div className="orbit-dot hidden size-1.5 lg:block" style={{ top: "25%", right: "4%", zIndex: 3, background: "rgb(59 79 216 / 0.45)" }} />
      <div className="orbit-dot hidden size-2.5 lg:block" style={{ top: "72%", left: "2%", zIndex: 3, background: "rgb(197 212 240 / 0.6)" }} />

      <ScatterDots
        className="hidden lg:block"
        style={{ top: "-0.5rem", left: "60%", zIndex: 2 }}
        dots={[
          { cx: 10, cy: 10, r: 4, fill: "rgb(91 125 184 / 0.25)" },
          { cx: 28, cy: 6, r: 2.5, fill: "rgb(132 103 255 / 0.35)" },
          { cx: 44, cy: 14, r: 3.5, fill: "rgb(42 157 143 / 0.28)" },
        ]}
      />

      <div
        className="pointer-events-none absolute -right-2.5 bottom-3 left-3 top-2.5 hidden rounded-[1.75rem] border border-[#5b7db8]/15 lg:block"
        style={{ zIndex: 2 }}
      />

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
    <section id="hero" className="hero-stage">
      <div className="hero-deck">
        <div
          className="deco-blob"
          style={{ width: 520, height: 520, top: "-22%", left: "-14%", background: "rgb(197 212 240 / 0.22)" }}
        />
        <div
          className="deco-blob"
          style={{ width: 380, height: 380, bottom: "-18%", right: "-8%", background: "rgb(221 245 241 / 0.24)" }}
        />

        <GradientBubble
          size={300}
          colorA="rgb(132 103 255 / 0.35)"
          colorB="rgb(197 212 240 / 0.45)"
          className="hidden lg:block"
          style={{ top: "-4%", right: "2%", zIndex: 0 }}
        />

        <DotMatrix
          cols={8}
          rows={6}
          gap={18}
          r={1.6}
          fill="rgb(30 58 95 / 0.08)"
          className="hidden lg:block"
          style={{ top: "1.5rem", right: "1.5rem", zIndex: 1 }}
        />

        <ScatterDots
          className="hidden lg:block"
          style={{ top: "22%", left: "1rem", zIndex: 1 }}
          dots={[
            { cx: 12, cy: 8, r: 8, fill: "rgb(132 103 255 / 0.18)" },
            { cx: 36, cy: 28, r: 5, fill: "rgb(91 125 184 / 0.22)" },
            { cx: 8, cy: 46, r: 12, fill: "rgb(42 157 143 / 0.14)" },
          ]}
        />

        <CurvedPath
          className="hidden lg:block"
          style={{ top: "6%", left: "28%", width: "50%", zIndex: 1 }}
          d="M 0 120 Q 140 20 300 80 T 520 40"
          stroke="rgb(91 125 184 / 0.16)"
          strokeWidth={1.5}
          viewBox="0 0 520 140"
        />

        <div className="hero-deco-torus hidden lg:block" style={{ width: 88, height: 88, top: "14%", left: "6%" }} />
        <div className="hero-deco-sphere hidden lg:block" style={{ width: 54, height: 54, top: "10%", right: "22%" }} />

        <Nav deck />

        <div className="hero-deck-grid">
          <div className="hero-deck-copy order-2 flex flex-col justify-center pb-2 text-center lg:order-1 lg:text-left">
            <div className="fade-in-1 flex justify-center lg:justify-start">
              <span className="micro-chip">
                <span className="pulse-dot mr-1.5 inline-block size-1.5 rounded-full" style={{ background: "#5b7db8" }} />
                {t.hero.chip}
              </span>
            </div>

            <p className="hero-greeting mt-5">{t.hero.greeting}</p>
            <h1 className="hero-name mt-2">{t.hero.name}</h1>
            <p className="fade-in-3 mx-auto mt-5 max-w-md text-sm leading-[1.85] text-muted-foreground sm:text-[0.9375rem] lg:mx-0">
              {t.hero.subtitle}
            </p>

            <div className="fade-in-3 mx-auto mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {t.hero.outcomes.map((o, i) => (
                <span
                  key={o}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#e7e2da] bg-white px-3 py-1.5 text-[11px] font-medium text-navy shadow-xs"
                >
                  <span className="size-1.5 rounded-full" style={{ background: outcomeColors[i] }} />
                  {o}
                </span>
              ))}
            </div>

            <div className="fade-in-4 mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <CtaButton href="#booking" showArrow className="!h-11 !px-7">
                {t.hero.primaryCta}
              </CtaButton>
              <CtaButton variant="secondary" href="#services" showArrow className="!h-11 !px-7">
                {t.hero.secondaryCta}
              </CtaButton>
            </div>

            <div className="mt-6 flex flex-col items-center gap-4 lg:items-start">
              <a href={`mailto:${siteConfig.email}`} className="hero-email-pill">
                <Mail className="mr-2 inline size-4 text-[#5b7db8]" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3">
                <a href={`mailto:${siteConfig.email}`} className="hero-social-btn" aria-label="Email">
                  <Mail className="size-4 text-[#3b4fd8]" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label="Instagram"
                >
                  <Globe className="size-4 text-[#2a9d8f]" />
                </a>
                <a
                  href={siteConfig.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label="Cal.com"
                >
                  <AtSign className="size-4 text-navy" />
                </a>
              </div>
            </div>

            <div className="fade-in-4 mt-8 hidden border-t border-[#e7e2da]/70 pt-6 lg:grid lg:grid-cols-2 lg:gap-3">
              {t.hero.stats.map((item, i) => {
                const Icon = statIcons[i] ?? Briefcase;
                return (
                  <div key={item.label} className="flex items-center gap-2.5 text-left">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#e7e2da] bg-white shadow-xs">
                      <Icon className="size-3.5 text-[#5b7db8]" />
                    </span>
                    <span>
                      <p className="text-xs font-semibold text-navy">{item.label}</p>
                      <p className="text-[11px] text-muted-foreground">{item.detail}</p>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hero-deck-photo order-1 lg:order-2">
            <PhotoFrame />

            <div className="hero-deck-photo-inner">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#e7e2da] bg-white shadow-xl">
                <Image
                  src={siteConfig.images.profile}
                  alt={siteConfig.founder}
                  width={768}
                  height={1024}
                  priority
                  quality={100}
                  unoptimized
                  sizes="(max-width: 1024px) 70vw, 420px"
                  className="aspect-[4/5] w-full object-cover object-[center_22%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e7e2da]/70 px-5 py-5 lg:hidden">
          <div className="grid grid-cols-2 gap-3">
            {t.hero.stats.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold text-navy">{item.label}</p>
                <p className="text-[11px] text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
          <Link href="#booking" className="btn-talk mt-5 inline-flex w-full justify-center">
            {t.nav.talkCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
