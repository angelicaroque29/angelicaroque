import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="bg-white">
      <div className="section-container">
        <SectionHeading
          title="How we'll work together"
          subtitle="A simple, transparent process from first call to launch."
        />

        <div className="hidden md:block">
          <div className="relative grid grid-cols-5 gap-4">
            <div className="absolute top-8 right-8 left-8 h-px bg-border" />
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-border/60 bg-white font-heading text-sm font-semibold text-primary shadow-sm">
                  {step.number}
                </div>
                <h3 className="mt-5 font-heading text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 md:hidden">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-white font-heading text-xs font-semibold text-primary">
                  {step.number}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-4">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
