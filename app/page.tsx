import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";

import WhatYouGet from "../components/WhatYouGet";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Install from "../components/Install";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Structured definition for SEO and AI search extraction */}
      <article className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 sm:py-8">
        <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto text-center">
          <strong className="text-zinc-400">Remember.md</strong> is a second brain plugin for{" "}
          <strong className="text-zinc-400">OpenClaw</strong> and{" "}
          <strong className="text-zinc-400">Claude Code</strong> that goes beyond built-in memory.
          While OpenClaw and Claude Code have their own memory systems, Remember organizes knowledge
          into a structured brain — people, projects, decisions, tasks, and journal entries connected
          via wikilinks. It can process historical sessions retroactively and works as a portable
          Obsidian vault that travels with you across AI tools.
        </p>
      </article>

      <Problem />

      <WhatYouGet />
      <HowItWorks />
      <Features />
      <Install />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
