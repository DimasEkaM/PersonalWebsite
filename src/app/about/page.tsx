import type {Metadata} from "next";
import {educations} from "@/data/education";
import {profile} from "@/data/profile";
import {SectionHeading} from "@/components/ui/SectionHeading";
import {Button} from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About",
    description: "About Dimas Eka Mahendra — Fullstack Engineer from Indonesia.",
};

export default function AboutPage() {
    return (
        <div className="py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="About Me"
                    subtitle="A closer look at my background, experience, and education."
                />

                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-4">
                        {profile.longBio.split("\n\n").map((paragraph, index) => (
                            <p key={index} className="leading-relaxed text-zinc-600 dark:text-zinc-300">
                                {paragraph}
                            </p>
                        ))}

                        <div className="mt-6 flex flex-wrap gap-4">
                            <Button href="/portfolio">View Portfolio</Button>
                            <Button href="/contact" variant="secondary">
                                Contact Me
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">Education</h2>
                        <div className="space-y-6">
                            {educations.map((education) => (
                                <div
                                    key={education.id}
                                    className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
                                >
                                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                                        {education.institution}
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-indigo-600">{education.degree}</p>
                                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                                        {education.startYear} — {education.endYear}
                                        {education.gpa ? ` · GPA ${education.gpa}` : ""}
                                    </p>
                                    {education.achievements ? (
                                        <ul className="mt-4 space-y-2">
                                            {education.achievements.map((achievement) => (
                                                <li
                                                    key={achievement}
                                                    className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                                                >
                                                    <span
                                                        className="mt-0.5 select-none text-indigo-600"
                                                        aria-hidden="true"
                                                    >
                                                        ▸
                                                    </span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
