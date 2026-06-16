"use client";

import { useState } from "react";
import { Calendar, CheckCircle2, ChevronDown, ExternalLink, MessageCircle, Sparkles, Star } from "lucide-react";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

const options = [
  {
    id: "free",
    badge: "Gratis",
    label: "Llamada de descubrimiento",
    price: "20 min · Sin costo",
    description:
      "Cuéntame tu negocio. Te digo exactamente qué puedo hacer por ti y cómo.",
    cta: "Reservar ahora",
    ctaIcon: Calendar,
    href: siteConfig.calLink,
    featured: true,
    bar: "linear-gradient(90deg, #3b4fd8, #5b7db8, #2a9d8f)",
    bg: "linear-gradient(160deg, #fafbff 0%, #f0f4ff 100%)",
    accent: "#3b4fd8",
    accentBg: "#eef2fb",
    perks: ["Sin compromiso", "Sales con un plan claro", "Respuesta en 24h"],
  },
  {
    id: "consult",
    badge: "Estrategia",
    label: "Sesión de estrategia",
    price: "desde $75",
    description:
      "Una sesión enfocada para priorizar qué mejorar primero en tu operación y cómo crecer.",
    cta: "Agendar sesión",
    ctaIcon: Calendar,
    href: siteConfig.calLink,
    featured: false,
    bar: "linear-gradient(90deg, #7c5cc4, #a07dd8)",
    bg: "linear-gradient(160deg, #fdf9ff 0%, #f5f0fc 100%)",
    accent: "#7c5cc4",
    accentBg: "#f0edf8",
    perks: ["30 o 60 minutos", "Plan de acción escrito", "Estimado de inversión"],
  },
  {
    id: "project",
    badge: "Implementación",
    label: "Quiero un proyecto",
    price: "desde $1,800",
    description:
      "Listo para construir. Empezamos con la llamada gratis para definir alcance, precio y plazos.",
    cta: "Empezar aquí",
    ctaIcon: Sparkles,
    href: siteConfig.calLink,
    featured: false,
    bar: "linear-gradient(90deg, #2a9d8f, #4bbfb1)",
    bg: "linear-gradient(160deg, #f7fdfb 0%, #ebf8f5 100%)",
    accent: "#2a9d8f",
    accentBg: "#ddf5f1",
    perks: ["Web, automatización o sistema", "Propuesta por escrito", "Precio y plazos claros"],
  },
] as const;

export function Booking() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Section id="booking" flush className="!py-14 lg:!py-20">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#e7e2da]/70 bg-white/60 px-5 py-10 shadow-sm sm:px-8 lg:px-12 lg:py-14">
        <div className="corner-grid right-4 top-4" />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 size-40 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgb(255 255 255 / 0.95) 0 10%, rgb(197 212 240 / 0.88) 26%, rgb(132 103 255 / 0.38) 56%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="micro-chip mb-3 inline-flex">Agenda</span>
              <h2 className="font-heading text-[clamp(1.7rem,3vw,2.35rem)] font-semibold leading-[1.1] tracking-tight text-navy">
                Elige cómo quieres empezar.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                No necesitas saber exactamente qué necesitas. La mayoría empieza
                con la llamada gratis y desde ahí definimos el plan.
              </p>
            </div>
            <div className="hidden items-center gap-2 text-xs text-muted-foreground lg:flex">
              <Star className="size-4 fill-[#f5c542] text-[#f5c542]" />
              <span>Negocios en Miami, EEUU y LATAM</span>
            </div>
          </div>

          {/* Option cards */}
          <div className="grid gap-5 lg:grid-cols-3">
            {options.map((opt) => {
              const Cta = opt.ctaIcon;
              return (
                <div
                  key={opt.id}
                  className="group relative flex flex-col overflow-hidden rounded-[1.35rem] border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: opt.bg,
                    borderColor: opt.featured ? `${opt.accent}40` : "#e7e2da",
                    boxShadow: opt.featured
                      ? `0 4px 32px ${opt.accent}18`
                      : "0 2px 10px rgb(24 32 51 / 0.04)",
                  }}
                >
                  <div
                    className="h-[3.5px] w-full rounded-t-[1.35rem]"
                    style={{ background: opt.bar }}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span
                        className="inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase"
                        style={{ background: opt.accentBg, color: opt.accent }}
                      >
                        {opt.badge}
                      </span>
                      {opt.featured && (
                        <span className="text-[10px] font-semibold tracking-wide text-[#3b4fd8] uppercase">
                          Más popular
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                      {opt.label}
                    </h3>
                    <p className="mt-1 text-xl font-semibold" style={{ color: opt.accent }}>
                      {opt.price}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {opt.description}
                    </p>
                    <ul className="mt-5 space-y-1.5">
                      {opt.perks.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="size-3.5 shrink-0" style={{ color: opt.accent }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={opt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all duration-200 hover:brightness-105 hover:shadow-md"
                      style={
                        opt.featured
                          ? { background: opt.accent, color: "#ffffff" }
                          : { background: opt.accentBg, color: opt.accent }
                      }
                    >
                      <Cta className="size-4" />
                      {opt.cta}
                      <ExternalLink className="size-3 opacity-60" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show full calendar toggle */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowCalendar((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-[#e7e2da] bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-xs transition-all hover:border-[#5b7db8]/40 hover:shadow-sm"
            >
              <Calendar className="size-4 text-[#5b7db8]" />
              {showCalendar ? "Ocultar calendario" : "Ver todos los horarios disponibles"}
              <ChevronDown
                className="size-4 text-muted-foreground transition-transform duration-200"
                style={{ transform: showCalendar ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
          </div>

          {/* Full cal.com embed — all event types */}
          {showCalendar && (
            <div className="mt-6 overflow-hidden rounded-[1.35rem] border border-[#e7e2da] bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-[#e7e2da]/60 px-6 py-4">
                <p className="text-sm font-semibold text-navy">Todos los tipos de cita disponibles</p>
                <a
                  href={siteConfig.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5b7db8] hover:text-navy"
                >
                  Abrir en nueva pestaña
                  <ExternalLink className="size-3" />
                </a>
              </div>
              <iframe
                title="Calendario Angelica Roque"
                src={`${siteConfig.calLink}?embed=true&theme=light`}
                className="h-[600px] w-full border-0 bg-white"
                loading="lazy"
              />
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 flex flex-col items-center gap-3 border-t border-[#e7e2da]/60 pt-6 sm:flex-row sm:justify-between">
            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              Primera llamada siempre gratis · sin compromiso · sales con claridad
            </p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2a9d8f] hover:text-navy"
            >
              <MessageCircle className="size-4" />
              ¿Prefieres WhatsApp?
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
