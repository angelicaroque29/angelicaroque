import { Check, Sparkles } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { consultationOffers, ui } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Consultation() {
  return (
    <Section id="consultation" flush>
      <SectionHeading
        label={consultationOffers.label}
        title={consultationOffers.title}
        subtitle={consultationOffers.subtitle}
      />

      <p className="mx-auto -mt-6 mb-8 max-w-xl text-center text-sm font-medium text-teal">
        {ui.freeIntro}
      </p>

      <div className="grid items-stretch gap-5 md:grid-cols-3">
        {consultationOffers.sessions.map((session) => (
          <div
            key={session.name}
            className={cn(
              "card-editorial relative flex flex-col p-6",
              session.highlighted && "card-featured"
            )}
          >
            {session.highlighted && (
              <span className="brand-gradient absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide text-white uppercase shadow-sm">
                <Sparkles className="size-3" />
                {ui.mostPopular}
              </span>
            )}
            <p className="text-[10px] font-semibold tracking-[0.2em] text-teal uppercase">
              {session.duration}
            </p>
            <h3 className="mt-2 font-heading text-lg font-semibold">{session.name}</h3>
            <p className="mt-3 font-heading text-2xl font-semibold text-navy">
              {session.price}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {session.description}
            </p>
            <ul className="mt-5 flex-1 space-y-2">
              {session.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>
              <div className="mt-6">
                <CtaButton
                  variant={session.highlighted ? "primary" : "secondary"}
                  className={cn(
                    "w-full",
                    session.highlighted && "rounded-full"
                  )}
                >
                  {siteConfig.cta.book}
                </CtaButton>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          {consultationOffers.note}
        </p>
    </Section>
  );
}
