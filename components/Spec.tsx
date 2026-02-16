"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText } from "lucide-react";

interface SpecSection {
  name: string;
  purpose: string;
  example: string;
}

const specSections: SpecSection[] = [
  {
    name: "Capture Rules",
    purpose: "What to save, what to skip",
    example: `## Capture Rules

### Always Capture
- Decisions with rationale
- Meeting notes and attendees
- Architecture changes
- New people mentioned

### Never Capture
- Debugging sessions
- Casual greetings
- Temporary workarounds`,
  },
  {
    name: "Processing",
    purpose: "How to route, format, tag content",
    example: `## Processing

### Routing
- Technical decisions → Decisions/
- People info → People/
- Project updates → Projects/{project}/

### Tags
- Always add: source, date
- Auto-tag: #decision, #meeting, #architecture`,
  },
  {
    name: "Custom Types",
    purpose: "Define entity types beyond defaults",
    example: `## Custom Types

### Recipe
- fields: ingredients, steps, source
- folder: Resources/Recipes/
- template: recipe-template

### Book Note
- fields: author, rating, key-takeaways
- folder: Resources/Books/`,
  },
  {
    name: "Connections",
    purpose: "Auto-linking rules, people context",
    example: `## Connections

### Auto-Link Rules
- People mentioned → [[People/{name}]]
- Projects referenced → [[Projects/{project}]]
- Decisions → link to related project

### People Context
- Track: role, company, last interaction
- Auto-update on new mentions`,
  },
  {
    name: "Language",
    purpose: "Multilingual preferences",
    example: `## Language

### Preferences
- Primary: English
- Notes in: English
- Accept input in: English, Romanian
- Code comments: English only`,
  },
  {
    name: "Templates",
    purpose: "Override default note templates",
    example: `## Templates

### Decision
\`\`\`
---
type: decision
date: {date}
status: active
---
# {title}

## Context
## Decision
## Consequences
\`\`\`

### Meeting Note
\`\`\`
---
type: meeting
date: {date}
attendees: []
---
# {title}

## Agenda
## Notes
## Action Items
\`\`\``,
  },
  {
    name: "Notes",
    purpose: "Free-form context for your AI",
    example: `## Notes

I prefer concise notes over verbose ones.
When in doubt, capture it — I can always delete later.
I use Obsidian as my primary viewer.
My projects follow a monorepo structure.`,
  },
];

function SpecItem({ section, index }: { section: SpecSection; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`border border-white/5 rounded-lg overflow-hidden transition-colors ${
        open ? "bg-white/[0.03] border-purple-500/20" : "bg-white/[0.01] hover:bg-white/[0.02]"
      }`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-zinc-600 w-6">
            0{index + 1}
          </span>
          <div>
            <span className="font-mono font-semibold text-white group-hover:text-purple-300 transition-colors">
              ## {section.name}
            </span>
            <span className="text-zinc-500 text-sm ml-3 hidden sm:inline">
              → {section.purpose}
            </span>
          </div>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-zinc-500 flex-shrink-0" />
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
            <div className="px-5 pb-5">
              <p className="text-zinc-400 text-sm mb-4 pl-10">
                {section.purpose}
              </p>
              <div className="code-editor p-4 ml-10">
                <pre className="text-sm text-zinc-300 font-mono leading-relaxed overflow-x-auto">
                  <code>{section.example}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Spec() {
  return (
    <section id="spec" className="py-32 px-6 relative">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-purple-400" />
            <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
              v1.0
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Specification
          </h2>
          <p className="text-zinc-400 text-lg">
            Seven optional sections. Pure markdown. No schemas.
          </p>
        </motion.div>

        <div className="space-y-3">
          {specSections.map((section, i) => (
            <SpecItem key={section.name} section={section} index={i} />
          ))}
        </div>

        <motion.div
          className="mt-8 p-4 rounded-lg border border-white/5 bg-white/[0.02] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-zinc-500 text-sm">
            All sections optional. Empty file = defaults. No breaking changes guaranteed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
