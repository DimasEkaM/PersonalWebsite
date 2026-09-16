import { getExperiences } from "@/lib/api";
import { ExperienceItem } from "@/components/cards/ExperienceItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionSkeleton } from "@/components/ui/Skeleton";
import { Suspense } from "react";

interface ExperienceProps {
  withSectionHeading?: boolean;
}

async function ExperienceContent({ withSectionHeading }: ExperienceProps) {
  const experiences = await getExperiences();

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

export function Experience({ withSectionHeading = true }: ExperienceProps) {
  return (
    <Suspense fallback={<SectionSkeleton />}>
      <ExperienceContent withSectionHeading={withSectionHeading} />
    </Suspense>
  );
}
