"use client";

import { motion } from "framer-motion";
import { Fingerprint, Brain, Shield, BookOpen, Github, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "100% Deterministic Capture",
    description: "Hooks-based architecture. Every capture is inspectable, reproducible, and predictable. No black-box AI guessing.",
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    icon: Brain,
    title: "Adaptive Persona Learning",
    description: "Persona.md evolves with you — learning your code style, communication patterns, and workflow preferences automatically.",
    gradient: "from-purple-400 to-violet-400",
  },
  {
    icon: Shield,
    title: "Local-First Privacy",
    description: "Everything stays on your machine in plain Markdown. No cloud, no sync, no telemetry. Your data, your rules.",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: BookOpen,
    title: "Obsidian Compatible",
    description: "Standard Markdown with [[wikilinks]] and YAML frontmatter. Works seamlessly with Obsidian, Logseq, or any editor.",
    gradient: "from-pink-400 to-rose-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ReferenceImplementation() {
  return (
    <section id="plugin" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-sm text-purple-300 mb-6">
            Reference Implementation
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Remember for Claude Code
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            The first tool built on the REMEMBER.md standard. Open source, MIT licensed, always free.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`} style={{ opacity: 0.15 }}>
                <feature.icon className="w-6 h-6" style={{ opacity: 1 }} />
              </div>
              <div className="inline-flex p-3 rounded-lg mb-4 absolute top-6 left-6">
                <feature.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-semibold mb-2 mt-8">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Install block */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="code-editor p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="text-xs text-zinc-600 font-mono ml-2">install</span>
            </div>
            <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-zinc-500"># Add marketplace and install</span>{"\n"}
                <span className="text-emerald-400">/plugin marketplace add remember-md/marketplace</span>{"\n"}
                <span className="text-emerald-400">/plugin install remember</span>{"\n"}
                {"\n"}
                <span className="text-zinc-500"># Initialize your second brain</span>{"\n"}
                <span className="text-blue-400">/remember:init</span>
              </code>
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://github.com/remember-md/remember"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-zinc-300 hover:bg-white/5 transition-colors justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              View on GitHub
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
