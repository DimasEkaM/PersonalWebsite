import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {year} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </Link>
          <Link
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}