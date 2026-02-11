"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Start building your{" "}
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            second brain
          </span>
        </motion.h2>

        <motion.p
          className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          One command to install. Zero config needed. 
          Your knowledge base starts building itself from the first session.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://github.com/remember-md/remember"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-colors text-lg"
          >
            Install Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://github.com/remember-md/remember"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white/10 text-zinc-300 hover:bg-white/5 transition-colors text-lg"
          >
            <Github className="w-5 h-5" />
            Star on GitHub
          </a>
        </motion.div>

        <motion.div
          className="code-editor inline-block px-6 py-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <code className="text-sm text-zinc-300 font-mono">
            <span className="text-emerald-400">$</span> npx remember-md@latest init
          </code>
        </motion.div>
      </div>
    </section>
  );
}
