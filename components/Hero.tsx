"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Shield, Cpu, Target, Sparkles } from "lucide-react";

const stats = [
  { icon: Target, label: "100% capture rate" },
  { icon: Shield, label: "Local & private" },
  { icon: Cpu, label: "Works with any AI" },
  { icon: Sparkles, label: "Free forever" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-mesh">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Fade-out particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/30"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 15}%`,
            }}
            animate={{
              y: [0, -40, -80],
              opacity: [0.6, 0.3, 0],
              scale: [1, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open Source · MIT Licensed
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-white">Your AI learns everything</span>
          <br />
          <span className="text-white">about your work.</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Then forgets it all.
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Every decision, every insight, every person you discuss —
          gone after the session ends. <span className="text-zinc-200 font-medium">Remember changes that.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a
            href="#get-started"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
          >
            Get Started — Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/10 text-zinc-300 hover:bg-white/5 transition-colors"
          >
            See How It Works
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="relative z-10 w-full border-t border-white/5 bg-white/[0.02] backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto py-5 px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex items-center justify-center gap-2.5 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              <stat.icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span className="text-zinc-300 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
