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
  title: "Remember — Your AI Agent's Memory",
  description: "A deterministic second-brain plugin for Claude Code. Captures decisions, ideas, and context automatically into local Markdown files.",
  keywords: ["claude code", "second brain", "AI memory", "obsidian", "markdown", "plugin"],
  openGraph: {
    title: "Remember — Your AI Agent's Memory",
    description: "A deterministic second-brain plugin for Claude Code.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
