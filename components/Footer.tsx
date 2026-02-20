"use client";

import { Github, FileText, History } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/remember-md", icon: Github },
  { label: "Docs", href: "https://github.com/remember-md/remember#readme", icon: FileText },
  { label: "Changelog", href: "https://github.com/remember-md/remember/releases", icon: History },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[10px] font-bold">
            R
          </span>
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
          Made by{" "}
          <a
            href="https://github.com/remember-md"
            className="text-zinc-500 hover:text-zinc-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            remember-md
          </a>
        </p>
      </div>
    </footer>
  );
}
