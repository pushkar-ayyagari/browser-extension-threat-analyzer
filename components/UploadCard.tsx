"use client";

import { useState } from "react";
import { readZipFile } from "@/lib/zip/readZip";

export default function UploadCard() {
  const [fileName, setFileName] = useState("");
  const [zipFiles, setZipFiles] = useState<string[]>([]);

  async function handleFileUpload(file: File) {
    setFileName(file.name);

    const files = await readZipFile(file);
    setZipFiles(files);
  }

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
      <h2 className="mb-4 text-2xl font-semibold">Upload extension</h2>

      <input
        type="file"
        accept=".zip"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            handleFileUpload(file);
          }
        }}
        className="block w-full rounded-lg border border-slate-600 bg-slate-800 p-4 text-slate-200"
      />

      {fileName && (
        <p className="mt-4 text-green-400">Selected file: {fileName}</p>
      )}

      {zipFiles.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-2 text-xl font-semibold">Files found in ZIP</h3>

          <ul className="max-h-64 overflow-y-auto rounded-lg border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300">
            {zipFiles.map((file) => (
              <li key={file} className="border-b border-slate-800 py-1">
                {file}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}