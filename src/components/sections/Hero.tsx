import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          Open to opportunities
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
          {profile.name?.split(".")[0]}{" "}
          <span className="text-indigo-600">Karsoma</span>
        </h1>

        <p className="mt-4 text-xl font-medium text-zinc-700 dark:text-zinc-200">
          {profile.title}
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {profile.shortSummary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/portfolio" size="lg">
            View Portfolio
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Me
          </Button>
          {profile.resumePdf ? (
            <Button
              href={profile.resumePdf}
              variant="ghost"
              size="lg"
              download
            >
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          ) : null}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-indigo-400"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-indigo-400"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}