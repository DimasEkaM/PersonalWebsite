import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Skills",
  description: "Skills and technologies of Dimas Eka Mahendra: frontend, mobile, backend, and tools.",
};

export default function SkillsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies and tools I use to build scalable, reliable, and performant applications."
        />
        <Skills withSectionHeading={false} />
      </div>
    </div>
  );
}