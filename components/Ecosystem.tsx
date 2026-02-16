"use client";

import { motion } from "framer-motion";

const standards = [
  {
    name: "CLAUDE.md",
    purpose: "How to work with me",
    scope: "Per-project instructions",
    highlight: false,
  },
  {
    name: "AGENTS.md",
    purpose: "How agents should behave",
    scope: "Agent behavior rules",
    highlight: false,
  },
  {
    name: "REMEMBER.md",
    purpose: "How to remember for me",
    scope: "Knowledge capture & processing",
    highlight: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Ecosystem() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Standards for the AI era
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Simple markdown files that define how AI tools work with you.
            REMEMBER.md completes the picture.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {standards.map((standard) => (
            <motion.div
              key={standard.name}
              variants={itemVariants}
              className={`relative p-6 rounded-xl border transition-all duration-300 ${
                standard.highlight
                  ? "border-purple-500/30 bg-purple-500/[0.05] md:-translate-y-2 shadow-lg shadow-purple-500/5"
                  : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
              }`}
            >
              {standard.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs text-purple-300 font-medium">
                  New standard
                </div>
              )}

              <div className="font-mono text-lg font-bold mb-3">
                <span
                  className={
                    standard.highlight
                      ? "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                      : "text-zinc-300"
                  }
                >
                  {standard.name}
                </span>
              </div>

              <p className="text-white font-medium mb-2">{standard.purpose}</p>
              <p className="text-zinc-500 text-sm">{standard.scope}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
