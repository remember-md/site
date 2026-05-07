import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "REMEMBER.md Spec — Open Standard for AI Memory",
  description:
    "REMEMBER.md is an open, markdown-native standard for telling AI tools how to capture, organise, and evolve a portable knowledge base. One file. Parser in 20 lines. Engine-agnostic.",
  alternates: { canonical: "https://remember.md/spec" },
  openGraph: {
    title: "REMEMBER.md Spec",
    description:
      "Open standard for AI memory configuration — markdown-native, engine-agnostic, parser in 20 lines.",
    type: "article",
  },
};

export default function SpecPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
      <article className="max-w-3xl mx-auto prose prose-invert prose-zinc">
        <p className="text-sm text-zinc-500 not-prose mb-2">
          <Link href="/" className="hover:text-zinc-300">← Back to Remember</Link>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">REMEMBER.md Spec v1</h1>
        <p className="text-zinc-400">
          Open standard for AI memory configuration. Status:{" "}
          <span className="text-emerald-400">Living Draft</span> · Last updated 2026-05-05
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Pitch</h2>
        <p className="text-zinc-300 leading-relaxed">
          <code className="text-fuchsia-300">AGENTS.md</code> tells your AI{" "}
          <em>how to work</em>.{" "}
          <code className="text-fuchsia-300">REMEMBER.md</code> tells your AI{" "}
          <em>how to remember</em>. Together with{" "}
          <code className="text-fuchsia-300">llms.txt</code>, they form the
          markdown trio for portable, tool-agnostic AI configuration.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Core rules</h2>
        <ol className="text-zinc-300 list-decimal pl-6 space-y-2 leading-relaxed">
          <li>The file is named <code>REMEMBER.md</code>.</li>
          <li>It lives at the root of your brain (or any project that needs overrides).</li>
          <li>It is plain markdown. <code>## Section Name</code> headings delimit blocks.</li>
          <li>Seven section names are reserved by the spec (see below). All optional.</li>
          <li>An empty file means "use engine defaults". Zero config = it works.</li>
          <li>Engines MUST ignore sections they don't understand (forwards-compatible).</li>
          <li>Engines MUST NOT auto-modify the file. It belongs to the user.</li>
          <li>User rules override engine defaults; project-level overrides global.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-3">Reserved sections</h2>
        <div className="not-prose overflow-x-auto rounded-lg border border-white/5">
          <table className="w-full text-sm">
            <thead className="bg-white/[0.03]">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Section</th>
                <th className="text-left px-4 py-2 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr><td className="px-4 py-2"><code>## Capture Rules</code></td><td className="px-4 py-2 text-zinc-400">Always-capture / never-capture filters and thresholds.</td></tr>
              <tr><td className="px-4 py-2"><code>## Routing</code></td><td className="px-4 py-2 text-zinc-400">Where each kind of content lands in the brain.</td></tr>
              <tr><td className="px-4 py-2"><code>## Processing</code></td><td className="px-4 py-2 text-zinc-400">How content is formatted, tagged, summarised.</td></tr>
              <tr><td className="px-4 py-2"><code>## Custom Types</code></td><td className="px-4 py-2 text-zinc-400">User-defined entity types beyond the engine's defaults.</td></tr>
              <tr><td className="px-4 py-2"><code>## Connections</code></td><td className="px-4 py-2 text-zinc-400">Auto-linking rules and relationship hints.</td></tr>
              <tr><td className="px-4 py-2"><code>## Language</code></td><td className="px-4 py-2 text-zinc-400">Multilingual capture and processing preferences.</td></tr>
              <tr><td className="px-4 py-2"><code>## Promotion Thresholds</code></td><td className="px-4 py-2 text-zinc-400">Confidence/sources thresholds for promoting beliefs to a pinned section.</td></tr>
              <tr><td className="px-4 py-2"><code>## Templates</code></td><td className="px-4 py-2 text-zinc-400">Override engine-default templates per file kind.</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-3">Override semantics</h2>
        <ul className="text-zinc-300 list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <strong>Same-name section</strong> in your file — content is{" "}
            <em>appended</em> to the engine default.
          </li>
          <li>
            <code>## Override: &lt;Name&gt;</code> — your content{" "}
            <em>fully replaces</em> the matching default.
          </li>
          <li>
            <strong>Any other heading</strong> — passed through verbatim as a
            user-defined section. Engines ignore unknown sections gracefully.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">Engine guarantees</h2>
        <ul className="text-zinc-300 list-disc pl-6 space-y-2 leading-relaxed">
          <li>The brain is plain markdown, browseable in any editor (Obsidian, VS Code, …).</li>
          <li>Schema is additive: <code>type</code>, <code>freshness</code>, <code>confidence</code>, <code>sources_count</code>, <code>evidence[]</code>, <code>counter_evidence[]</code> are optional in v1, not required.</li>
          <li>An evolution layer (consolidation, reflection, promotion) is allowed but must be auditable and reversible.</li>
          <li>No content leaves the user&apos;s machine without explicit consent.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">Reference parser (20 lines)</h2>
        <pre className="not-prose bg-black/40 border border-white/5 rounded-lg p-4 overflow-x-auto text-sm">
{`import re

def parse_remember_md(path):
    with open(path) as f:
        text = f.read()
    sections = {}
    for match in re.finditer(
        r'^## (.+)\\n(.*?)(?=^## |\\Z)',
        text, re.M | re.S
    ):
        name = match.group(1).strip()
        content = match.group(2).strip()
        if content:
            sections[name] = content
    return sections`}
        </pre>

        <h2 className="text-xl font-semibold mt-8 mb-3">Reference implementation</h2>
        <p className="text-zinc-300 leading-relaxed">
          The Remember plugin (
          <a className="text-fuchsia-300 hover:text-fuchsia-200" href="https://github.com/remember-md/remember">
            github.com/remember-md/remember
          </a>
          ) is the canonical engine. It ships:
        </p>
        <ul className="text-zinc-300 list-disc pl-6 space-y-2 leading-relaxed">
          <li>A SessionStart hook that loads <code>Persona.md</code> and an AI-driven passive capture nudge</li>
          <li>A capture skill triggered by phrases like &quot;remember this:&quot; with live polarity check (positive evidence vs counter-evidence)</li>
          <li>A bulk-extraction skill for retroactive session processing</li>
          <li>Auto-promote at capture time so <code>Persona.md ## Top Beliefs</code> stays in sync without cron, with bootstrap thresholds for cold-start brains</li>
          <li>An <code>evolve</code> skill (recommended weekly) that consolidates entities, reflects on beliefs, and promotes top beliefs to Persona</li>
          <li>An auditable evolution log at <code>~/.local/state/remember/evolution.log</code></li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">Adopting REMEMBER.md</h2>
        <p className="text-zinc-300 leading-relaxed">
          Tool authors are encouraged to read <code>REMEMBER.md</code> from the
          project root and apply the rules described above. A 20-line parser
          (in any language) is enough for v1 compliance. Engines are free to
          extend with additional sections, as long as they do so under the{" "}
          <code>## x-*</code> prefix or as <code>## Override: &lt;name&gt;</code>{" "}
          blocks to avoid name conflicts.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Versioning</h2>
        <ul className="text-zinc-300 list-disc pl-6 space-y-2 leading-relaxed">
          <li>The spec is versioned (v1.0, v1.1, v2.0); individual <code>REMEMBER.md</code> files are not.</li>
          <li>New section names may be added in minor versions. Removed names: never.</li>
          <li>Engines stay forwards-compatible by ignoring unknown sections.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">Status &amp; contributions</h2>
        <p className="text-zinc-300 leading-relaxed">
          v1 is a living draft. Implementations, feedback, and competing
          parser libraries are welcome at{" "}
          <a className="text-fuchsia-300 hover:text-fuchsia-200" href="https://github.com/remember-md/remember/issues">
            github.com/remember-md/remember/issues
          </a>
          .
        </p>

        <hr className="border-white/5 my-10" />

        <p className="text-sm text-zinc-500">
          Inspired by <code>.editorconfig</code> (one page, dead-simple, 30+ editors), <code>llms.txt</code> (markdown-native, grassroots), and <code>AGENTS.md</code> (cross-tool agent instructions).
        </p>
      </article>
    </main>
  );
}
