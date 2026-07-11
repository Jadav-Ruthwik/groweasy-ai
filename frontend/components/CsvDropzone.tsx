"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

type Props = {
  onFileSelect: (file: File) => void;
};

export default function CsvDropzone({ onFileSelect }: Props) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "text/csv": [".csv"],
    },
    multiple: false,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`mt-8 cursor-pointer rounded-xl border-2 border-dashed p-10 text-center transition ${
        isDragActive
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 hover:border-blue-400"
      }`}
    >
      <input {...getInputProps()} />

      <Upload className="mx-auto h-12 w-12 text-gray-400" />

      <p className="mt-4 text-lg font-medium">
        {isDragActive ? "Drop your CSV here..." : "Drag & Drop CSV here"}
      </p>

      <p className="mt-2 text-sm text-gray-500">or click to browse</p>
    </div>
  );
}
