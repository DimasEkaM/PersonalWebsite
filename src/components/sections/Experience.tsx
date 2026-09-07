import { experiences } from "@/data/experience";
import { ExperienceItem } from "@/components/cards/ExperienceItem";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ExperienceProps {
  withSectionHeading?: boolean;
}

export function Experience({ withSectionHeading = true }: ExperienceProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {withSectionHeading ? (
          <SectionHeading
            title="Professional Experience"
            subtitle="Over 7 years building digital products across insurance, banking, e-commerce, and enterprise."
          />
        ) : null}

        <div>
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}