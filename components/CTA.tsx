"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Code2, Download } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get started with{" "}
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent font-mono">
            REMEMBER.md
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {/* For Users */}
          <div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] text-center">
            <Download className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">For Users</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Get the reference implementation for Claude Code.
            </p>
            <a
              href="https://github.com/remember-md/remember#install"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              Install Remember
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* For Tool Makers */}
          <div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] text-center">
            <Code2 className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">For Tool Makers</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Read the spec and add REMEMBER.md support to your tool.
            </p>
            <a
              href="https://github.com/remember-md"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-zinc-300 hover:bg-white/5 transition-colors"
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
