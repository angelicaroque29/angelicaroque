import { Calendar, MessageCircle, Rocket } from "lucide-react";
import { CtaButton } from "@/components/cta-button";

const perks = [
  {
    icon: MessageCircle,
    text: "Tell me your idea — I'll map the simplest version to launch first",
  },
  {
    icon: Calendar,
    text: "Free 20-minute appointment, no pressure",
  },
  {
    icon: Rocket,
    text: "Walk away with a clear next step, whether we work together or not",
  },
];

export function Cta() {
  return (
    <section id="contact" className="section-cream">
      <div className="section-container">
        <div className="surface-card mx-auto max-w-3xl overflow-hidden">
          <div className="bg-gradient-to-br from-lavender/80 via-surface to-blush/40 px-8 py-12 text-center md:px-12 md:py-16">
            <span className="section-eyebrow">Let&apos;s talk</span>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Have an idea or business that needs a stronger online presence?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Book a free appointment and I&apos;ll help you figure out what to
              build first — website, digital presence, or custom product.
            </p>
            <div className="mt-8">
              <CtaButton className="rounded-full px-8" />
            </div>
          </div>
          <div className="grid divide-y border-t border-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {perks.map((perk) => (
              <div
                key={perk.text}
                className="flex flex-col items-center gap-2 px-6 py-5 text-center"
              >
                <perk.icon className="size-5 text-primary" />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {perk.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
