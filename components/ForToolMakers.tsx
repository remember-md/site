"use client";

import { motion } from "framer-motion";
import { Code2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    text: "Look for REMEMBER.md at the user's project/brain root",
  },
  {
    number: "2",
    text: "Parse markdown sections (## headers)",
  },
  {
    number: "3",
    text: "Apply user rules before your defaults",
  },
  {
    number: "4",
    text: "Never auto-modify the file",
  },
];

const codeExample = `import re

def parse_remember_md(path):
    text = open(path).read()
    sections = {}
    for match in re.finditer(
        r'^## (.+)\\n(.*?)(?=^## |\\Z)',
        text, re.M | re.S
    ):
        name = match.group(1).strip()
        content = match.group(2).strip()
        if content:
            sections[name] = content
    return sections

# Usage
rules = parse_remember_md("REMEMBER.md")
capture = rules.get("Capture Rules", "")`;

export default function ForToolMakers() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Code2 className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Build on REMEMBER.md
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Add REMEMBER.md support to your AI tool in minutes.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Steps */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Integration steps</h3>
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02]"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sm font-mono text-blue-400">
                    {step.number}
                  </span>
                  <p className="text-zinc-300 leading-relaxed pt-1">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://github.com/remember-md"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-blue-500/20 text-blue-400 hover:bg-blue-500/10 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add your tool as an adopter
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Code example */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="code-editor p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="text-xs text-zinc-600 font-mono ml-2">parser.py</span>
              </div>
              <pre className="text-sm text-zinc-300 font-mono leading-relaxed overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
