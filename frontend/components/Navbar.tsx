"use client";

import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-2 text-white">
            <Sparkles size={22} />
          </div>

          <div>
            <h1 className="font-bold text-xl">🚀 GrowEasy AI Importer</h1>

            <p className="text-xs text-slate-500">AI Powered CRM Migration</p>
          </div>
        </div>

        <div className="hidden gap-8 md:flex text-sm font-medium">
          <a
            href="#home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </a>
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>

          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          Assignment
        </button>
      </div>
    </nav>
  );
}
