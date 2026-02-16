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
  title: "Remember — AI-Powered Second Brain That Builds Itself",
  description: "Your AI forgets everything after each session. Remember captures decisions, people, insights, and lessons into a local PARA-based second brain that grows with every conversation. Free, open source, Obsidian compatible.",
  keywords: ["AI second brain", "PARA method", "Zettelkasten", "PKM", "personal knowledge management", "AI memory", "knowledge capture", "claude code plugin", "local-first", "markdown", "obsidian compatible", "REMEMBER.md"],
  robots: "index, follow",
  category: "developer tools",
  alternates: {
    canonical: "https://remember.md",
  },
  openGraph: {
    title: "Remember — AI-Powered Second Brain That Builds Itself",
    description: "Your AI forgets everything after each session. Remember captures decisions, people, insights, and lessons into a local PARA-based second brain. Free. Local. Open Source.",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1280, height: 720, alt: "Remember — AI Second Brain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gabifratica",
    creator: "@gabifratica",
    title: "Remember — AI-Powered Second Brain That Builds Itself",
    description: "Your AI forgets everything after each session. Remember captures it all into a local PARA-based second brain. Free. Open source.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Remember",
  description: "AI-powered second brain that builds itself. Remember captures decisions, people, insights, and lessons from AI sessions into a PARA + Zettelkasten knowledge base. Local, free, Obsidian compatible.",
  url: "https://remember.md",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
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
