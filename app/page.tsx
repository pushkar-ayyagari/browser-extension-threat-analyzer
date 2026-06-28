import UploadCard from "@/components/UploadCard";

export default function Home() {
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

        <UploadCard />
      </section>
    </main>
  );
}
