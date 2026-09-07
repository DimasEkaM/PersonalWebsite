import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      ) : null}
      <div
        className={cn(
          "mt-4 h-1 w-12 rounded-full bg-indigo-600",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}