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
  title: "REMEMBER.md — The Open Standard for AI Memory",
  description: "A single markdown file that tells AI tools what to capture, how to process it, and where to store it. Open standard. Pure markdown. Any AI tool.",
  keywords: ["REMEMBER.md", "AI memory", "open standard", "markdown", "claude code", "AI knowledge", "second brain", "plugin", "knowledge management", "PKM", "specification"],
  robots: "index, follow",
  category: "developer tools",
  alternates: {
    canonical: "https://remember.md",
  },
  openGraph: {
    title: "REMEMBER.md — The Open Standard for AI Memory",
    description: "A single markdown file that tells AI tools what to capture, how to process it, and where to store it. Open standard. Pure markdown. Any AI tool.",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1280, height: 720, alt: "REMEMBER.md — The Open Standard for AI Memory" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gabifratica",
    creator: "@gabifratica",
    title: "REMEMBER.md — The Open Standard for AI Memory",
    description: "A single markdown file that tells AI tools what to capture, how to process it, and where to store it.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "REMEMBER.md",
  description: "The open standard for AI memory. A single markdown file that tells AI tools what to capture, how to process it, and where to store it.",
  url: "https://remember.md",
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
