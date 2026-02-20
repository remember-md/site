"use client";

import { motion } from "framer-motion";
import { Workflow, FileCode2, Zap, GitFork } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Hooks, not magic",
    description:
      "Deterministic capture via OpenClaw and Claude Code hooks. Every write is predictable, inspectable, and version-controlled. No black-box AI deciding what to save.",
    iconColor: "text-amber-400",
  },
  {
    icon: FileCode2,
    title: "Plain markdown. Full control.",
    description:
      "YAML frontmatter, wikilinks, standard file structure. grep it, git it, script it — your brain is just files.",
    iconColor: "text-emerald-400",
  },
  {
    icon: Workflow,
    title: "Persona that evolves",
    description:
      "Persona.md learns your code style, naming conventions, and review preferences. Loaded every OpenClaw and Claude Code session — your AI stops asking the same questions.",
    iconColor: "text-purple-400",
  },
  {
    icon: GitFork,
    title: "Project-level overrides",
    description:
      "Drop a REMEMBER.md in any repo to control capture rules, templates, and routing. Global defaults + per-project config.",
    iconColor: "text-blue-400",
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
    <section id="features" className="py-16 md:py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Built for developers
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            More than memory. A structured second brain you own, browse, and take anywhere.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
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
              <feature.icon
                className={`w-5 h-5 ${feature.iconColor} mb-4`}
              />
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
