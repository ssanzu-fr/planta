import Link from "next/link";

export default function PlantCareSection() {
  return (
    <section className="bg-stone-900 px-6 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
              Plant Care Guide
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Learn what your plant needs to thrive.
            </h2>

            <p className="mt-6 leading-7 text-stone-300">
              Get simple, practical care guidance for watering, sunlight, soil,
              and everyday plant health. No confusing jargon — just clear steps
              to keep your plants happy.
            </p>

            <Link
              href="/plant-care"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-medium text-stone-900 shadow-sm transition hover:bg-green-200"
            >
              Explore Plant Care
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
              <div className="mb-2 text-3xl">💧</div>
              <h3 className="font-semibold text-white">Watering</h3>
              <p className="mt-1 text-sm text-stone-400">
                Know when and how much
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
              <div className="mb-2 text-3xl">☀️</div>
              <h3 className="font-semibold text-white">Sunlight</h3>
              <p className="mt-1 text-sm text-stone-400">
                Find the right spot
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
              <div className="mb-2 text-3xl">🌱</div>
              <h3 className="font-semibold text-white">Soil & Feeding</h3>
              <p className="mt-1 text-sm text-stone-400">
                Nourish your plants
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
              <div className="mb-2 text-3xl">🩺</div>
              <h3 className="font-semibold text-white">Health</h3>
              <p className="mt-1 text-sm text-stone-400">
                Spot problems early
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
