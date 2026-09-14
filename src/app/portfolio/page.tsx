import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Projects built by Dimas Eka Mahendra across insurance, banking, e-commerce, and enterprise applications.",
};

export default function PortfolioPage() {
  const categories = ["web", "mobile", "fullstack"] as const;
  const categoryLabels: Record<(typeof categories)[number], string> = {
    web: "Web",
    mobile: "Mobile",
    fullstack: "Fullstack",
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Portfolio"
          subtitle="Projects I've contributed to across insurance, banking, e-commerce, and enterprise environments."
        />

        <div className="space-y-16">
          {categories.map((category) => {
            const items = projects.filter((p) => p.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <h2 className="mb-6 font-serif text-2xl font-medium text-ink">
                  {categoryLabels[category]}
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}