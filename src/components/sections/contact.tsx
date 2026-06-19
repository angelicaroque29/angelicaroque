"use client";

import Link from "next/link";
import { AtSign, Calendar, Mail, MapPin, MessageCircle } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const items = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: siteConfig.whatsappUrl,
    external: true,
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: siteConfig.handle,
    href: siteConfig.social.instagram,
    external: true,
  },
  { icon: MapPin, label: "Ubicación", value: siteConfig.location },
  { icon: Calendar, label: "Agenda", value: "Reserva en línea", href: routes.booking },
];

type ContactProps = {
  standalone?: boolean;
};

export function Contact({ standalone = false }: ContactProps) {
  return (
    <Section id="contact" flush wash="lavender" className={cn(standalone && "!pt-10 lg:!pt-14")}>
      <div className="cta-banner mb-12">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />
        <div
          className="deco-blob"
          style={{
            width: 220,
            height: 220,
            top: "-10%",
            right: "-5%",
            background: "rgb(197 212 240 / 0.4)",
          }}
        />
        <div className="relative z-10 max-w-xl">
          <p className="section-eyebrow">¿Lista para empezar?</p>
          <h2 className="heading-editorial mt-2">
            Tu negocio merece trabajar de forma más inteligente.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Primera cita de 20 min gratis. Cuéntame qué te quita tiempo y te digo
            qué automatizar primero.
          </p>
          <CtaButton href={routes.booking} showArrow className="mt-6">
            Agendar una llamada
          </CtaButton>
        </div>
      </div>

      <div className="mb-8">
        <p className="section-eyebrow">Contacto</p>
        <h2 className="heading-editorial">Hablemos.</h2>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          Email, WhatsApp o agenda. Respondo en 24–48 h.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          const inner = (
            <div className="card-editorial flex items-start gap-3 p-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-soft text-teal">
                <Icon className="size-4" />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                  {item.label}
                </p>
                <p className="mt-0.5 text-sm font-medium break-all">{item.value}</p>
              </div>
            </div>
          );
          if (item.href) {
            const isInternal = item.href.startsWith("/");
            if (isInternal) {
              return (
                <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-90">
                  {inner}
                </Link>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="transition-opacity hover:opacity-90"
              >
                {inner}
              </a>
            );
          }
          return <div key={item.label}>{inner}</div>;
        })}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <CtaButton href={routes.booking} showArrow>
          {siteConfig.cta.book}
        </CtaButton>
        <CtaButton variant="ghost" href={siteConfig.whatsappUrl}>
          {siteConfig.cta.whatsapp}
        </CtaButton>
      </div>
    </Section>
  );
}
