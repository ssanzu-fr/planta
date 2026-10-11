"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f3ed] text-stone-800">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-6 text-7xl">🍂</div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
          Something went wrong
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          We encountered an unexpected error.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-stone-600">
          Don&apos;t worry, your plant journey isn&apos;t over. Try refreshing or
          head back to safety.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-full bg-stone-900 px-7 py-3.5 font-medium text-white shadow-sm transition hover:bg-green-800 hover:shadow"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-full border border-stone-300 bg-white px-7 py-3.5 font-medium transition hover:border-stone-900"
          >
            Go to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
