import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dimas Eka Mahendra for opportunities or collaboration.",
};

export default function ContactPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}