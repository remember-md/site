"use client";

import { motion } from "framer-motion";
import { Fingerprint, Shield, Code2, BookOpen, Brain } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Bulk Session Processing",
    description:
      "Extract knowledge from past Claude sessions retroactively. Process months of transcripts in minutes, organized automatically.",
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    icon: Brain,
    title: "Adaptive Persona Learning",
    description:
      "Persona.md evolves with you—learning your code style, communication patterns, and workflow preferences. Loaded every session.",
    gradient: "from-purple-400 to-violet-400",
  },
  {
    icon: Shield,
    title: "Local-First Privacy",
    description:
      "Everything stays on your machine in plain Markdown files. No cloud, no sync, no telemetry. Your data, your rules.",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: Code2,
    title: "Queryable Knowledge Base",
    description:
      "Ask your brain for context across projects, people, and decisions. Auto-organized using PARA + Zettelkasten methodology.",
    gradient: "from-orange-400 to-amber-400",
  },
  {
    icon: BookOpen,
    title: "Obsidian Compatible",
    description:
      "Standard Markdown with [[wikilinks]] and YAML frontmatter. Works seamlessly with Obsidian, Logseq, or any text editor.",
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

export default function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built different
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Not another note-taking app. Remember extracts knowledge from Claude sessions—past and present—
            into a self-organizing, queryable second brain that learns how you work.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              <div
                className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}
                style={{ opacity: 0.15 }}
              >
                <feature.icon className={`w-6 h-6`} style={{ opacity: 1 }} />
              </div>
              <div className={`inline-flex p-3 rounded-lg mb-4 absolute top-6 left-6`}>
                <feature.icon className={`w-6 h-6 bg-gradient-to-br ${feature.gradient} bg-clip-text`} style={{ color: "currentColor" }} />
              </div>

              <h3 className="text-lg font-semibold mb-2 mt-8">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
