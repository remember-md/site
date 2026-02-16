"use client";

import { motion } from "framer-motion";
import { Download, MessageSquare, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install",
    description:
      "Creates your Second Brain structure and starts learning from day one.",
    code: `# In Claude Code:
/plugin marketplace add remember-md/marketplace
/plugin install remember
/remember:init`,
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Work normally",
    description:
      "Say \"remember this: ...\" for instant capture. Or run /remember:process to extract from past sessions.",
    code: `> remember this: we chose Postgres over MongoDB
  because of ACID compliance

✓ Captured to Notes/decision-database.md
✓ Updated Projects/auth-service.md
✓ Linked People/sarah.md`,
  },
  {
    number: "03",
    icon: Search,
    title: "Query your brain",
    description:
      "Your AI now has memory. Context accumulates across sessions.",
    code: `You: "What do we know about Sarah?"

AI: "Sarah Chen — Backend Lead @ Acme
     Last discussed: auth architecture (Feb 14)
     Prefers JWT over OAuth for internal APIs
     See People/sarah-chen.md"`,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Three steps.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Five minutes.
            </span>
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-white/5 font-mono">
                    {step.number}
                  </span>
                  <step.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>

              <div className="flex-1 w-full">
                <div className="code-editor p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <pre className="text-sm text-zinc-300 font-mono leading-relaxed overflow-x-auto">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
