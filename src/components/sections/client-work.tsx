import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { clientWork } from "@/lib/content";

export function ClientWork() {
  return (
    <section id="client-work" className="bg-white">
      <div className="section-container">
        <SectionHeading
          title="Selected client work"
          subtitle="Real websites, branding, and digital presence I've built for businesses."
        />
        <div className="grid gap-8 md:grid-cols-2">
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
