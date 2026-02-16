"use client";

import { motion } from "framer-motion";
import { FileText, Brain } from "lucide-react";

const rememberMdCode = `# REMEMBER.md

## Capture Rules
### Always Capture
- Architecture decisions with rationale
- People I work with and their roles
- Lessons learned from production issues

### Never Capture
- Debugging trial-and-error
- Routine code generation

## Language
- Romanian for journal, English for technical notes`;

const brainStructure = `~/remember/
├── REMEMBER.md     ← Your rules
├── Persona.md      ← AI learns your patterns
├── Projects/       ← Active work, auto-updated
├── People/         ← Everyone you work with
├── Notes/          ← Decisions, insights, learnings
├── Journal/        ← Daily activity log
├── Tasks/          ← Extracted from conversations
└── Resources/      ← Links, articles, references`;

export default function Solution() {
  return (
    <section id="solution" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Two layers. One system.</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            You define the rules. The plugin builds your second brain.
          </p>
        </motion.div>

        {/* Layer 1: REMEMBER.md */}
        <motion.div
          className="flex flex-col lg:flex-row items-start gap-12 mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300">
                Layer 1 — The Control File
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Tell your AI what matters
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6 max-w-md">
              One file. Any AI reads it. Your capture preferences, language settings,
              and organization rules — everywhere.
            </p>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span><strong className="text-zinc-300">Global</strong> REMEMBER.md → all projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span><strong className="text-zinc-300">Project</strong> REMEMBER.md → project-specific additions</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="code-editor p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="text-xs text-zinc-600 font-mono ml-2">REMEMBER.md</span>
              </div>
              <pre className="text-sm text-zinc-300 font-mono leading-relaxed overflow-x-auto">
                <code>{rememberMdCode}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Layer 2: Second Brain */}
        <motion.div
          className="flex flex-col lg:flex-row-reverse items-start gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Brain className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300">
                Layer 2 — The Result
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Knowledge that grows with you
            </h3>
            <p className="text-zinc-400 leading-relaxed max-w-md">
              Every session feeds your brain. Query it anytime. Nothing gets lost.
              Plain markdown files — works with Obsidian, VS Code, or any editor.
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="code-editor p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="text-xs text-zinc-600 font-mono ml-2">~/remember/</span>
              </div>
              <pre className="text-sm text-zinc-300 font-mono leading-relaxed overflow-x-auto">
                <code>{brainStructure}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
