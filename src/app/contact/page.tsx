import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dimas Eka Mahendra for opportunities or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Contact withSectionHeading={true} />
      </div>
    </div>
  );
}