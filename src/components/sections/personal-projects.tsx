import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { personalProjects } from "@/lib/content";

export function PersonalProjects() {
  return (
    <section id="projects" className="bg-beige">
      <div className="section-container">
        <SectionHeading
          title="Built by Angie"
          subtitle="Personal software projects and experiments — the same engineering skills I bring to client work."
        />
        <div className="grid gap-8 md:grid-cols-2">
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
