"use client";

import { motion } from "framer-motion";
import { RotateCcw, Clock, UserX } from "lucide-react";

const painPoints = [
  {
    icon: RotateCcw,
    text: "You explained the same architecture decision to your AI. Again.",
    color: "text-red-400",
  },
  {
    icon: Clock,
    text: "That perfect solution from last month? Lost in a closed session.",
    color: "text-orange-400",
  },
  {
    icon: UserX,
    text: "Your AI doesn't know your team, your preferences, or your past decisions.",
    color: "text-amber-400",
  },
];

export default function Problem() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Sound familiar?</h2>
        </motion.div>

        <div className="space-y-4 max-w-2xl mx-auto mb-12">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <point.icon className={`w-5 h-5 ${point.color} flex-shrink-0 mt-0.5`} />
              <p className="text-zinc-300 text-lg leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xl md:text-2xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-zinc-400">AI sessions are a goldmine.</span>{" "}
          <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent font-semibold">
            You&apos;re throwing away the gold.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
