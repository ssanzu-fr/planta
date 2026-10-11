import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 px-6 py-12 text-stone-400 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white">
              Planta.
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6">
              Helping you find plants that fit your lifestyle. Browse, discover,
              and learn how to care for your perfect plant.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Shop
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="transition hover:text-white">
                  All Plants
                </Link>
              </li>
              <li>
                <Link href="/shop" className="transition hover:text-white">
                  Low Maintenance
                </Link>
              </li>
              <li>
                <Link href="/shop" className="transition hover:text-white">
                  Pet Friendly
                </Link>
              </li>
              <li>
                <Link href="/shop" className="transition hover:text-white">
                  Beginner Plants
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Tools & Guides
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/plant-finder"
                  className="transition hover:text-white"
                >
                  Plant Finder
                </Link>
              </li>
              <li>
                <Link
                  href="/plant-care"
                  className="transition hover:text-white"
                >
                  Plant Care Guide
                </Link>
              </li>
              <li>
                <Link href="/" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 text-xs md:flex-row">
          <p>&copy; 2026 Planta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
