import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "7+", label: "Years experience" },
  { value: "4", label: "Companies" },
  { value: "9+", label: "Projects shipped" },
  { value: "3.85", label: "GPA" },
];

export function About() {
  const contactRows = [
    { label: "Location", value: profile.location },
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          title="About"
          subtitle="Seven years in, still shipping. Here is what I do."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-3">
            {profile.longBio.split("\n\n").map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-md border border-line">
              <div className="px-6 py-2">
                {contactRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 border-b border-line py-3 last:border-b-0"
                  >
                    <span className="text-sm text-muted">{row.label}</span>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="text-sm font-medium text-ink transition-colors hover:text-accent"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-right text-sm font-medium text-ink">
                        {row.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-px border-t-2 border-line bg-line">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-paper px-6 py-5">
                    <div className="font-serif text-3xl font-medium text-accent-deep">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}