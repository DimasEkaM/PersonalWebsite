import { getProfile } from "@/lib/api";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionSkeleton } from "@/components/ui/Skeleton";
import { Suspense } from "react";
import Link from "next/link";

interface ContactProps {
  withSectionHeading?: boolean;
}

async function ContactContent({ withSectionHeading }: ContactProps) {
  const profile = await getProfile();

  const channels = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedIn },
    ...(profile.resumePdf
      ? [{ label: "Resume (PDF)", href: profile.resumePdf }]
      : []),
  ];

  return (
    <section className="border-t border-line py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {withSectionHeading ? (
          <SectionHeading
            index="06"
            title="Get in touch"
            subtitle="Open to full-time roles, freelance projects, and collaboration."
            align="center"
          />
        ) : null}

        <div className="pt-4 text-center">
          <p className="text-sm text-muted">Best reached at</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-block font-serif text-2xl font-medium text-accent-deep transition-colors hover:text-accent sm:text-3xl"
          >
            {profile.email}
          </a>
          <p className="mt-3 text-sm text-muted">
            {profile.phone} <span aria-hidden="true">·</span> {profile.location}
          </p>
        </div>

        <nav
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-line pt-6 text-sm"
          aria-label="Contact channels"
        >
          {channels.map((channel) => (
            <Link
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              {channel.label}
              <span aria-hidden="true"> ↗</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

export function Contact({ withSectionHeading = true }: ContactProps) {
  return (
    <Suspense fallback={<SectionSkeleton />}>
      <ContactContent withSectionHeading={withSectionHeading} />
    </Suspense>
  );
}
