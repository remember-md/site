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
  title: "Remember — Never Lose Knowledge from AI Sessions Again",
  description: "Your AI forgets everything after each session. Remember captures decisions, people, insights, and lessons into a local second brain that grows with every conversation. Free, open source, private.",
  keywords: ["REMEMBER.md", "AI memory", "second brain", "knowledge management", "claude code plugin", "AI knowledge capture", "local-first", "markdown", "PKM", "obsidian compatible"],
  robots: "index, follow",
  category: "developer tools",
  alternates: {
    canonical: "https://remember.md",
  },
  openGraph: {
    title: "Remember — Never Lose Knowledge from AI Sessions Again",
    description: "Your AI forgets everything after each session. Remember captures decisions, people, insights, and lessons into a local second brain. Free. Local. Open Source.",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1280, height: 720, alt: "Remember — AI Second Brain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gabifratica",
    creator: "@gabifratica",
    title: "Remember — Never Lose Knowledge from AI Sessions Again",
    description: "Your AI forgets everything after each session. Remember captures it all into a local second brain. Free. Open source.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Remember",
  description: "Never lose knowledge from AI sessions again. Remember captures decisions, people, insights, and lessons into a local second brain that grows with every conversation.",
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
