import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Dimas Eka Mahendra across insurance, banking, e-commerce, and enterprise environments.",
};

export default function ExperiencePage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Professional Experience"
          subtitle="Over 7 years building digital products across insurance, banking, e-commerce, and enterprise."
        />
        <Experience withSectionHeading={false} />
      </div>
    </div>
  );
}