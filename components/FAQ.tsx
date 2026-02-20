"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Remember.md?",
    a: "Remember.md is a second brain plugin for OpenClaw and Claude Code. Unlike built-in memory systems that store flat key-value pairs, Remember organizes decisions, people, projects, and tasks into a structured Obsidian-compatible knowledge base with wikilinks, YAML frontmatter, and cross-references. It works as both an OpenClaw plugin and a Claude Code plugin.",
  },
  {
    q: "How do I install Remember on OpenClaw?",
    a: "Run 'openclaw plugins install @remember-md/remember' in your terminal, then start a new session and run /remember:init. The plugin registers hooks that load your Persona at session start and agent tools for brain dumps and index lookups. Your second brain is ready in under 60 seconds.",
  },
  {
    q: "How do I install Remember on Claude Code?",
    a: "Run '/plugin marketplace add remember-md/marketplace' followed by '/plugin install remember' in Claude Code, then run /remember:init. The plugin uses Claude Code hooks to load your Persona at session start and inject brain context when you say 'remember this'. Same second brain, same knowledge base.",
  },
  {
    q: "Can Remember process old sessions?",
    a: "Yes. Remember can process historical OpenClaw and Claude Code sessions retroactively. Run /remember:process to scan past sessions and extract decisions, people, tasks, and insights into your knowledge base. This works on sessions from months ago.",
  },
  {
    q: "How does Remember help my AI learn my coding patterns?",
    a: "Remember maintains a Persona.md file in your second brain that evolves over time. It captures your code style, naming conventions, review preferences, and communication patterns. Persona.md is loaded automatically at the start of every OpenClaw or Claude Code session, so your AI knows how you work without being told each time.",
  },
  {
    q: "How does Remember track my work history across sessions?",
    a: "Remember captures work history into structured categories: Journal entries for daily activity, Projects for active work with decision logs, People for contacts and interactions, Notes for architectural decisions, and Tasks for priorities. All files use wikilinks to cross-reference each other, creating a connected work history you can browse in Obsidian.",
  },
  {
    q: "How is Remember different from OpenClaw memory or Claude MEMORY.md?",
    a: "Built-in memory systems store flat notes or key-value pairs locked inside one tool. Remember builds a structured second brain — People, Projects, Decisions, Tasks, Journal — all connected via wikilinks and browsable in Obsidian. It can process past sessions retroactively, and your brain is portable across AI tools instead of locked into one vendor.",
  },
  {
    q: "Is Remember free?",
    a: "Yes. Remember.md is MIT licensed, completely free, and open source. There are no paid tiers, no cloud services, and no usage limits.",
  },
  {
    q: "Where does Remember store my data?",
    a: "All data stays on your local machine as plain markdown files. Remember has no cloud component, no telemetry, and no tracking. The default location is ~/remember. You can version control it with git and open it in Obsidian, VS Code, or any text editor.",
  },
  {
    q: "Does Remember work with Obsidian?",
    a: "Yes. Remember creates Obsidian-native markdown with wikilinks, YAML frontmatter, and proper folder structure. Your knowledge base is a fully functional Obsidian vault with graph view, backlinks, and search. No Obsidian plugins required.",
  },
  {
    q: "Can I use Remember with both OpenClaw and Claude Code?",
    a: "Yes. Remember uses one shared second brain across all AI tools. Install the OpenClaw plugin and the Claude Code plugin pointing to the same brain directory. Both tools read and write to the same markdown files, so knowledge captured in OpenClaw is available in Claude Code and vice versa. One brain, every tool.",
  },
  {
    q: "How does Remember organize knowledge?",
    a: "Remember uses the PARA method (Projects, Areas, Notes, Resources) combined with Zettelkasten-style linked thinking. Every note connects to related people, projects, and decisions via wikilinks. The structure includes People, Projects, Notes, Journal, Tasks, Areas, Resources, and Inbox directories.",
  },
  {
    q: "Can I customize what gets captured?",
    a: "Yes. Add a REMEMBER.md file to any project to control capture rules, routing, templates, and language preferences. Remember supports cascading configuration: global rules in ~/remember/REMEMBER.md and project-specific overrides in your repo's REMEMBER.md.",
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
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
      >
        <span className="text-white font-medium text-base sm:text-lg pr-4 group-hover:text-zinc-200 transition-colors">
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
            <p className="text-zinc-400 pb-4 sm:pb-5 text-sm sm:text-base leading-relaxed">{faq.a}</p>
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
    <section id="faq" className="py-16 md:py-24 px-6 sm:px-8 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Questions</h2>
        </motion.div>

        <div className="border-t border-white/5 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
