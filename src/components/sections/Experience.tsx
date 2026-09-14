import { experiences } from "@/data/experience";
import { ExperienceItem } from "@/components/cards/ExperienceItem";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ExperienceProps {
  withSectionHeading?: boolean;
}

export function Experience({ withSectionHeading = true }: ExperienceProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {withSectionHeading ? (
          <SectionHeading
            index="02"
            title="Experience"
            subtitle="Built digital products across insurance, banking, e-commerce, and enterprise since 2017."
          />
        ) : null}

        <div>
          {experiences.map((experience, i) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              index={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}