import { SectionHeading } from "@/components/section-heading";
import { policies } from "@/lib/content";

export function Policies() {
  return (
    <section id="policies" className="section-sand">
      <div className="section-container">
        <SectionHeading
          label={policies.label}
          title={policies.title}
          subtitle={policies.subtitle}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {policies.items.map((policy) => (
            <div key={policy.title} className="surface-card p-5">
              <h3 className="font-heading text-base font-semibold">
                {policy.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
