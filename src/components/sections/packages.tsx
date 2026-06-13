import { Check, Sparkles } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { packages } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="section-sand">
      <div className="section-container">
        <SectionHeading
          label="Packages"
          title="Clear starting points"
          subtitle="Most clients fit Business Presence or Custom Build. We'll confirm scope on your free appointment."
        />
        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "surface-card relative flex flex-col p-6 transition-all hover:-translate-y-0.5",
                pkg.highlighted &&
                  "z-10 border-primary/20 bg-gradient-to-b from-lavender/70 via-surface to-blush/30 ring-1 ring-primary/10 md:-mt-2 md:mb-2 md:py-8"
              )}
            >
              {pkg.highlighted && (
                <span className="brand-gradient absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide text-primary-foreground uppercase shadow-sm">
                  <Sparkles className="size-3" />
                  Most popular
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold">{pkg.name}</h3>
              <p className="mt-3 font-heading text-3xl font-semibold tracking-tight">
                <span className="text-sm font-normal text-muted-foreground">
                  starting at{" "}
                </span>
                <span className="text-primary">{pkg.price}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pkg.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CtaButton
                  variant={pkg.highlighted ? "primary" : "secondary"}
                  className={cn(
                    "w-full",
                    pkg.highlighted && "rounded-full"
                  )}
                >
                  Book Appointment
                </CtaButton>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Final pricing depends on scope, timeline, and complexity.
        </p>
      </div>
    </section>
  );
}
