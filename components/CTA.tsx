"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 relative">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Give your AI a memory.
        </motion.h2>

        <motion.p
          className="text-xl text-zinc-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Free. Local. Open source. Portable.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#install"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto"
          >
            Install Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://github.com/remember-md/remember"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/10 text-zinc-300 hover:bg-white/5 transition-colors w-full sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            Star on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
