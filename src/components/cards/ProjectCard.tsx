import Link from "next/link";
import { ExternalLink, FolderGit2 } from "lucide-react";
import type { Project } from "@/types";
import { SkillBadge } from "@/components/ui/SkillBadge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-4 flex items-center justify-between">
        <FolderGit2
          className="h-8 w-8 text-indigo-600"
          aria-hidden="true"
        />
        <div className="flex items-center gap-3">
          {project.demoUrl ? (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          ) : null}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <SkillBadge key={tech} name={tech} />
        ))}
      </div>

      {project.highlights && project.highlights.length > 0 ? (
        <ul className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-xs text-zinc-500 dark:text-zinc-400"
            >
              <span className="text-indigo-600" aria-hidden="true">
                ▸
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}