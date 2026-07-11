"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  DatabaseZap,
  ShieldCheck,
  ChartColumnBig,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI Column Detection",
      description:
        "Automatically understands any CRM CSV structure without requiring manual field mapping.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: DatabaseZap,
      title: "Smart CRM Mapping",
      description:
        "Converts uploaded CSV records into GrowEasy CRM compatible data using Gemini AI.",
      color: "from-violet-500 to-indigo-600",
    },
    {
      icon: ShieldCheck,
      title: "Secure Processing",
      description:
        "Your CSV is processed securely with validation, ensuring reliable imports and fewer errors.",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: ChartColumnBig,
      title: "Import Analytics",
      description:
        "Instantly view imported records, skipped entries, processing time, and AI accuracy.",
      color: "from-orange-500 to-red-500",
    },
  ];
  return (
    <section id="features" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Features
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Everything You Need
            <br />
            For AI Powered CRM Imports
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            GrowEasy AI automatically understands your CRM exports, maps fields
            intelligently, validates records, and prepares clean CRM-ready data
            within seconds.
          </p>
        </motion.div>
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
              >
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${feature.color} p-5 text-white`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">{feature.title}</h3>

                <p className="mt-4 leading-8 text-slate-500">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
