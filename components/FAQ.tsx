"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is REMEMBER.md?",
    a: "A markdown file that tells AI what to remember about you. It defines your capture rules, language preferences, and organization structure. Think of it like .editorconfig — but for AI memory.",
  },
  {
    q: "Is this free?",
    a: "Yes. MIT licensed, free forever. No subscription, no premium tier, no hidden costs. The code is open source on GitHub.",
  },
  {
    q: "Does it work without the plugin?",
    a: "Yes! REMEMBER.md is just a markdown file. Any AI can read it if you include it in context. The plugin automates the capture process, but the file format works anywhere.",
  },
  {
    q: "Where does my data go?",
    a: "Nowhere. Everything stays on your machine as plain markdown files. No cloud, no sync, no telemetry. Your data never leaves your computer.",
  },
  {
    q: "Does it work with Obsidian?",
    a: "Yes, fully compatible. Standard Markdown with [[wikilinks]] and YAML frontmatter. Your second brain works seamlessly as an Obsidian vault with graph view and everything.",
  },
  {
    q: "What's Persona.md?",
    a: "An AI-maintained file that learns your patterns automatically. While REMEMBER.md is your instructions to the AI (prescriptive), Persona.md is what the AI has observed about you (descriptive) — your code style, preferences, and workflow patterns.",
  },
  {
    q: "Can I use it per-project?",
    a: "Yes! Global REMEMBER.md (~/remember/REMEMBER.md) sets universal preferences. Project-level REMEMBER.md (./REMEMBER.md) adds project-specific rules. They cascade — project rules extend global rules.",
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
    <section id="faq" className="py-24 md:py-32 px-6">
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
