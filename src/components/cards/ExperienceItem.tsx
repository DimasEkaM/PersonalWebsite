import type { Experience } from "@/types";
import { SkillBadge } from "@/components/ui/SkillBadge";

interface ExperienceItemProps {
  experience: Experience;
  index?: string;
}

function formatDate(date: string) {
  if (date === "Present") return "Present";
  const [year, month] = date.split("-");
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const m = monthNames[Number(month) - 1];
  return `${m} ${year}`;
}

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  return (
    <div className="grid gap-4 border-t border-line py-8 sm:grid-cols-12">
      <div className="sm:col-span-4 sm:pr-8">
        {index ? (
          <span className="font-serif italic text-accent-deep">{index}</span>
        ) : null}
        <p className="mt-1 text-sm text-muted">
          {formatDate(experience.startDate)} ·{" "}
          {formatDate(experience.endDate)}
        </p>
        {experience.location ? (
          <p className="mt-1 text-sm text-muted">{experience.location}</p>
        ) : null}
      </div>

      <div className="sm:col-span-8">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-xl font-medium text-ink">
            {experience.role}
          </h3>
          <span className="text-sm font-medium text-accent-deep">
            {experience.companyShort ?? experience.company}
          </span>
        </div>

        <ul className="mt-4 list-disc space-y-2 pl-4 marker:text-accent">
          {experience.bullets.map((bullet) => (
            <li
              key={bullet}
              className="text-sm leading-relaxed text-muted"
            >
              {bullet}
            </li>
          ))}
        </ul>

        {experience.tech && experience.tech.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.tech.map((tech) => (
              <SkillBadge key={tech} name={tech} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}