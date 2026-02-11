"use client";

import { motion } from "framer-motion";
import { Terminal, Workflow, BrainCircuit } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Terminal,
    title: "Install the plugin",
    description: "One command sets up the Claude Code hook. It watches for trigger phrases like 'remember this' or 'decision:'.",
    code: `claude hooks add \\\n  post_tool_use \\\n  "remember-capture" \\\n  "npx remember-md@latest capture"`,
  },
  {
    number: "02",
    icon: Workflow,
    title: "Work normally",
    description: "Keep using Claude Code as you always do. When you make decisions or have insights, just mention them naturally.",
    code: `> "Remember: we're using Postgres\n   for auth because it supports\n   row-level security out of the box"`,
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Your second brain builds itself",
    description: "Decisions, ideas, and context are automatically captured into organized Markdown files with wikilinks.",
    code: `second-brain/\n├── Decisions/\n│   └── auth-database-choice.md\n├── Projects/\n│   └── auth-service.md\n└── Journal/\n    └── 2025-01-15.md`,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 relative">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-zinc-400 text-lg">
            Three steps. Zero friction.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col lg:flex-row items-start gap-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-white/5 font-mono">
                    {step.number}
                  </span>
                  <step.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>

              <div className="flex-1 w-full">
                <div className="code-editor p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <pre className="text-sm text-zinc-300 font-mono leading-relaxed overflow-x-auto">
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
