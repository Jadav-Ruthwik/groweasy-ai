"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
            About
          </span>

          <h2 className="mt-6 text-5xl font-black">GrowEasy AI Importer</h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            GrowEasy AI Importer is an AI-powered CRM migration tool built to
            simplify CSV imports. It intelligently understands different CSV
            structures, maps fields using Gemini AI, validates records, and
            converts them into GrowEasy CRM compatible data with minimal manual
            effort.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-800 p-8">
            <Sparkles className="mb-4 text-cyan-400" size={36} />

            <h3 className="text-2xl font-bold">Technologies</h3>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li>• Next.js 15</li>
              <li>• Express.js</li>
              <li>• Gemini AI</li>
              <li>• Tailwind CSS</li>
              <li>• shadcn/ui</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-slate-800 p-8">
            <Mail className="mb-4 text-cyan-400" size={36} />

            <h3 className="text-2xl font-bold">Contact</h3>

            <p className="mt-5 text-slate-300">
              Feel free to reach out for feedback, collaboration, or project
              discussions.
            </p>

            <a
              href="mailto:23211a05b9@bvrit.ac.in"
              className="mt-6 block text-cyan-400 hover:underline"
            >
              23211a05b9@bvrit.ac.in
            </a>
          </div>

          <div className="rounded-3xl bg-slate-800 p-8">
            <FaGithub className="mb-4 text-cyan-400" size={36} />

            <h3 className="text-2xl font-bold">Connect</h3>

            <div className="mt-6 space-y-4">
              <a
                href="https://github.com/Jadav-Ruthwik"
                target="_blank"
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-400"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jadav-ruthwik/"
                target="_blank"
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-400"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
