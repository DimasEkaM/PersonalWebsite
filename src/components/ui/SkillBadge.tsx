import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
        className
      )}
    >
      {name}
    </span>
  );
}