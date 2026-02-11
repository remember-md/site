"use client";

import { motion } from "framer-motion";
import { Quote, Star, ArrowRight, FolderOpen, Users, FileText, CheckSquare, Brain, Shuffle, ClipboardList, HelpCircle } from "lucide-react";

const beforeItems = [
  { icon: <Shuffle className="w-4 h-4" />, text: "Scattered Claude sessions" },
  { icon: <HelpCircle className="w-4 h-4" />, text: "Lost context between projects" },
  { icon: <ClipboardList className="w-4 h-4" />, text: "Manual note-taking" },
];

const afterItems = [
  { icon: <FolderOpen className="w-4 h-4" />, text: "Projects/" },
  { icon: <Users className="w-4 h-4" />, text: "People/" },
  { icon: <FileText className="w-4 h-4" />, text: "Notes/" },
  { icon: <CheckSquare className="w-4 h-4" />, text: "Tasks/" },
  { icon: <Brain className="w-4 h-4" />, text: "Queryable brain" },
];

export default function SocialProof() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.03] to-transparent" />
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Testimonial */}
        <motion.div
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-xl border border-white/5 bg-white/[0.02] p-8 md:p-10">
            <Quote className="w-8 h-8 text-purple-400/30 absolute top-6 left-6" />
            <blockquote className="text-zinc-300 text-lg md:text-xl leading-relaxed pl-6 italic">
              &ldquo;After 1 week of using Remember, I had 47 notes, 12 people
              tracked, and 5 project files — all auto-populated. I didn&apos;t
              organize anything manually.&rdquo;
            </blockquote>
            <div className="mt-6 pl-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
              <div>
                <p className="text-white text-sm font-medium">Early adopter</p>
                <p className="text-zinc-500 text-sm">1 week with Remember</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Before → After */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Before &amp; After
          </h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {/* Before */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
            <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-4">
              Before
            </p>
            <ul className="space-y-3">
              {beforeItems.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-zinc-400"
                >
                  <span className="text-red-400/60">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex md:hidden items-center justify-center py-2">
            <ArrowRight className="w-6 h-6 text-purple-400 rotate-90" />
          </div>

          {/* After */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              After
            </p>
            <ul className="space-y-3">
              {afterItems.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <span className="text-emerald-400">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* GitHub Stars */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://github.com/remember-md/remember"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors text-sm"
          >
            <Star className="w-4 h-4" />
            Star on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
