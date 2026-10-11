import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f3ed] text-stone-800">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-6 text-7xl">🪴</div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
          Page Not Found
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Looks like this leaf got lost.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-stone-600">
          The page or plant you&apos;re looking for doesn&apos;t exist or has
          been moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-stone-900 px-7 py-3.5 font-medium text-white shadow-sm transition hover:bg-green-800 hover:shadow"
          >
            Back to Home
          </Link>
          <Link
            href="/shop"
            className="rounded-full border border-stone-300 bg-white px-7 py-3.5 font-medium transition hover:border-stone-900"
          >
            Browse Plant Shop
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
