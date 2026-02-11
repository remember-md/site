"use client";

import { motion } from "framer-motion";
import { Terminal, Workflow, BrainCircuit } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Terminal,
    title: "Install & Initialize",
    description: "Clone the plugin and run /brain:init to create your PARA structure. Persona.md starts learning from session one.",
    code: `git clone https://github.com/remember-md/remember.git \\\n  ~/.claude/plugins/remember\n\n# In Claude Code:\n/brain:init`,
  },
  {
    number: "02",
    icon: Workflow,
    title: "Process Past Sessions",
    description: "Extract knowledge from old Claude sessions in bulk. Runs retroactively—your entire history becomes queryable.",
    code: `# Process unprocessed sessions:\n/brain:process\n\n# Result: Projects, People, Notes,\n# Tasks, Journal entries auto-created\n# from past transcripts`,
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Capture Live & Query",
    description: "Say 'remember this: ...' for instant capture. Query your brain anytime for context across all your work.",
    code: `> "Remember: switched to Postgres\n   for row-level security"\n\n# Later:\n> "What did we decide about auth?"\n\n# Brain returns context from\n# Projects/auth/ automatically`,
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
