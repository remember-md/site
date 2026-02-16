"use client";

import { motion } from "framer-motion";
import { Target, Brain, Layers, Shield, BookOpen, Settings2 } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "100% Deterministic Capture",
    description:
      "Hooks-based architecture. Every capture is reliable, inspectable, and predictable. No black-box AI guessing.",
    iconColor: "text-emerald-400",
  },
  {
    icon: Brain,
    title: "Adaptive Persona",
    description:
      "Persona.md learns your code style, communication patterns, and workflow preferences. Loaded every session.",
    iconColor: "text-purple-400",
  },
  {
    icon: Layers,
    title: "Bulk Processing",
    description:
      "Extract knowledge from past sessions retroactively. Process months of conversations in minutes.",
    iconColor: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Local-First Privacy",
    description:
      "Plain markdown files on your machine. No cloud. No sync. No telemetry. Your data never leaves.",
    iconColor: "text-rose-400",
  },
  {
    icon: BookOpen,
    title: "Obsidian Compatible",
    description:
      "PARA + Zettelkasten structure with wikilinks, YAML frontmatter, and graph view. Works with Obsidian, Logseq, or any editor.",
    iconColor: "text-amber-400",
  },
  {
    icon: Settings2,
    title: "Customizable",
    description:
      "Add a REMEMBER.md to control what gets captured, how content is routed, and define your own rules.",
    iconColor: "text-cyan-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 px-6">
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
            Not another note-taking app. A knowledge engine for your AI sessions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div
                className="inline-flex p-2.5 rounded-lg mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                }}
              >
                <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
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
