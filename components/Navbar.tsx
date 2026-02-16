"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold">
            R
          </span>
          Remember
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#spec" className="hover:text-white transition-colors">Spec</a>
          <a href="#plugin" className="hover:text-white transition-colors">Plugin</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#comparison" className="hover:text-white transition-colors">Compare</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <a
          href="https://github.com/remember-md"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm hover:bg-white/5 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </motion.nav>
  );
}
