import type { Project } from "@/types";
import { SkillBadge } from "@/components/ui/SkillBadge";

interface ProjectCardProps {
  project: Project;
}

const categoryLabel = (category: string) =>
  category.charAt(0).toUpperCase() + category.slice(1);

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-md border border-line bg-paper p-6 transition-colors hover:border-accent">
      <p className="text-sm font-medium text-accent-deep">
        {categoryLabel(project.category)}
      </p>
      <h3 className="mt-2 font-serif text-xl font-medium text-ink">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.highlights && project.highlights.length > 0 ? (
        <ul className="mt-4 list-disc space-y-1.5 pl-4 marker:text-accent">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="text-xs leading-relaxed text-muted">
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <SkillBadge key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
}