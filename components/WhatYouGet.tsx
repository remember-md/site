"use client";

import { motion } from "framer-motion";

const fileCards = [
  {
    filename: "People/sarah-chen.md",
    content: `# Sarah Chen
- Role: Backend Lead @ Acme
- Last contact: 2026-02-14

## Interactions
### 2026-02-14
- Discussed auth architecture
- She prefers JWT over OAuth for internal APIs`,
  },
  {
    filename: "Notes/decision-auth.md",
    content: `# Database: Postgres over MongoDB
- Date: 2026-02-12
- Rationale: ACID compliance, row-level security
- Alternatives: MongoDB (rejected: no transactions)
- Decision by: Team consensus`,
  },
  {
    filename: "Journal/2026-02-15.md",
    content: `# 2026-02-15

## Auth Service
- Implemented JWT refresh flow
- Discussed rate limiting with Sarah
- Decision: 100 req/min per user

## Tasks completed
- [x] Set up Postgres migrations`,
  },
  {
    filename: "Tasks/tasks.md",
    content: `## Focus
- [ ] Deploy auth service to staging ⚡
- [ ] Write API docs for /auth endpoints

## Next Up
- [ ] Add rate limiting middleware
- [ ] Set up monitoring alerts`,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhatYouGet() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 relative">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            This is what your brain looks like{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              after one week.
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {fileCards.map((card) => (
            <motion.div
              key={card.filename}
              variants={itemVariants}
              className="code-editor p-3 sm:p-5 hover:border-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="text-xs text-zinc-500 font-mono ml-2">
                  {card.filename}
                </span>
              </div>
              <pre className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
                <code>{card.content}</code>
              </pre>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-base sm:text-lg text-zinc-400 mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-zinc-200 font-medium">47 notes, 12 people tracked, 5 project files</span>{" "}
          — auto-organized into an Obsidian vault from your OpenClaw and Claude Code sessions. Zero manual filing.
        </motion.p>
      </div>
    </section>
  );
}
