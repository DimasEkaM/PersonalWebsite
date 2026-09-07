import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const levelColors = ["", "bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-emerald-500"] as const;

interface SkillsProps {
  withSectionHeading?: boolean;
}

export function Skills({ withSectionHeading = true }: SkillsProps) {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {withSectionHeading ? (
          <SectionHeading
            title="Skills & Technologies"
            subtitle="Technologies and tools I use to build scalable, reliable, and performant applications."
          />
        ) : null}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {category.name}
              </h3>
              <div className="mt-4 space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {skill.name}
                      </span>
                      {skill.level ? (
                        <span className="text-xs text-zinc-400">
                          {skill.level}/5
                        </span>
                      ) : null}
                    </div>
                    <div
                      className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={5}
                      aria-label={`${skill.name} proficiency`}
                    >
                      <div
                        className={cn(
                          "h-full rounded-full transition-all",
                          levelColors[skill.level ?? 0]
                        )}
                        style={{ width: `${((skill.level ?? 0) / 5) * 100}%` }}
                      />
                    </div>
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