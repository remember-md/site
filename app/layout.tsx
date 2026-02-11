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
  title: "Remember — Your AI-Powered Second Brain",
  description: "Extract knowledge from every Claude Code session—past and present. Automatically organized. Learns your patterns. Query for context across all your work. Zero manual organizing.",
  keywords: ["claude code", "second brain", "AI memory", "obsidian", "markdown", "plugin", "PARA", "Zettelkasten", "knowledge management", "PKM", "session processing"],
  openGraph: {
    title: "Remember — Your AI-Powered Second Brain",
    description: "Extract knowledge from Claude Code sessions. Auto-organized, adaptive, queryable. Local-first and open source.",
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
