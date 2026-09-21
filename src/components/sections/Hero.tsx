import { getProfile } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { ProfileSkeleton } from "@/components/ui/Skeleton";
import { Suspense } from "react";

const facts = [
  { value: "7+", label: "years of experience" },
  { value: "4", label: "companies" },
  { value: "9+", label: "shipped projects" },
];

async function HeroContent() {
  const profile = await getProfile();

  return (
    <section className="border-b border-line">
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-4 py-24 sm:px-6 lg:px-8">
        <p className="mb-6 inline-flex items-center gap-2 text-sm text-muted">
          <span
            className="inline-block h-2 w-2 shrink-0 rounded-sm bg-accent"
            aria-hidden="true"
          />
          {profile.availability === "open"
            ? "Open to work"
            : "Available to connect"}{" "}
          <span aria-hidden="true">·</span> based in {profile.location.split(",")[0]}
        </p>

        <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
          Dimas{' '}
          <em className="text-accent-deep">Eka</em>{' '}
          Mahendra
        </h1>

        <p className="mt-6 text-xl font-medium text-ink">{profile.title}</p>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {profile.shortSummary}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/portfolio" size="lg">
            See the work
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Get in touch
          </Button>
          {profile.resumePdf ? (
            <Button
              href={profile.resumePdf}
              variant="ghost"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume (PDF)
              <span aria-hidden="true">↗</span>
            </Button>
          ) : null}
        </div>

        <dl className="mt-16 grid w-full max-w-3xl grid-cols-3 divide-x divide-line border-t border-line pt-6">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="pr-6 first:pl-0 sm:px-6 sm:first:pl-0"
            >
              <dt className="sr-only">{fact.label}</dt>
              <dd className="font-serif text-3xl font-medium text-ink">
                {fact.value}
              </dd>
              <dd className="mt-1 text-sm text-muted">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <HeroContent />
    </Suspense>
  );
}
