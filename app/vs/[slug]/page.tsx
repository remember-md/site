import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, X, ArrowLeft, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

// --- Data ---

interface ComparisonFeature {
  feature: string;
  remember: string | boolean;
  competitor: string | boolean;
}

interface CompetitorData {
  name: string;
  slug: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  price: string;
  summary: string;
  weaknesses: string[];
  features: ComparisonFeature[];
}

const competitors: Record<string, CompetitorData> = {
  "mem-ai": {
    name: "Mem.ai",
    slug: "mem-ai",
    tagline: "AI note-taking without the $12/mo price tag or cloud lock-in",
    metaTitle: "Remember vs Mem.ai — Free Open Source Mem.ai Alternative for Developers",
    metaDescription:
      "Compare Remember and Mem.ai. Remember is a free, open-source, local-first alternative to Mem.ai with offline support, Obsidian compatibility, and no subscription. The best Mem.ai alternative for developers.",
    price: "$12/mo",
    summary:
      "Mem.ai is a cloud-based AI note-taking tool at $12/month. It stores your data on their servers in a proprietary format with no offline access. Remember gives you the same AI-powered capture — free, local, and in plain Markdown you actually own.",
    weaknesses: [
      "$12/month subscription required",
      "Cloud-only — no offline access",
      "You don't own your data (proprietary format)",
      "No Obsidian or Markdown compatibility",
      "AI capture is non-deterministic — you can't inspect the logic",
      "No bulk processing of past sessions",
    ],
    features: [
      { feature: "Price", remember: "Free forever (MIT)", competitor: "$12/mo" },
      { feature: "Open source", remember: true, competitor: false },
      { feature: "Works offline", remember: true, competitor: false },
      { feature: "Local-first (own your data)", remember: true, competitor: false },
      { feature: "Plain Markdown files", remember: true, competitor: false },
      { feature: "Obsidian compatible", remember: true, competitor: false },
      { feature: "AI-powered capture", remember: true, competitor: true },
      { feature: "Bulk session processing", remember: true, competitor: false },
      { feature: "Adaptive persona", remember: true, competitor: false },
      { feature: "PARA + Zettelkasten organization", remember: true, competitor: false },
      { feature: "CLI / developer workflow", remember: true, competitor: false },
      { feature: "Task tracking", remember: true, competitor: false },
    ],
  },
  obsidian: {
    name: "Obsidian",
    slug: "obsidian",
    tagline: "Obsidian's power + AI automation you don't have to build yourself",
    metaTitle: "Remember vs Obsidian — AI-Powered Auto-Organization for Your Vault",
    metaDescription:
      "Compare Remember and Obsidian. Remember adds AI-powered auto-organization, session processing, and adaptive personas to Obsidian-compatible Markdown. The best Obsidian AI plugin alternative.",
    price: "Free (sync $4-10/mo)",
    summary:
      "Obsidian is a powerful Markdown editor, but it's just that — an editor. You design the system, install the plugins, and maintain the structure yourself. Remember is Obsidian-compatible but does the organizing for you with AI, PARA + Zettelkasten, and automatic session extraction.",
    weaknesses: [
      "No built-in AI (community plugins are fragile)",
      "No auto-organization — you build everything from scratch",
      "Steep learning curve to set up a productive system",
      "No session processing from Claude Code",
      "Sync costs $4-10/month",
      "No adaptive persona or knowledge extraction",
    ],
    features: [
      { feature: "Price", remember: "Free forever (MIT)", competitor: "Free (sync $4-10/mo)" },
      { feature: "Plain Markdown files", remember: true, competitor: true },
      { feature: "Wikilinks & frontmatter", remember: true, competitor: true },
      { feature: "AI-powered organization", remember: true, competitor: false },
      { feature: "Auto PARA + Zettelkasten", remember: true, competitor: false },
      { feature: "Session processing", remember: true, competitor: false },
      { feature: "Adaptive persona", remember: true, competitor: false },
      { feature: "Works without configuration", remember: true, competitor: false },
      { feature: "Queryable knowledge base", remember: true, competitor: false },
      { feature: "Task tracking built-in", remember: true, competitor: false },
      { feature: "Graph view", remember: "Via Obsidian", competitor: true },
      { feature: "Rich plugin ecosystem", remember: "N/A", competitor: true },
    ],
  },
  "notion-ai": {
    name: "Notion AI",
    slug: "notion-ai",
    tagline: "A developer-first alternative to Notion AI that works offline",
    metaTitle: "Remember vs Notion AI — Free Local-First Notion AI Alternative",
    metaDescription:
      "Compare Remember and Notion AI. Remember is a free, offline-capable, developer-first alternative to Notion AI. Plain Markdown, CLI integration, no subscription. The best Notion AI alternative for developers.",
    price: "$10-18/mo",
    summary:
      "Notion AI bolts AI onto a bloated workspace tool. It's cloud-dependent, slow, and exports lossy Markdown from proprietary blocks. Remember is built for developers who want fast, local, AI-powered note capture in plain Markdown — no browser tabs required.",
    weaknesses: [
      "$10-18/month subscription",
      "Cloud-dependent — no offline",
      "Slow and bloated for simple note-taking",
      "Proprietary block format (lossy Markdown export)",
      "No graph view or knowledge connections",
      "No CLI integration — browser only",
      "Overkill for personal knowledge management",
    ],
    features: [
      { feature: "Price", remember: "Free forever (MIT)", competitor: "$10-18/mo" },
      { feature: "Open source", remember: true, competitor: false },
      { feature: "Works offline", remember: true, competitor: false },
      { feature: "Plain Markdown (no lock-in)", remember: true, competitor: false },
      { feature: "CLI integration", remember: true, competitor: false },
      { feature: "Fast & lightweight", remember: true, competitor: false },
      { feature: "AI-powered features", remember: true, competitor: true },
      { feature: "Session processing", remember: true, competitor: false },
      { feature: "Obsidian compatible", remember: true, competitor: false },
      { feature: "PARA + Zettelkasten", remember: true, competitor: false },
      { feature: "Adaptive persona", remember: true, competitor: false },
      { feature: "Collaboration", remember: "Via Git", competitor: true },
    ],
  },
  reflect: {
    name: "Reflect",
    slug: "reflect",
    tagline: "Everything Reflect does, but free, open source, and cross-platform",
    metaTitle: "Remember vs Reflect — Free Open Source Reflect Alternative",
    metaDescription:
      "Compare Remember and Reflect. Remember is a free, open-source, cross-platform alternative to Reflect with bulk session processing, Obsidian support, and no subscription. The best Reflect alternative.",
    price: "$10/mo (annual only)",
    summary:
      "Reflect is a sleek note-taking app — but it costs $10/month (annual only), is effectively Apple-only, closed source, and uses a proprietary format. Remember gives you AI-powered knowledge management for free, on any platform, in Markdown you own.",
    weaknesses: [
      "$10/month (annual billing only, no free tier)",
      "Effectively Apple-only (limited cross-platform)",
      "Closed source — no transparency",
      "Proprietary format — no Obsidian support",
      "No bulk processing of past sessions",
      "No CLI or developer workflow",
    ],
    features: [
      { feature: "Price", remember: "Free forever (MIT)", competitor: "$10/mo (annual)" },
      { feature: "Open source", remember: true, competitor: false },
      { feature: "Cross-platform", remember: true, competitor: false },
      { feature: "Plain Markdown files", remember: true, competitor: false },
      { feature: "Obsidian compatible", remember: true, competitor: false },
      { feature: "Works offline", remember: true, competitor: true },
      { feature: "AI-powered capture", remember: true, competitor: true },
      { feature: "Bulk session processing", remember: true, competitor: false },
      { feature: "Adaptive persona", remember: true, competitor: false },
      { feature: "PARA + Zettelkasten", remember: true, competitor: false },
      { feature: "CLI / developer workflow", remember: true, competitor: false },
      { feature: "Task tracking", remember: true, competitor: false },
    ],
  },
};

