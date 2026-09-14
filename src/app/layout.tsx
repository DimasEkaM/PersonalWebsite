import type {Metadata} from "next";
import {Fraunces, Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";

const fraunces = Fraunces({
    variable: "--font-fraunces",
    subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta",
    subsets: ["latin"],
});

const themeInit = `(function(){try{var s=localStorage.getItem("theme");var d=s? s==="dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export const metadata: Metadata = {
    title: {
        default: "Dimas Eka Mahendra | Fullstack Engineer",
        template: "%s | Dimas Eka Mahendra",
    },
    description:
        "Fullstack Engineer with 7+ years of experience building scalable web and mobile applications across financial tech, banking, insurance, e-commerce, and enterprise environments.",
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
        title: "Dimas Eka Mahendra | Fullstack Engineer",
        description:
            "Fullstack Engineer with 7+ years of experience across financial tech, banking, insurance, and e-commerce.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dimas Eka Mahendra | Fullstack Engineer",
        description: "Fullstack Engineer with 7+ years of experience building scalable web and mobile applications.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
            <head>
                <script dangerouslySetInnerHTML={{__html: themeInit}} />
            </head>
            <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}