"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Github, FileText } from "lucide-react";

const installCode = `# Add the marketplace
/plugin marketplace add remember-md/marketplace

# Install the plugin
/plugin install remember

# Initialize your second brain
/remember:init`;

export default function Install() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get started in{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              60 seconds
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="code-editor p-5 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="text-xs text-zinc-600 font-mono ml-2">
                  Claude Code
                </span>
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
            <pre className="text-sm text-zinc-300 font-mono leading-relaxed overflow-x-auto">
              <code>{installCode}</code>
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
            Free and open source. MIT licensed. Works with Claude Code.
          </p>
          <p className="text-zinc-600 text-sm">
            OpenClaw skill coming soon.
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
