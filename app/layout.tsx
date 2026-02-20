import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://remember.md"),
  title: "Remember.md — Second Brain Plugin for OpenClaw & Claude Code",
  description: "Remember.md is a second brain plugin for OpenClaw and Claude Code. It organizes decisions, people, projects, and insights from your AI coding sessions into a structured, Obsidian-compatible knowledge base. Portable across AI tools. Free and open source.",
  keywords: ["OpenClaw plugin", "OpenClaw second brain", "OpenClaw knowledge base", "best OpenClaw plugins", "Claude Code plugin", "Claude Code second brain", "AI second brain", "AI knowledge base", "second brain for developers", "Obsidian knowledge base", "portable AI brain", "local-first", "PARA method", "Zettelkasten", "markdown knowledge base", "AI coding assistant"],
  robots: "index, follow",
  category: "developer tools",
  alternates: {
    canonical: "https://remember.md",
  },
  openGraph: {
    title: "Remember.md — Second Brain for OpenClaw & Claude Code",
    description: "Second brain plugin for OpenClaw and Claude Code. Organize knowledge from past and future AI sessions into a portable, Obsidian-compatible knowledge base. Free and open source.",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1280, height: 720, alt: "Remember.md — Second Brain Plugin for OpenClaw and Claude Code" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gabifratica",
    creator: "@gabifratica",
    title: "Remember.md — Second Brain for OpenClaw & Claude Code",
    description: "Second brain plugin for OpenClaw and Claude Code. Organize knowledge from AI sessions into a portable Obsidian vault. Free. Open source.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Remember.md",
  alternateName: "Remember",
  description: "Remember.md is a second brain plugin for OpenClaw and Claude Code that organizes decisions, people, projects, and insights from AI coding sessions into a structured, Obsidian-compatible knowledge base. It supports processing historical sessions retroactively and connects knowledge using PARA methodology with wikilinks.",
  url: "https://remember.md",
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "AI Coding Plugin",
  operatingSystem: "macOS, Linux, Windows",
  softwareRequirements: "OpenClaw or Claude Code",
  releaseNotes: "Full OpenClaw and Claude Code support. Second brain with retroactive session processing.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: { "@type": "Person", name: "Gabriel Fratica", url: "https://twitter.com/gabifratica" },
  license: "https://opensource.org/licenses/MIT",
  isAccessibleForFree: true,
  keywords: "OpenClaw plugin, Claude Code plugin, AI second brain, knowledge base, Obsidian, developer tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090b] text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
