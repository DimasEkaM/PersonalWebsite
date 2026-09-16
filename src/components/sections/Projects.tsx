"use client";

import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/lib/api";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { ProjectsSkeleton } from "@/components/ui/Skeleton";
import { useState } from "react";

interface ProjectsProps {
  showAll?: boolean;
}

const categoryLabel = (category: string) =>
  category.charAt(0).toUpperCase() + category.slice(1);

const categories = ["all", "web", "mobile", "fullstack"] as const;

export function Projects({ showAll = false }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const {
    data: projects = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (isLoading) return <ProjectsSkeleton />;

  if (error) {
    return (
      <section className="border-y border-line bg-tan py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted">Failed to load projects.</p>
        </div>
      </section>
    );
  }

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visible = showAll ? filtered : filtered.filter((p) => p.featured);

  if (showAll) {
    return (
      <div>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "bg-line text-muted hover:text-ink"
              }`}
            >
              {categoryLabel(cat)}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="border-y border-line bg-tan py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            index="03"
            title="Selected work"
            subtitle="The releases I can point to and explain. Banking, insurance, and commerce systems with real users."
            className="mb-0"
          />
          <Button href="/portfolio" variant="secondary" className="mb-2">
            All projects
          </Button>
        </div>

        <div className="mt-10 border-t border-line">
          {visible.map((project, i) => (
            <article key={project.id} className="grid gap-4 border-b border-line py-8 sm:grid-cols-12 sm:gap-8">
              <div className="sm:col-span-1">
                <span className="font-serif italic text-accent-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="sm:col-span-7">
                <p className="text-sm font-medium text-accent-deep">
                  {categoryLabel(project.category)}
                </p>
                <h3 className="mt-1 font-serif text-2xl font-medium text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <SkillBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
              {project.highlights && project.highlights.length > 0 ? (
                <ul className="space-y-2 sm:col-span-4 sm:pt-1">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="text-sm leading-relaxed text-muted">
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
