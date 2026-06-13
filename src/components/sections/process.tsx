import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="section-cream">
      <div className="section-container">
        <SectionHeading
          label="Process"
          title="Simple, no-surprise workflow"
          subtitle="You always know what's happening and what comes next."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="surface-card flex flex-col p-5"
            >
              <span className="font-heading text-2xl font-semibold text-primary/25">
                {step.number}
              </span>
              <h3 className="mt-2 font-heading text-base font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
