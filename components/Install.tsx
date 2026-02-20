"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Github, FileText } from "lucide-react";

const tabs = [
  {
    id: "claude-code",
    label: "Claude Code",
    code: `# Add the marketplace
/plugin marketplace add remember-md/marketplace

# Install the plugin
/plugin install remember

# Initialize your brain
/remember:init`,
  },
  {
    id: "openclaw",
    label: "OpenClaw",
    code: `# Install the plugin
openclaw plugins install @remember-md/remember

# Initialize your brain
/remember:init`,
  },
];

export default function Install() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [copied, setCopied] = useState(false);

  const active = tabs.find((t) => t.id === activeTab)!;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(active.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 relative">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Get started in{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              60 seconds
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="code-editor p-3 sm:p-5 relative">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] hidden sm:block" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e] hidden sm:block" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] hidden sm:block" />
                <div className="flex items-center gap-1 sm:ml-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => { setActiveTab(tab.id); setCopied(false); }}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        activeTab === tab.id
                          ? "bg-white/10 text-zinc-200"
                          : "text-zinc-600 hover:text-zinc-400"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-white/10 hover:bg-white/5 transition-colors text-zinc-400 hover:text-white"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <pre className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed overflow-x-auto">
              <code>{active.code}</code>
            </pre>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-zinc-400">
            Free and open source. MIT licensed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://github.com/remember-md/remember"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-zinc-300 hover:bg-white/5 transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            <a
              href="https://github.com/remember-md/remember#readme"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-zinc-300 hover:bg-white/5 transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="w-4 h-4" />
              Read the docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
