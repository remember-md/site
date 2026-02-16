"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const features = [
  { name: "Format", remember: "Pure Markdown", proprietary: "JSON/YAML/Custom" },
  { name: "Portability", remember: "Any tool", proprietary: "Vendor locked" },
  { name: "Human-readable", remember: true, proprietary: "partial" },
  { name: "Version control", remember: "Git-friendly", proprietary: "Varies" },
  { name: "Learning curve", remember: "Zero", proprietary: "Tool-specific" },
  { name: "Schema required", remember: false, proprietary: true },
  { name: "Breaking changes", remember: false, proprietary: true },
  { name: "Works without config", remember: true, proprietary: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-4 h-4 text-emerald-400 mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-zinc-600 mx-auto" />;
  if (value === "partial") return <Minus className="w-4 h-4 text-yellow-400 mx-auto" />;
  return <span className="text-zinc-300">{value}</span>;
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
            Open standard vs proprietary config
          </h2>
          <p className="text-zinc-400 text-lg">
            Why markdown beats custom schemas for AI memory configuration.
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
                <th className="text-left py-4 px-4 text-zinc-400 font-medium w-1/3"></th>
                <th className="py-4 px-4 text-center">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold font-mono">
                    REMEMBER.md
                  </span>
                </th>
                <th className="py-4 px-4 text-center text-zinc-400 font-medium">
                  Proprietary Config
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr
                  key={f.name}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3.5 px-4 text-zinc-300 font-medium">{f.name}</td>
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex justify-center">
                      <CellValue value={f.remember} />
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex justify-center">
                      <CellValue value={f.proprietary} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
