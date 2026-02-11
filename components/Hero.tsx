"use client";

import { motion } from "framer-motion";
import { Player } from "@remotion/player";
import { HeroAnimation } from "../remotion/HeroAnimation";
import { ArrowRight, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open Source & Free Forever
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your AI agent&apos;s{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              memory
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-zinc-400 max-w-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A deterministic second-brain plugin for Claude Code. 
            Captures decisions, ideas, and context automatically into local Markdown files.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://github.com/remember-md/remember"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              Install Plugin
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/remember-md/remember"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-zinc-300 hover:bg-white/5 transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </motion.div>
        </div>

        {/* Right: Remotion Animation */}
        <motion.div
          className="flex-1 w-full max-w-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="code-editor glow overflow-hidden">
            <Player
              component={HeroAnimation}
              durationInFrames={300}
              fps={30}
              compositionWidth={640}
              compositionHeight={400}
              style={{ width: "100%", borderRadius: 12 }}
              loop
              autoPlay
              controls={false}
              acknowledgeRemotionLicense
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
