import type {Metadata} from "next";
import {educations} from "@/data/education";
import {profile} from "@/data/profile";
import {SectionHeading} from "@/components/ui/SectionHeading";
import {Button} from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About",
    description: "About Dimas Eka Mahendra, Fullstack Engineer from Indonesia.",
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
                            <p key={index} className="leading-relaxed text-muted">
                                {paragraph}
                            </p>
                        ))}

                        <div className="mt-6 flex flex-wrap gap-4">
                            <Button href="/portfolio">See the work</Button>
                            <Button href="/contact" variant="secondary">
                                Get in touch
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-6 font-serif text-2xl font-medium text-ink">
                            Education
                        </h2>
                        <div className="border-t border-line">
                            {educations.map((education) => (
                                <div key={education.id} className="border-b border-line py-6">
                                    <h3 className="font-serif text-xl font-medium text-ink">
                                        {education.institution}
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-accent-deep">
                                        {education.degree}
                                    </p>
                                    <p className="mt-1 text-sm text-muted">
                                        {education.startYear} to {education.endYear}
                                        {education.gpa ? ` · GPA ${education.gpa}` : ""}
                                    </p>
                                    {education.achievements ? (
                                        <ul className="mt-4 list-disc space-y-2 pl-4 marker:text-accent">
                                            {education.achievements.map((achievement) => (
                                                <li key={achievement} className="text-sm leading-relaxed text-muted">
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