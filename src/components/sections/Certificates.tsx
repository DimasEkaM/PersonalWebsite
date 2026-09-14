import Link from "next/link";
import { certificates } from "@/data/certificates";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CertificatesProps {
  withSectionHeading?: boolean;
}

export function Certificates({ withSectionHeading = true }: CertificatesProps) {
  return (
    <section className="border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {withSectionHeading ? (
          <SectionHeading
            index="05"
            title="Certifications"
            subtitle="Continuous learning through verified certifications."
          />
        ) : null}

        <div className="border-t border-line">
          {certificates.map((certificate) => (
            <Link
              key={certificate.id}
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid items-baseline gap-x-4 gap-y-1 border-b border-line py-4 sm:grid-cols-12"
            >
              <span className="font-serif text-lg font-medium text-ink transition-colors group-hover:text-accent sm:col-span-6">
                {certificate.title}
              </span>
              <span className="text-sm text-muted sm:col-span-5">
                {certificate.issuer}
                {certificate.category ? ` · ${certificate.category}` : ""}
              </span>
              <span
                className="text-right text-sm text-muted transition-colors group-hover:text-accent sm:col-span-1"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}