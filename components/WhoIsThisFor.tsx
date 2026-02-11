"use client";

import { motion } from "framer-motion";
import { Code2, BookOpen, Shield, Coins } from "lucide-react";
import { ReactNode } from "react";

const personas: { icon: ReactNode; emoji: string; title: string; desc: string }[] = [
  {
    icon: <Code2 className="w-6 h-6" />,
    emoji: "🧑‍💻",
    title: "Developers",
    desc: "You use Claude Code daily and want to capture architecture decisions, patterns, and context automatically.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    emoji: "📓",
    title: "Obsidian Users",
    desc: "You love Obsidian but want AI-powered capture. Same Markdown files, supercharged with auto-organization.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    emoji: "🔒",
    title: "Privacy Advocates",
    desc: "Your notes never leave your machine. No cloud, no tracking, no terms of service on your thoughts.",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    emoji: "💸",
    title: "Budget-Conscious",
    desc: "Everything Mem.ai charges $12/mo for. Free. Forever. Open source.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function WhoIsThisFor() {
  return (
    <section id="who" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Who is this for?
          </h2>
          <p className="text-zinc-400 text-lg">
            If any of these sound like you, Remember was built for you.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {personas.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl">
                  {p.emoji}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
