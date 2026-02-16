"use client";

import { motion } from "framer-motion";
import { FileEdit, Download, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileEdit,
    title: "Create REMEMBER.md",
    time: "30 seconds",
    description:
      "Define what to capture, what to skip, and how to organize. Global rules for all projects, or per-project overrides.",
    bullets: [
      "Global: ~/remember/REMEMBER.md for universal preferences",
      "Per-project: ./REMEMBER.md for project-specific rules",
      "Or use our generator below",
    ],
    code: `# REMEMBER.md

## Capture Rules
### Always Capture
- Decisions with rationale
- People and their roles
- Lessons learned

### Never Capture
- Debugging trial-and-error
- Routine code generation`,
  },
  {
    number: "02",
    icon: Download,
    title: "Install Remember",
    time: "1 minute",
    description:
      "Add the plugin to Claude Code. It reads your REMEMBER.md and starts capturing automatically.",
    bullets: [
      "Also works as an OpenClaw skill",
      "Cursor & Copilot support coming soon",
    ],
    code: `# Claude Code
/plugin marketplace add remember-md/marketplace
/plugin install remember

# Initialize your second brain
/remember:init`,
  },
  {
    number: "03",
    icon: Zap,
    title: "Work normally. Knowledge accumulates.",
    time: "Ongoing",
    description:
      "Just work as usual. Knowledge is captured in the background. Your second brain grows automatically.",
    bullets: [
      'Say "remember this: ..." for instant capture',
      "Run /remember:process to extract from past sessions",
      "Your second brain grows automatically",
    ],
    code: `> remember this: we chose Postgres over MongoDB
  because of ACID compliance requirements

✓ Captured to Notes/decision-database.md
✓ Updated Projects/auth-service.md
✓ Linked People/sarah.md`,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-zinc-400 text-lg">
            Three steps. Five minutes. Knowledge that lasts forever.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12"
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
                <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
                <span className="text-xs font-mono text-purple-400 mb-4 inline-block">
                  {step.time}
                </span>
                <p className="text-zinc-400 leading-relaxed max-w-md mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-zinc-500">
                      <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
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
