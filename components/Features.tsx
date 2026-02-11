import { Brain, Lock, Code, FileText, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: '100% Deterministic Capture',
    description: 'Hooks-based capture means nothing gets missed. Not AI guessing.'
  },
  {
    icon: Lock,
    title: 'Privacy-First & Local',
    description: 'Your data lives on your machine, in Git-friendly markdown.'
  },
  {
    icon: Code,
    title: 'Free & Open Source',
    description: 'MIT licensed, community-driven, transparent development.'
  },
  {
    icon: FileText,
    title: 'Obsidian-Compatible',
    description: 'PARA + Zettelkasten structure, works with your existing workflow.'
  },
  {
    icon: Sparkles,
    title: 'AI-Native',
    description: 'Built for Claude Code, designed for AI collaboration.'
  }
]

export default function Features() {
  return (
    <section className="py-24 px-4">
      <h2 className="text-5xl font-bold text-center mb-16">What Makes Remember Different</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="p-6 border border-purple-900/50 rounded-lg hover:border-purple-600/50 transition">
            <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
