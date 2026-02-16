"use client";

import { motion } from "framer-motion";
import { Check, Clock, FileText } from "lucide-react";

const platforms = [
  {
    name: "Claude Code",
    method: "Plugin (fully automated)",
    status: "available" as const,
    icon: "⚡",
  },
  {
    name: "OpenClaw",
    method: "Skill",
    status: "soon" as const,
    icon: "🧠",
  },
  {
    name: "Cursor",
    method: "Via rules",
    status: "soon" as const,
    icon: "✏️",
  },
  {
    name: "Any LLM",
    method: "Include REMEMBER.md in context",
    status: "manual" as const,
    icon: "🤖",
  },
];

function StatusBadge({ status }: { status: "available" | "soon" | "manual" }) {
  if (status === "available") {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
        <Check className="w-3.5 h-3.5" />
        Available
      </span>
    );
  }
  if (status === "soon") {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-400">
        <Clock className="w-3.5 h-3.5" />
        Coming soon
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-400">
      <FileText className="w-3.5 h-3.5" />
      Works now
    </span>
  );
}

export default function Platforms() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Works everywhere</h2>
          <p className="text-zinc-400 text-lg">
            REMEMBER.md is just a markdown file. Any AI can read it.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-2xl flex-shrink-0">{platform.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-white">{platform.name}</h3>
                  <StatusBadge status={platform.status} />
                </div>
                <p className="text-sm text-zinc-500 mt-0.5">{platform.method}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
