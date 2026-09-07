import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/data/certificates";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CertificatesProps {
  withSectionHeading?: boolean;
}

export function Certificates({ withSectionHeading = true }: CertificatesProps) {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {withSectionHeading ? (
          <SectionHeading
            title="Certifications"
            subtitle="Continuous learning through verified certifications."
          />
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          {certificates.map((certificate) => (
            <Link
              key={certificate.id}
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500"
            >
              <Award
                className="mt-0.5 h-6 w-6 shrink-0 text-indigo-600"
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                  {certificate.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {certificate.issuer}
                  {certificate.category ? ` · ${certificate.category}` : ""}
                </p>
              </div>
              <ExternalLink
                className="mt-1 h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-indigo-600"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}