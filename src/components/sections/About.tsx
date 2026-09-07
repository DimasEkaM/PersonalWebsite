import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const stats = [
    { label: "Years Experience", value: "7+" },
    { label: "Companies", value: "4" },
    { label: "Projects", value: "9+" },
    { label: "GPA", value: "3.85" },
  ];

  return (
    <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {profile.longBio.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="leading-relaxed text-zinc-600 dark:text-zinc-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                <MapPin className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                {profile.location}
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                <Mail className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-indigo-600"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                <Phone className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                {profile.phone}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="text-3xl font-bold text-indigo-600">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}