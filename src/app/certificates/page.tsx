import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Certificates } from "@/components/sections/Certificates";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Certifications earned by Dimas Eka Mahendra from Dicoding.",
};

export default function CertificatesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Continuous learning through verified certifications from Dicoding."
        />
        <Certificates withSectionHeading={false} />
      </div>
    </div>
  );
}