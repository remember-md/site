"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Same question.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Different experience.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            className="rounded-xl border border-red-500/10 bg-red-500/[0.02] overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-5 py-3 border-b border-red-500/10 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-300">Before</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-4">
              <div>
                <span className="text-zinc-500">You:</span>
                <p className="text-zinc-300 mt-1">&quot;What did we decide about auth?&quot;</p>
              </div>
              <div>
                <span className="text-zinc-500">AI:</span>
                <p className="text-zinc-500 mt-1 italic">
                  &quot;I don&apos;t have context from previous sessions.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-5 py-3 border-b border-emerald-500/10 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">After</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-4">
              <div>
                <span className="text-zinc-500">You:</span>
                <p className="text-zinc-300 mt-1">&quot;What did we decide about auth?&quot;</p>
              </div>
              <div>
                <span className="text-zinc-500">AI:</span>
                <p className="text-emerald-300/90 mt-1">
                  &quot;On Jan 15, you and Sarah chose JWT + refresh tokens.
                  <br />
                  Rationale: simpler than OAuth for internal APIs.
                  <br />
                  See{" "}
                  <span className="text-emerald-400 underline decoration-emerald-400/30">
                    Notes/decision-auth.md
                  </span>
                  &quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
