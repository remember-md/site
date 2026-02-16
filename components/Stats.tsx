"use client";

import { motion } from "framer-motion";
import { Layers, FileText, Settings, Cpu } from "lucide-react";

const stats = [
  { icon: Layers, label: "7 sections", description: "Optional spec sections" },
  { icon: FileText, label: "Pure markdown", description: "No schemas needed" },
  { icon: Settings, label: "Zero config works", description: "Empty file = defaults" },
  { icon: Cpu, label: "Any AI tool", description: "Universal standard" },
];

export default function Stats() {
  return (
    <section className="py-12 px-6 border-y border-white/5">
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <stat.icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
            <div className="text-lg md:text-xl font-semibold text-white">
              {stat.label}
            </div>
            <div className="text-zinc-500 text-xs mt-1">{stat.description}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
