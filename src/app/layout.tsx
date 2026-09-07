import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Dimas Eka Mahendra — Fullstack Engineer",
        template: "%s | Dimas Eka Mahendra",
    },
    description:
        "Fullstack Engineer with 7+ years of experience building scalable web and mobile applications across financial tech, mortgage, insurance, e-commerce, and enterprise environments.",
    keywords: [
        "Dimas Eka Mahendra",
        "Fullstack Engineer",
        "Frontend Engineer",
        "React.js",
        "Next.js",
        "Flutter",
        "Portfolio",
        "Indonesia",
    ],
    openGraph: {
        title: "Dimas Eka Mahendra — Fullstack Engineer",
        description:
            "Fullstack Engineer with 7+ years of experience across financial tech, mortgage, insurance, and e-commerce.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dimas Eka Mahendra — Fullstack Engineer",
        description: "Fullstack Engineer with 7+ years of experience building scalable web and mobile applications.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
            <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
