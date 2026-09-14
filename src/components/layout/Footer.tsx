import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Fullstack engineer.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </Link>
          <span className="hidden text-sm text-muted sm:inline">
            Built with Next.js &amp; Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}