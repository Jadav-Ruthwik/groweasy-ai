"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

type Props = {
  progress: number;
};

export default function ProgressOverlay({ progress }: Props) {
  const messages = [
    "Uploading CSV...",
    "Reading CSV records...",
    "Detecting CRM columns...",
    "Connecting to Gemini AI...",
    "Generating CRM data...",
    "Finalizing import...",
  ];

  let message = messages[0];

  if (progress >= 20) message = messages[1];
  if (progress >= 40) message = messages[2];
  if (progress >= 60) message = messages[3];
  if (progress >= 80) message = messages[4];
  if (progress >= 98) message = messages[5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-10 rounded-3xl border bg-white p-8 shadow-xl"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">AI Processing</h2>

        <span className="text-3xl font-black text-blue-600">{progress}%</span>
      </div>

      <Progress value={progress} className="mt-6 h-3" />

      <p className="mt-6 text-lg font-medium">{message}</p>

      <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
        <p className="text-sm text-blue-800">
          🤖 Free-tier Gemini API detected.
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Processing may take a little longer depending on file size. Please
          keep this tab open. Your import will continue automatically and the
          results will appear as soon as processing finishes.
        </p>
      </div>
    </motion.div>
  );
}
