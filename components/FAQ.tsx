"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is REMEMBER.md?",
    a: "REMEMBER.md is an open standard — a single markdown file that tells AI tools what to capture, how to process it, and where to store it. Think of it like .editorconfig for AI memory. Any AI tool can read and respect it.",
  },
  {
    q: "Is this just for the Remember plugin?",
    a: "No. REMEMBER.md is an open standard that any AI tool can implement. The Remember plugin for Claude Code is the reference implementation — the first tool built on the standard — but the spec is designed to be universal.",
  },
  {
    q: "What's the difference between REMEMBER.md and Persona.md?",
    a: "REMEMBER.md is prescriptive — it's YOUR instructions to the AI about what to capture and how to organize it. Persona.md is descriptive — it's what the AI has observed and learned about you over time. You write REMEMBER.md; the AI writes Persona.md.",
  },
  {
    q: "Is Remember (the plugin) free?",
    a: "Yes. MIT licensed, free forever. No subscription, no hidden costs, no premium tier. The code is open source on GitHub.",
  },
  {
    q: "Can I use REMEMBER.md without the plugin?",
    a: "Absolutely. REMEMBER.md is just a markdown file — it's a standard, not a product. Any AI tool can parse and implement it. The spec is simple enough to add support in under 50 lines of code.",
  },
  {
    q: "What if my AI tool doesn't support REMEMBER.md?",
    a: "You can request support from the tool maker, or contribute an implementation yourself. The spec is designed to be trivial to parse — it's just markdown headers and content.",
  },
  {
    q: "Will REMEMBER.md break between versions?",
    a: "No. We guarantee no breaking changes. The spec is additive only — new sections may be added, but existing sections will never change their meaning or be removed.",
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
            About the standard and the plugin.
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
