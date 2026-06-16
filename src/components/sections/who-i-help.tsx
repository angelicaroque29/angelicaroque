import { SectionHeading } from "@/components/section-heading";
import { whoIHelp } from "@/lib/content";

export function WhoIHelp() {
  return (
    <section id="who-i-help" className="section-cream">
      <div className="section-container">
        <SectionHeading
          label="Para quién"
          title="Negocios listos para operar con sistema"
          subtitle="Trabajo con dueños y founders que necesitan algo real, no una plantilla ni una agencia de 12 personas."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {whoIHelp.map((item, index) => (
            <div key={item.title} className="surface-card flex flex-col p-6">
              <span className="font-heading text-3xl font-semibold text-primary/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-4 text-xs font-medium text-primary-dark">
                {item.examples}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
