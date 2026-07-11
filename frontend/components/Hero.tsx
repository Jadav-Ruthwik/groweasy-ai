"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute left-20 top-10 h-80 w-80 rounded-full bg-cyan-300 blur-[150px] opacity-30" />

      <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-blue-400 blur-[150px] opacity-20" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex rounded-full border bg-white px-4 py-2 text-sm font-medium shadow"
        >
          🚀 AI Powered CRM Import
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-6xl font-black tracking-tight"
        >
          Transform Any CSV
          <br />
          Into CRM Ready Data
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-3xl text-xl text-slate-500"
        >
          Upload your CSV, let AI understand every column, automatically map
          fields, and import into GrowEasy CRM within seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center gap-6"
        >
          <a
            href="#upload"
            className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            🚀 Start Import
          </a>
        </motion.div>
      </div>
    </section>
  );
}
