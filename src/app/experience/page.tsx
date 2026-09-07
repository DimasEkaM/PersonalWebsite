import type { Metadata } from "next";
import { experiences } from "@/data/experience";
import { ExperienceItem } from "@/components/cards/ExperienceItem";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Dimas Eka Mahendra across insurance, banking, e-commerce, and enterprise environments.",
};

export default function ExperiencePage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Professional Experience"
          subtitle="Over 7 years building digital products across insurance, banking, e-commerce, and enterprise."
        />

        <div>
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}