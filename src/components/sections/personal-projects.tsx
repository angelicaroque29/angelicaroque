import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { personalProjects } from "@/lib/content";

export function PersonalProjects() {
  return (
    <section id="projects" className="section-sand">
      <div className="section-container">
        <SectionHeading
          label="Built by Angie"
          title="Projects & experiments"
          subtitle="The same engineering behind client work — applied to my own products."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {personalProjects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              image={project.image}
              description={project.description}
              techTags={project.techTags}
              status={project.status}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
