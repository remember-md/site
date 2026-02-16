"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Sparkles } from "lucide-react";

const alwaysCaptureOptions = [
  { id: "arch", label: "Architecture decisions with rationale", default: true },
  { id: "people", label: "People and their roles", default: true },
  { id: "meetings", label: "Meeting notes and action items", default: false },
  { id: "lessons", label: "Lessons learned from bugs", default: true },
  { id: "status", label: "Project status updates", default: false },
  { id: "links", label: "Links and resources shared", default: false },
];

const neverCaptureOptions = [
  { id: "debug", label: "Debugging trial-and-error", default: true },
  { id: "routine", label: "Routine code generation", default: true },
  { id: "greetings", label: "Casual greetings and small talk", default: true },
  { id: "config", label: "System/tool configuration", default: false },
];

const languages = [
  "English",
  "Romanian",
  "Spanish",
  "French",
  "German",
  "Portuguese",
  "Italian",
  "Dutch",
  "Japanese",
  "Korean",
  "Chinese",
];

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label className="flex items-center gap-3 py-2 cursor-pointer group">
      <div
        className={`w-4.5 h-4.5 rounded border flex items-center justify-center transition-all flex-shrink-0 ${
          checked
            ? "bg-purple-600 border-purple-500"
            : "border-white/20 group-hover:border-white/40"
        }`}
        style={{ width: 18, height: 18 }}
        onClick={(e) => {
          e.preventDefault();
          onChange();
        }}
      >
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
        {label}
      </span>
    </label>
  );
}

export default function Generator() {
  const [alwaysCapture, setAlwaysCapture] = useState<Record<string, boolean>>(
    Object.fromEntries(alwaysCaptureOptions.map((o) => [o.id, o.default]))
  );
  const [neverCapture, setNeverCapture] = useState<Record<string, boolean>>(
    Object.fromEntries(neverCaptureOptions.map((o) => [o.id, o.default]))
  );
  const [language, setLanguage] = useState("English");
  const [copied, setCopied] = useState(false);

  const generated = useMemo(() => {
    const alwaysLines = alwaysCaptureOptions
      .filter((o) => alwaysCapture[o.id])
      .map((o) => `- ${o.label}`);
    const neverLines = neverCaptureOptions
      .filter((o) => neverCapture[o.id])
      .map((o) => `- ${o.label}`);

    let output = `# REMEMBER.md\n\n## Capture Rules\n`;

    if (alwaysLines.length > 0) {
      output += `### Always Capture\n${alwaysLines.join("\n")}\n\n`;
    }
    if (neverLines.length > 0) {
      output += `### Never Capture\n${neverLines.join("\n")}\n\n`;
    }

    if (language !== "English") {
      output += `## Language\n- Capture in original language, organize in: ${language}\n`;
    }

    return output.trim();
  }, [alwaysCapture, neverCapture, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="get-started" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-sm text-purple-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Build your REMEMBER.md
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Pick what matters to you. Copy the file. Start capturing knowledge.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {/* Form */}
          <div className="space-y-8">
            {/* Always Capture */}
            <div>
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                ✓ Always Capture
              </h3>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-1">
                {alwaysCaptureOptions.map((option) => (
                  <Checkbox
                    key={option.id}
                    checked={alwaysCapture[option.id]}
                    onChange={() =>
                      setAlwaysCapture((prev) => ({
                        ...prev,
                        [option.id]: !prev[option.id],
                      }))
                    }
                    label={option.label}
                  />
                ))}
              </div>
            </div>

            {/* Never Capture */}
            <div>
              <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
                ✗ Never Capture
              </h3>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-1">
                {neverCaptureOptions.map((option) => (
                  <Checkbox
                    key={option.id}
                    checked={neverCapture[option.id]}
                    onChange={() =>
                      setNeverCapture((prev) => ({
                        ...prev,
                        [option.id]: !prev[option.id],
                      }))
                    }
                    label={option.label}
                  />
                ))}
              </div>
            </div>

            {/* Language */}
            <div>
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                🌍 Language
              </h3>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <label className="text-sm text-zinc-400 mb-2 block">
                  Organize notes in:
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-[#1e1e2e] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-purple-500/50 transition-colors appearance-none cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="code-editor p-5 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="text-xs text-zinc-600 font-mono ml-2">
                    REMEMBER.md
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
              <pre className="text-sm text-zinc-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap min-h-[300px]">
                <code>{generated}</code>
              </pre>
            </div>

            {/* Quick install after generator */}
            <div className="mt-6 p-5 rounded-xl border border-white/5 bg-white/[0.02]">
              <p className="text-sm text-zinc-400 mb-3">
                Save as <code className="text-purple-400 text-xs">~/remember/REMEMBER.md</code>, then:
              </p>
              <div className="code-editor p-3 text-sm font-mono">
                <code className="text-emerald-400">/plugin marketplace add remember-md/marketplace</code>
                <br />
                <code className="text-emerald-400">/plugin install remember</code>
                <br />
                <code className="text-blue-400">/remember:init</code>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