const allSlugs = Object.keys(competitors);

// --- Static Params ---

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

// --- Metadata ---

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = competitors[slug];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "website",
    },
  };
}

// --- Helpers ---

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return <Check className="mx-auto h-5 w-5 text-emerald-400" />;
  if (value === false)
    return <X className="mx-auto h-5 w-5 text-zinc-600" />;
  return <span>{value}</span>;
}

// --- Page ---

export default async function VsPage({ params }: Props) {
  const { slug } = await params;
  const data = competitors[slug];
  if (!data) notFound();

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Nav */}
      <nav className="border-b border-white/5 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Remember
          </Link>
          <a
            href="https://github.com/nicobailon/remember"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-20">
        {/* Hero */}
        <section className="mb-20 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Remember
            </span>{" "}
            vs {data.name}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            {data.tagline}
          </p>
        </section>

        {/* Summary */}
        <section className="mb-16">
          <p className="mx-auto max-w-3xl text-center text-zinc-400 leading-relaxed">
            {data.summary}
          </p>
        </section>

        {/* Comparison Table */}
        <section className="mb-20">
          <h2 className="mb-8 text-center text-2xl font-semibold">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-white/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="px-6 py-4 text-left font-medium text-zinc-400">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center font-medium">
                    <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                      Remember
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center font-medium text-zinc-400">
                    {data.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.features.map((f, i) => (
                  <tr
                    key={f.feature}
                    className={
                      i % 2 === 0
                        ? "bg-transparent"
                        : "bg-white/[0.02]"
                    }
                  >
                    <td className="px-6 py-3.5 text-zinc-300">
                      {f.feature}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <Cell value={f.remember} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <Cell value={f.competitor} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Weaknesses */}
        <section className="mb-20">
          <h2 className="mb-8 text-center text-2xl font-semibold">
            Where {data.name} Falls Short
          </h2>
          <div className="mx-auto max-w-2xl space-y-3">
            {data.weaknesses.map((w) => (
              <div
                key={w}
                className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-5 py-3.5"
              >
                <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" />
                <span className="text-zinc-400">{w}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Developers Choose Remember */}
        <section className="mb-20">
          <h2 className="mb-8 text-center text-2xl font-semibold">
            Why Developers Choose Remember
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Free & Open Source",
                desc: "MIT licensed. No subscription, no vendor lock-in, no surprises.",
              },
              {
                title: "Local-First",
                desc: "Plain Markdown files on your machine. Works offline. You own everything.",
              },
              {
                title: "Bulk Session Processing",
                desc: "Extract knowledge from all your past Claude Code sessions retroactively.",
              },
              {
                title: "Adaptive Persona",
                desc: "Persona.md learns your coding patterns, preferences, and conventions.",
              },
              {
                title: "Auto-Organization",
                desc: "PARA + Zettelkasten structure applied automatically. No manual filing.",
              },
              {
                title: "Obsidian Compatible",
                desc: "Wikilinks, frontmatter, graph-ready. Use Obsidian as your UI if you want.",
              },
              {
                title: "Developer-First CLI",
                desc: "Works inside Claude Code. No context switching to a browser or app.",
              },
              {
                title: "Queryable Knowledge Base",
                desc: "Ask questions about your captured knowledge and get answers instantly.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <h3 className="font-medium">{item.title}</h3>
                </div>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">
            Ready to switch?
          </h2>
          <p className="mb-8 text-zinc-400">
            Remember is free, open source, and takes minutes to set up.
          </p>
          <a
            href="https://github.com/nicobailon/remember"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 px-8 py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            <Github className="h-5 w-5" />
            Get Remember on GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-zinc-500">
        <Link href="/" className="transition-colors hover:text-zinc-300">
          ← Back to remember homepage
        </Link>
        <span className="mx-3">·</span>
        <a
          href="https://github.com/nicobailon/remember"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-zinc-300"
        >
          GitHub
        </a>
        <p className="mt-3 text-zinc-600">
          Compare:{" "}
          {allSlugs.map((s, i) => (
            <span key={s}>
              {i > 0 && " · "}
              <Link
                href={`/vs/${s}`}
                className="transition-colors hover:text-zinc-400"
              >
                vs {competitors[s].name}
              </Link>
            </span>
          ))}
        </p>
      </footer>
    </div>
  );
}
