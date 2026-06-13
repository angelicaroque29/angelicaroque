import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { clientWork } from "@/lib/content";

export function ClientWork() {
  return (
    <section id="client-work" className="section-sand">
      <div className="section-container">
        <SectionHeading
          label="Client work"
          title="Real businesses I've built for"
          subtitle="Healthcare brands in Miami — full digital foundations, not just a homepage."
        />

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {[
            { value: "Website", label: "Design & development" },
            { value: "Branding", label: "Visual identity" },
            { value: "Google + Social", label: "Discovery & presence" },
          ].map((item) => (
            <div
              key={item.value}
              className="rounded-xl border border-border/70 bg-surface/80 px-4 py-3 text-center"
            >
              <p className="text-sm font-semibold text-foreground">
                {item.value}
              </p>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {clientWork.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              image={project.image}
              description={project.description}
              services={project.services}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
