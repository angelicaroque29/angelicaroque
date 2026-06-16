import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { personalProjects } from "@/lib/content";

export function PersonalProjects() {
  return (
    <Section id="projects" flush wash="teal">
      <SectionHeading
        label="Proyectos propios"
        title="Construido por AngieInTech"
        subtitle="La misma ingeniería que aplico con clientes, llevada a productos propios."
      />
      <div className="grid gap-5 md:grid-cols-2">
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
      <div className="mt-8 text-center">
        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-navy"
        >
          ¿Tienes un proyecto similar? Hablemos
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </Section>
  );
}
