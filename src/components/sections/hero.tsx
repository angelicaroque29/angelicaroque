import Image from "next/image";
import { ArrowRight, BadgeCheck, Briefcase, Globe, Languages, Sparkles, Zap } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  {
    icon: Zap,
    title: "Automatizaciones",
    label: "que te ahorran tiempo",
    color: "#3b4fd8",
    bg: "linear-gradient(135deg,#eef2fb,#dde6f8)",
  },
  {
    icon: Sparkles,
    title: "Sistemas con IA",
    label: "que trabajan por ti",
    color: "#7c5cc4",
    bg: "linear-gradient(135deg,#f0edf8,#e5dff5)",
  },
  {
    icon: Globe,
    title: "Websites que venden",
    label: "los 7 días de la semana",
    color: "#2a9d8f",
    bg: "linear-gradient(135deg,#ddf5f1,#c8ede8)",
  },
];

const stats = [
  { icon: BadgeCheck, label: "5+ años", detail: "de experiencia" },
  { icon: Languages, label: "EN / ES", detail: "Bilingüe" },
  { icon: Briefcase, label: "AmEx", detail: "Software Engineer" },
];

const outcomes = [
  "Más clientes sin trabajar más",
  "Operación que corre sola",
  "Tecnología que realmente funciona",
];

function PhotoFrame() {
  return (
    <>
      {/* Large soft lavender glow */}
      <div
        className="deco-blob"
        style={{ width: 380, height: 380, top: "-12%", right: "-15%", background: "rgb(132 103 255 / 0.22)", zIndex: 0 }}
      />
      {/* Teal glow bottom-left */}
      <div
        className="deco-blob"
        style={{ width: 220, height: 220, bottom: "-8%", left: "-10%", background: "rgb(42 157 143 / 0.18)", zIndex: 0 }}
      />

      {/* Outer ring — large, offset */}
      <div
        className="ring-deco hidden lg:block"
        style={{ width: 520, height: 520, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 1 }}
      />
      {/* Middle ring */}
      <div
        className="glow-ring hidden lg:block"
        style={{ width: 420, height: 420, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 1, animationDelay: "1.5s" }}
      />
      {/* Inner ring */}
      <div
        className="ring-deco-sm hidden lg:block"
        style={{ width: 330, height: 330, top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 1 }}
      />

      {/* Orbit dots */}
      <div className="orbit-dot hidden size-2.5 lg:block" style={{ top: "4%", left: "52%", zIndex: 2 }} />
      <div className="orbit-dot hidden size-2 lg:block" style={{ top: "50%", right: "1%", zIndex: 2, background: "rgb(132 103 255 / 0.5)" }} />
      <div className="orbit-dot hidden size-3 lg:block" style={{ bottom: "8%", left: "10%", zIndex: 2, background: "rgb(42 157 143 / 0.5)" }} />
      <div className="orbit-dot hidden size-1.5 lg:block" style={{ top: "30%", right: "5%", zIndex: 2, background: "rgb(91 125 184 / 0.4)" }} />

      {/* Offset thin border frame */}
      <div
        className="pointer-events-none absolute -right-2.5 bottom-3 left-3 top-2.5 hidden rounded-[1.75rem] border border-[#5b7db8]/18 lg:block"
        style={{ zIndex: 2 }}
      />

      {/* Corner grid — top right */}
      <div
        className="corner-grid hidden lg:block"
        style={{ width: "7rem", height: "7rem", top: "-1rem", right: "-0.5rem", zIndex: 2 }}
      />
    </>
  );
}

export function Hero() {
  return (
    <Section id="hero" bare className="relative overflow-hidden">
      {/* Page-level background blobs */}
      <div
        className="deco-blob"
        style={{ width: 600, height: 600, top: "-16%", left: "-14%", background: "rgb(197 212 240 / 0.32)" }}
      />
      <div
        className="deco-blob"
        style={{ width: 440, height: 440, bottom: "-12%", right: "-8%", background: "rgb(221 245 241 / 0.3)" }}
      />

      {/* Dot grid — top right */}
      <div
        className="corner-grid right-8 top-6 hidden lg:block"
        style={{ width: "14rem", height: "14rem", opacity: 0.35 }}
      />

      <div className="section-inner relative grid items-center gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-18">

        {/* ── Left copy ── */}
        <div className="text-center lg:text-left">
          <div className="fade-in flex justify-center lg:justify-start">
            <span className="micro-chip">
              <span
                className="mr-1.5 inline-block size-1.5 animate-pulse rounded-full"
                style={{ background: "#5b7db8" }}
              />
              AngieInTech · Miami · Software Engineer
            </span>
          </div>

          <h1 className="fade-in mt-5 max-w-[580px] font-heading text-[clamp(2.6rem,5.2vw,4.15rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-navy">
            Tecnología simple para negocios que{" "}
            <span
              style={{
                background: "linear-gradient(115deg, #3b4fd8 0%, #5b7db8 45%, #2a9d8f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              quieren crecer.
            </span>
          </h1>

          <p className="fade-in-delay mx-auto mt-6 max-w-[440px] text-[0.9375rem] leading-[1.85] text-muted-foreground lg:mx-0">
            Construyo páginas web, automatizaciones y sistemas con IA para ayudarte
            a conseguir más clientes, ahorrar tiempo y trabajar con más claridad.
          </p>

          {/* Outcome pills */}
          <div className="fade-in-delay mx-auto mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
            {outcomes.map((o) => (
              <span
                key={o}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#e7e2da] bg-white px-3 py-1.5 text-[11px] font-medium text-navy shadow-xs"
              >
                <span className="size-1.5 rounded-full bg-[#5b7db8]" />
                {o}
              </span>
            ))}
          </div>

          <div className="fade-in-delay mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <CtaButton href="#booking" showArrow className="!h-12 !px-8">
              Agenda tu llamada gratis
            </CtaButton>
            <CtaButton variant="ghost" href="#services" className="!h-12 !px-7">
              Ver servicios
            </CtaButton>
          </div>

          {/* Credentials */}
          <div className="fade-in-delay-2 mt-10 flex flex-wrap justify-center gap-5 border-t border-[#e7e2da]/60 pt-8 lg:justify-start">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.label} className="inline-flex items-center gap-2.5 text-xs text-muted-foreground">
                  <span className="flex size-8 items-center justify-center rounded-full border border-[#e7e2da] bg-white shadow-xs">
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
              width={520}
              height={640}
              priority
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
            />
          </div>

          {/* Float service chips — right, pushed below face */}
          <div className="absolute -right-5 bottom-[10%] z-20 hidden flex-col gap-3 lg:flex xl:-right-14">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="float-card flex w-[192px] items-center gap-3"
                  style={{ marginLeft: i === 1 ? "1rem" : 0 }}
                >
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: item.bg }}
                  >
                    <Icon className="size-4" style={{ color: item.color }} />
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
