"use client";

import { motion } from "framer-motion";
import { Player } from "@remotion/player";
import { HeroAnimation } from "../remotion/HeroAnimation";
import { ArrowRight, Github, Code2, Shield, BookOpen, Heart } from "lucide-react";

const stats = [
  { icon: Code2, label: "Open source" },
  { icon: Shield, label: "100% local" },
  { icon: BookOpen, label: "Obsidian native" },
  { icon: Heart, label: "Free forever" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-mesh">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 pb-12 sm:pb-16">
        {/* Text — centered */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Claude Code · OpenClaw · Cursor & more
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <span className="text-white">One brain.</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Every AI tool.
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            A second brain for OpenClaw and Claude Code. Organize knowledge
            from your AI sessions — past and future — into a structured,
            Obsidian-compatible knowledge base.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <a
              href="https://github.com/remember-md/remember"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              View on GitHub
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Demo — Remotion terminal, hidden on very small screens */}
        <motion.div
          className="relative max-w-4xl mx-auto hidden sm:block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {/* Glow behind the terminal */}
          <div className="absolute -inset-4 bg-gradient-to-b from-purple-500/10 via-violet-500/5 to-transparent rounded-2xl blur-2xl pointer-events-none" />

          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
            <Player
              component={HeroAnimation}
              durationInFrames={300}
              compositionWidth={640}
              compositionHeight={400}
              fps={30}
              autoPlay
              loop
              style={{ width: "100%", height: "auto", aspectRatio: "640/400" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="relative z-10 w-full border-t border-white/5 bg-white/[0.02] backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        <div className="max-w-7xl mx-auto py-4 px-6 sm:px-8 lg:px-12 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-between gap-y-3 gap-x-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-2 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.65 + i * 0.08 }}
            >
              <stat.icon className="w-4 h-4 text-purple-400/80 flex-shrink-0" />
              <span className="text-zinc-400 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
