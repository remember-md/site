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
  title: "Remember — Your AI-Powered Second Brain",
  description: "Extract knowledge from every Claude Code session—past and present. Automatically organized. Learns your patterns. Query for context across all your work. Zero manual organizing.",
  keywords: ["claude code", "second brain", "AI memory", "obsidian", "markdown", "plugin", "PARA", "Zettelkasten", "knowledge management", "PKM", "session processing"],
  robots: "index, follow",
  category: "developer tools",
  alternates: {
    canonical: "https://remember.md",
  },
  openGraph: {
    title: "Remember — Your AI-Powered Second Brain",
    description: "Extract knowledge from Claude Code sessions. Auto-organized, adaptive, queryable. Local-first and open source.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gabifratica",
    creator: "@gabifratica",
    title: "Remember — Your AI-Powered Second Brain",
    description: "Extract knowledge from Claude Code sessions. Auto-organized, adaptive, queryable. Local-first and open source.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Remember",
  description: "AI-powered second brain for Claude Code. Extract knowledge from sessions into auto-organized Markdown.",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://remember.md",
  downloadUrl: "https://github.com/remember-md/remember",
  softwareVersion: "1.0",
  author: { "@type": "Person", name: "Gabriel Fratica", url: "https://twitter.com/gabifratica" },
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
