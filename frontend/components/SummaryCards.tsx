"use client";

import { motion } from "framer-motion";

import { CheckCircle2, XCircle, Sparkles, Clock3 } from "lucide-react";

type Props = {
  imported: number;
  skipped: number;
  processingTime: number;
};

export default function SummaryCards({
  imported,
  skipped,
  processingTime,
}: Props) {
  const cards = [
    {
      title: "Imported",
      value: imported,
      icon: CheckCircle2,
      color: "from-emerald-500 to-green-600",
      subtitle: "Successfully imported",
    },

    {
      title: "Skipped",
      value: skipped,
      icon: XCircle,
      color: "from-red-500 to-orange-500",
      subtitle: "Invalid records",
    },

    {
      title: "AI Accuracy",
      value:
        imported + skipped === 0
          ? "0%"
          : `${Math.round((imported / (imported + skipped)) * 100)}%`,
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      subtitle: "Gemini AI",
    },

    {
      title: "Time",
      value: processingTime === 0 ? "--" : `${processingTime}s`,
      icon: Clock3,
      color: "from-violet-500 to-indigo-600",
      subtitle: "Free Tier",
    },
  ];
  return (
    <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -6,
            }}
            className={`rounded-3xl bg-gradient-to-r ${card.color} p-6 text-white shadow-xl`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">{card.title}</p>

                <h2 className="mt-3 text-4xl font-black">{card.value}</h2>

                <p className="mt-3 text-sm opacity-90">{card.subtitle}</p>
              </div>

              <div className="rounded-2xl bg-white/20 p-4">
                <Icon size={32} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
