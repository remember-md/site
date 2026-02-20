"use client";

import { motion } from "framer-motion";
import { Download, MessageSquare, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install",
    description:
      "One command. Works with OpenClaw and Claude Code. Creates your knowledge base and connects to your AI tool.",
    code: `# OpenClaw:
openclaw plugins install @remember-md/remember

# Claude Code:
/plugin install remember

# Initialize your brain:
/remember:init`,
  },
  {
    number: "02",
    icon: Search,
    title: "Process your history",
    description:
      "Go back in time. Extract decisions, people, and insights from months of past AI sessions you thought were lost.",
    code: `> /remember:process

Found 47 unprocessed sessions.

✓ Extracted People/sarah-chen.md
✓ Extracted Notes/decision-database.md
✓ Extracted 12 journal entries
✓ Updated Tasks/tasks.md (+8 tasks)
✓ Updated Persona.md (learned your patterns)`,
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Keep capturing",
    description:
      "Say \"remember this\" going forward. Your brain grows with every session, across every tool.",
    code: `> remember this: we chose Postgres over MongoDB
  because of ACID compliance

✓ Captured to Notes/decision-database.md
✓ Updated Projects/auth-service.md
✓ Linked People/sarah.md`,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 relative">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Three steps.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Months of knowledge recovered.
            </span>
          </h2>
        </motion.div>

        <div className="space-y-12 sm:space-y-20 md:space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col lg:flex-row items-start gap-6 sm:gap-10 lg:gap-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl sm:text-5xl font-bold text-white/15 font-mono">
                    {step.number}
                  </span>
                  <step.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>

              <div className="flex-1 w-full">
                <div className="code-editor p-3 sm:p-5">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <pre className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed overflow-x-auto">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
