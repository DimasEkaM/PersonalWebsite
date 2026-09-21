"use client";

import { useQuery } from "@tanstack/react-query";
import { getSkillCategories } from "@/lib/api";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillsSkeleton } from "@/components/ui/Skeleton";

interface SkillsProps {
  withSectionHeading?: boolean;
}

export function Skills({ withSectionHeading = true }: SkillsProps) {
  const {
    data: skillCategories = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["skillCategories"],
    queryFn: getSkillCategories,
  });

  if (isLoading) return <SkillsSkeleton />;

  if (error) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted">Failed to load skills.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {withSectionHeading ? (
          <SectionHeading
            index="04"
            title="Skills"
            subtitle="The stack I reach for, rated honestly. Frontend first, backend close behind."
          />
        ) : null}

        <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="font-serif text-xl font-medium text-ink">
                {category.name}
              </h3>
              <div className="mt-4 border-t border-line">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-4 border-b border-line py-2.5"
                  >
                    <span className="text-sm text-ink">{skill.name}</span>
                    {skill.level ? (
                      <span className="text-xs text-muted">{skill.level}/5</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
