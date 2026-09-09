import Link from "next/link";
import {FileText, Mail, MapPin, Phone} from "lucide-react";
import {GithubIcon, LinkedinIcon} from "@/components/icons/SocialIcons";
import {profile} from "@/data/profile";
import {SectionHeading} from "@/components/ui/SectionHeading";
import {Button} from "@/components/ui/Button";

interface ContactProps {
    withSectionHeading?: boolean;
}

export function Contact({withSectionHeading = true}: ContactProps) {
    const contactItems = [
        {
            label: "Email",
            value: profile.email,
            href: `mailto:${profile.email}`,
            icon: Mail,
        },
        {
            label: "Phone",
            value: profile.phone,
            href: `tel:${profile.phone.replace(/\s/g, "")}`,
            icon: Phone,
        },
        {
            label: "Location",
            value: profile.location,
            href: undefined,
            icon: MapPin,
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/dimasekam",
            href: profile.linkedIn,
            icon: LinkedinIcon,
        },
        {
            label: "GitHub",
            value: "github.com/DimasEkaM",
            href: profile.github,
            icon: GithubIcon,
        },
    ];

    return (
        <section className="py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {withSectionHeading ? (
                    <SectionHeading
                        title="Get in Touch"
                        subtitle="I'm open to fulltime opportunities, freelance projects, and collaboration. Feel free to reach out."
                        align="center"
                    />
                ) : null}

                <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
                    {contactItems.map((item) => {
                        const Icon = item.icon;
                        const content = (
                            <>
                                <Icon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                                <div>
                                    <div className="text-sm text-zinc-500 dark:text-zinc-400">{item.label}</div>
                                    <div className="font-medium text-zinc-900 dark:text-zinc-50">{item.value}</div>
                                </div>
                            </>
                        );
                        return item.href ? (
                            <Link
                                key={item.label}
                                href={item.href}
                                target={item.label === "Email" || item.label === "Phone" ? undefined : "_blank"}
                                rel={
                                    item.label === "Email" || item.label === "Phone" ? undefined : "noopener noreferrer"
                                }
                                className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500"
                            >
                                {content}
                            </Link>
                        ) : (
                            <div
                                key={item.label}
                                className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
                            >
                                {content}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 flex justify-center">
                    {profile.resumePdf ? (
                        <Button href={profile.resumePdf} size="lg" target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4" />
                            Download Resume
                        </Button>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
