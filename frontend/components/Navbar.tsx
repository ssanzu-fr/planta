"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200 bg-[#f5f3ed]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
          <img
            src="/logo.svg"
            alt=""
            className="h-9 w-9 rounded-xl"
            aria-hidden="true"
          />
          <span>Planta.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="/" className="transition hover:text-green-700">
            Home
          </Link>

          <Link href="/shop" className="transition hover:text-green-700">
            Shop
          </Link>

          <Link href="/plant-finder" className="transition hover:text-green-700">
            Plant Finder
          </Link>

          <Link href="/plant-care" className="transition hover:text-green-700">
            Plant Care
          </Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="/shop"
            className="rounded-full border border-stone-300 px-5 py-2 text-sm font-medium transition hover:bg-stone-900 hover:text-white"
          >
            Explore Plants
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-700 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-stone-200 bg-[#f5f3ed] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4 text-base font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 transition hover:text-green-700"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 transition hover:text-green-700"
            >
              Shop
            </Link>

            <Link
              href="/plant-finder"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 transition hover:text-green-700"
            >
              Plant Finder
            </Link>

            <Link
              href="/plant-care"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 transition hover:text-green-700"
            >
              Plant Care
            </Link>

            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-block rounded-full bg-stone-900 px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Explore Plants
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
