import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div>
        <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-stone-900 md:text-7xl">
          Bring a little more life into your space.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
          Discover plants that fit your lifestyle, space, and experience — then
          learn how to care for them properly.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/plant-finder"
            className="rounded-full bg-stone-900 px-7 py-3.5 font-medium text-white shadow-sm transition hover:bg-green-800 hover:shadow"
          >
            Find My Plant
          </Link>

          <Link
            href="/shop"
            className="rounded-full border border-stone-300 bg-white px-7 py-3.5 font-medium transition hover:border-stone-900"
          >
            Browse Shop
          </Link>
        </div>

        {/* Value props */}
        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-200/80 pt-8 text-left">
          <div>
            <p className="text-2xl font-bold text-stone-900">50+</p>
            <p className="mt-1 text-xs text-stone-500">Plant Varieties</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-stone-900">100%</p>
            <p className="mt-1 text-xs text-stone-500">Care Guidance</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-stone-900">Free</p>
            <p className="mt-1 text-xs text-stone-500">Plant Matching</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=80"
          alt="Green houseplants"
          className="h-[520px] w-full rounded-[3rem] object-cover shadow-xl shadow-stone-900/5"
        />
      </div>
    </section>
  );
}
