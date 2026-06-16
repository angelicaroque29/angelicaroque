import { Calendar, MessageCircle, Rocket } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { ctaPerks } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const perkIcons = [MessageCircle, Calendar, Rocket];

export function Cta() {
  return (
    <section id="contact" className="section-cream">
      <div className="section-container">
        <div className="surface-card mx-auto max-w-3xl overflow-hidden">
          <div className="bg-gradient-to-br from-lavender/80 via-surface to-blush/40 px-8 py-12 text-center md:px-12 md:py-16">
            <span className="section-eyebrow">Hablemos</span>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              ¿Muchos mensajes y poca organización?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Agenda una cita gratis de 20 minutos o una sesión de consulta.
              Te digo el paso más simple para tu negocio.
            </p>
            <div className="mt-8">
              <CtaButton className="rounded-full px-8">
                {siteConfig.cta.book}
              </CtaButton>
            </div>
          </div>
          <div className="grid divide-y border-t border-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {ctaPerks.map((perk, index) => {
              const Icon = perkIcons[index];
              return (
                <div
                  key={perk.text}
                  className="flex flex-col items-center gap-2 px-6 py-5 text-center"
                >
                  <Icon className="size-5 text-primary" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {perk.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
