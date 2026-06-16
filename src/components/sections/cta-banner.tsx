import { ArrowRight } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";

const perks = [
  "Llamada gratis de 20 min",
  "Sin compromiso",
  "Sales con un plan claro",
];

export function CtaBanner() {
  return (
    <Section id="contact" flush className="!py-14 lg:!py-16">
      <div className="cta-banner">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-18" />

        {/* Sphere — right */}
        <div
          className="pointer-events-none absolute -bottom-12 -right-12 size-56 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, rgb(255 255 255 / 0.95) 0 10%, rgb(197 212 240 / 0.88) 24%, rgb(132 103 255 / 0.42) 56%, transparent 72%)",
          }}
        />
        {/* Sphere — left subtle */}
        <div
          className="pointer-events-none absolute -left-8 top-1/2 hidden size-28 -translate-y-1/2 rounded-full lg:block"
          style={{ background: "radial-gradient(circle, rgb(221 245 241 / 0.65), transparent 70%)" }}
        />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <span className="micro-chip mb-4 inline-flex">¿Lista para empezar?</span>
            <h2 className="font-heading text-[clamp(1.55rem,2.8vw,2.15rem)] font-semibold leading-[1.12] tracking-tight text-navy">
              Tu negocio merece crecer con tecnología{" "}
              <span
                style={{
                  background: "linear-gradient(105deg, #3b4fd8, #2a9d8f)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                que realmente funciona.
              </span>
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Agenda la llamada gratis de 20 min. Te digo exactamente qué puedo
              construirte para que atiendas más clientes sin trabajar el doble.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {perks.map((p) => (
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
          <CtaButton href="#booking" showArrow className="shrink-0 !h-12 !px-8 text-base">
            Agendar llamada gratis
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
