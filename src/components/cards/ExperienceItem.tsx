import type { Experience } from "@/types";

interface ExperienceItemProps {
  experience: Experience;
}

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const m = monthNames[Number(month) - 1];
  return `${m} ${year}`;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="relative border-l-2 border-zinc-200 pb-10 pl-6 last:pb-0 dark:border-zinc-800">
      <span
        className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-indigo-600"
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {experience.role}
        </h3>
        <span className="text-sm font-medium text-indigo-600">
          {experience.company}
        </span>
      </div>

      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {formatDate(experience.startDate)} —{" "}
        {experience.endDate === "Present"
          ? "Present"
          : formatDate(experience.endDate)}
        {experience.location ? ` · ${experience.location}` : ""}
      </p>

      <ul className="mt-4 space-y-2">
        {experience.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
          >
            <span className="mt-0.5 select-none text-indigo-600" aria-hidden="true">
              ▸
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      {experience.tech && experience.tech.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-zinc-500 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}