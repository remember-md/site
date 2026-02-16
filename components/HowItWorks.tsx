"use client";

import { motion } from "framer-motion";
import { FileEdit, Cpu, FolderOpen } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileEdit,
    title: "Create REMEMBER.md",
    description: "Add a REMEMBER.md file to your project or brain root. Define what to capture, what to skip, and how to organize.",
    code: `# REMEMBER.md

## Capture Rules
### Always Capture
- Decisions with rationale
- Meeting notes and attendees

### Never Capture
- Debugging sessions
- Casual greetings`,
  },
  {
    number: "02",
    icon: Cpu,
    title: "Your AI reads it",
    description: "When capturing knowledge, your AI tool checks REMEMBER.md. Your rules are applied before defaults — your preferences always win.",
    code: `# What happens under the hood:

1. AI tool detects knowledge worth saving
2. Checks for REMEMBER.md at project root
3. Parses your capture rules
4. Applies YOUR rules before defaults
5. Processes content accordingly`,
  },
  {
    number: "03",
    icon: FolderOpen,
    title: "Knowledge organized your way",
    description: "Content is routed, formatted, and tagged per your instructions. Works with any compatible tool — no vendor lock-in.",
    code: `# Result:

second-brain/
├── Decisions/
│   └── auth-database-choice.md
├── Projects/
│   └── auth-service/
│       └── auth-service.md
├── People/
│   └── sarah-chen.md
└── Journal/
    └── 2025-02-15.md`,
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
            Three steps. Zero friction. Any AI tool.
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
