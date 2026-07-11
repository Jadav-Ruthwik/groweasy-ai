"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import api from "@/lib/api";

import {
  UploadCloud,
  FileSpreadsheet,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import CsvDropzone from "./CsvDropzone";
import CsvPreview from "./CsvPreview";
import ImportResults from "./ImportResults";
import ProgressOverlay from "./ProgressOverlay";
import SummaryCards from "./SummaryCards";

import { parseCsv } from "@/lib/parseCsv";

export default function UploadCard() {
  const [file, setFile] = useState<File | null>(null);

  const [rows, setRows] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<any>(null);

  const [progress, setProgress] = useState(0);

  const [processingTime, setProcessingTime] = useState(0);

  useEffect(() => {
    if (!loading) {
      setProgress(0);
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;

        return Math.min(prev + Math.floor(Math.random() * 8 + 3), 95);
      });
    }, 700);

    return () => clearInterval(timer);
  }, [loading]);

  const handleFile = async (selectedFile: File) => {
    setFile(selectedFile);

    const parsed = await parseCsv(selectedFile);

    setRows(parsed);

    setResult(null);
  };

  const handleImport = async () => {
    if (!file) return;

    setLoading(true);
    const startTime = Date.now();

    // setStartedAt(startTime);
    setProgress(5);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const response = await api.post("/import", formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

      setProgress(100);

      const seconds = (Date.now() - startTime) / 1000;

      setProcessingTime(Number(seconds.toFixed(1)));

      setTimeout(() => {
        setResult(response.data);

        setLoading(false);
      }, 600);
    } catch (error) {
      console.error(error);

      toast.error("Import failed.");

      setLoading(false);

      setProgress(0);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="overflow-hidden rounded-[32px] border-0 bg-white shadow-2xl">
          <CardContent className="p-10">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                <UploadCloud size={40} />
              </div>

              <h2 className="text-4xl font-black">Upload Your CRM CSV</h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                Drag & drop your CRM export below. AI will automatically detect
                the columns, understand your data, and convert everything into
                GrowEasy CRM format.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-white p-10 transition-all hover:border-blue-500 hover:shadow-lg">
              <CsvDropzone onFileSelect={handleFile} />
            </div>

            {file && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-emerald-100 p-4">
                    <FileSpreadsheet size={34} className="text-emerald-700" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{file.name}</h3>

                    <p className="text-slate-500">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>

                  <CheckCircle2 className="text-green-600" size={34} />
                </div>
              </motion.div>
            )}
            {rows.length > 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <CsvPreview rows={rows} />
              </motion.div>
            )}

            {rows.length > 0 && !loading && (
              <div className="mt-10 flex justify-center">
                <Button
                  size="lg"
                  onClick={handleImport}
                  className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-7 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <Sparkles className="mr-3" size={22} />
                  Confirm AI Import
                </Button>
              </div>
            )}
            {loading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <ProgressOverlay progress={progress} />
              </motion.div>
            )}

            {result && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12"
              >
                <SummaryCards
                  imported={result.imported}
                  skipped={result.skipped}
                  processingTime={processingTime}
                />

                <ImportResults data={result} />
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
