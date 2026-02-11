"use client";

import { Github, Twitter, MessageSquare, BookOpen } from "lucide-react";

const links = [
  { label: "Documentation", href: "https://github.com/remember-md/remember#readme", icon: BookOpen },
  { label: "GitHub", href: "https://github.com/remember-md/remember", icon: Github },
  { label: "Discussions", href: "https://github.com/remember-md/remember/discussions", icon: MessageSquare },
  { label: "Twitter", href: "https://twitter.com/gabrielm", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg">Remember</span>
          <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-zinc-500">
            MIT License
          </span>
        </div>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </div>

        <p className="text-zinc-600 text-xs">
          Built with ❤️ for the AI-native developer workflow
        </p>
      </div>
    </footer>
  );
}
