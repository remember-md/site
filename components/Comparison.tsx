"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const features = [
  { name: "Free & Open Source", remember: true, mem: false, reflect: false, notion: false },
  { name: "Local-first (no cloud)", remember: true, mem: false, reflect: false, notion: false },
  { name: "Bulk session processing", remember: true, mem: false, reflect: false, notion: false },
  { name: "Adaptive learning (Persona)", remember: true, mem: false, reflect: false, notion: false },
  { name: "Queryable knowledge base", remember: true, mem: "partial", reflect: "partial", notion: "partial" },
  { name: "Obsidian compatible", remember: true, mem: false, reflect: false, notion: false },
  { name: "Plain Markdown files", remember: true, mem: false, reflect: false, notion: false },
  { name: "Works offline", remember: true, mem: false, reflect: false, notion: false },
  { name: "No subscription", remember: true, mem: false, reflect: false, notion: false },
];

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-4 h-4 text-emerald-400" />;
  if (value === false) return <X className="w-4 h-4 text-zinc-600" />;
  return <Minus className="w-4 h-4 text-yellow-400" />;
}

export default function Comparison() {
  return (
    <section id="comparison" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How we compare
          </h2>
          <p className="text-zinc-400 text-lg">
            Remember isn&apos;t competing with note-taking apps. It&apos;s a different category.
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-zinc-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-center">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">
                    Remember
                  </span>
                </th>
                <th className="py-4 px-4 text-center text-zinc-400 font-medium">Mem.ai</th>
                <th className="py-4 px-4 text-center text-zinc-400 font-medium">Reflect</th>
                <th className="py-4 px-4 text-center text-zinc-400 font-medium">Notion AI</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr
                  key={f.name}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3 px-4 text-zinc-300">{f.name}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center"><CellIcon value={f.remember} /></div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center"><CellIcon value={f.mem} /></div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center"><CellIcon value={f.reflect} /></div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center"><CellIcon value={f.notion} /></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          className="text-center text-zinc-500 text-xs mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Comparison based on publicly available information as of January 2025.
        </motion.p>
      </div>
    </section>
  );
}
