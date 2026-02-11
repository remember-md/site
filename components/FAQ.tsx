"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Remember?",
    a: "AI-powered second brain plugin for Claude Code that extracts and organizes knowledge from your coding sessions automatically.",
  },
  {
    q: "Is Remember free?",
    a: "Yes, completely free and open source (MIT license). No subscription, no hidden costs.",
  },
  {
    q: "How does bulk session processing work?",
    a: "Run /brain:process to extract knowledge from past Claude Code session transcripts. It processes JSONL files retroactively, so even sessions before you installed Remember become part of your knowledge base.",
  },
  {
    q: "Does Remember work with Obsidian?",
    a: "Yes. Remember outputs standard Markdown with [[wikilinks]] and YAML frontmatter, fully compatible with Obsidian, Logseq, or any text editor.",
  },
  {
    q: "Does Remember send my data to the cloud?",
    a: "No. Everything stays on your machine in plain Markdown files. No cloud, no sync, no telemetry. Your data is 100% yours.",
  },
  {
    q: "What is Persona.md?",
    a: "An adaptive learning file that evolves with you. It captures your code style, communication patterns, and workflow preferences. Loaded at every session start.",
  },
  {
    q: "Can I query my second brain?",
    a: "Yes. Ask your brain for context across projects, people, decisions, and tasks. Claude uses your organized knowledge to provide relevant context.",
  },
  {
    q: "How is Remember different from Notion AI or Mem.ai?",
    a: "Remember is free, open source, and local-first. No subscription, no vendor lock-in. Your notes are plain Markdown files you own forever.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-white/5"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-medium text-lg pr-4 group-hover:text-zinc-200 transition-colors">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-zinc-400 pb-5 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-32 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-zinc-400 text-lg">
            Everything you need to know about Remember.
          </p>
        </motion.div>

        <div className="border-t border-white/5">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
