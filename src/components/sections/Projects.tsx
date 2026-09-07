import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface ProjectsProps {
  showAll?: boolean;
}

export function Projects({ showAll = false }: ProjectsProps) {
  const visible = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            title="Projects & Portfolio"
            subtitle="A selection of projects across insurance, mortgage, e-commerce, and enterprise environments."
            className="mb-0"
          />
          {!showAll ? (
            <Button href="/portfolio" variant="secondary" className="mb-10">
              View all projects
            </Button>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}