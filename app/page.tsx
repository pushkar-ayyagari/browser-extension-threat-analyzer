"use client";

import { useState } from "react";

export default function Home() {
  const [fileName, setFileName] = useState("");

  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold text-cyan-400">
          Chrome Extension Security Scanner
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Browser Extension Threat Analyzer
        </h1>

        <p className="mb-10 text-lg text-slate-300">
          Upload a Chrome extension ZIP file and generate a security risk report.
        </p>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
          <h2 className="mb-4 text-2xl font-semibold">Upload extension</h2>

          <input
            type="file"
            accept=".zip"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) {
                setFileName(file.name);
              }
            }}
            className="block w-full rounded-lg border border-slate-600 bg-slate-800 p-4 text-slate-200"
          />

          {fileName && (
            <p className="mt-4 text-green-400">
              Selected file: {fileName}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}