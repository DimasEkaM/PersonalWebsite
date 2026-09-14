import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  index?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  index,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-baseline gap-3",
          align === "center" && "justify-center"
        )}
      >
        {index ? (
          <span
            className="font-serif text-2xl italic text-accent-deep sm:text-3xl"
            aria-hidden="true"
          >
            {index}
          </span>
        ) : null}
        <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}