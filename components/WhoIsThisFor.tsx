"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "You want a second brain but maintaining it feels like a second job",
  "You use Claude Code daily and want automatic knowledge capture",
  "You value privacy and data ownership (local-first, Git-friendly)",
  "You prefer open source and local-first tools",
  "You want full control over your data and workflow",
  "You want Obsidian's power + AI automation",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function WhoIsThisFor() {
  return (
    <section id="who" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
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
          className="flex flex-col gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason}
              variants={item}
              className="flex items-start gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-md bg-emerald-500/10 flex items-center justify-center mt-0.5">
                <Check className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed">{reason}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-zinc-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ❌ Not for you if: You need mobile apps or cloud sync (coming in Remember Pro)
        </motion.p>
      </div>
    </section>
  );
}
