import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <Section id="process" flush slide>
      <SectionHeading
        label="Proceso"
        title="Cinco pasos. Sin sorpresas."
        subtitle="Desde la primera charla hasta el lanzamiento. Siempre sabes qué sigue."
      />

      <div className="relative">
        <div className="absolute top-8 right-8 left-8 hidden h-px bg-border lg:block" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <div key={step.title} className="step-card bg-white">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-3 text-sm font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
