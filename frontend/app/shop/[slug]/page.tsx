import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlantCard from "@/components/PlantCard";
import { plants } from "@/data/plants";

export default async function PlantDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plant = plants.find((p) => p.slug === slug);

  if (!plant) {
    notFound();
  }

  // Related plants (same category or general recommendations, excluding current)
  const relatedPlants = plants
    .filter((p) => p.id !== plant.id)
    .slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f3ed] text-stone-800">
      <Navbar />

      <main className="mx-auto max-w-7xl flex-1 px-6 py-12 md:py-16">
        <Link
          href="/shop"
          className="mb-8 inline-flex items-center text-sm font-medium text-stone-600 transition hover:text-stone-900"
        >
          ← Back to Shop
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Plant Image */}
          <div className="relative">
            <img
              src={plant.image}
              alt={plant.name}
              className="h-[500px] w-full rounded-3xl object-cover shadow-xl shadow-stone-900/5 lg:h-[600px]"
            />
            {plant.petFriendly && (
              <div className="absolute left-6 top-6 rounded-full bg-green-800/90 px-4 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur">
                🐾 Pet Friendly
              </div>
            )}
          </div>

          {/* Plant Details */}
          <div className="flex flex-col">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-700">
                {plant.category}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
                {plant.name}
              </h1>
              <p className="mt-3 text-3xl font-bold text-stone-800">
                {plant.price}
              </p>
            </div>

            <p className="mt-6 leading-7 text-stone-600">{plant.description}</p>

            {/* Care Summary Card */}
            <div className="mt-8 space-y-3 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-base font-semibold text-stone-900">
                Care Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-3">
                  <span className="flex items-center gap-2 font-medium text-stone-700">
                    <span className="text-base">☀️</span> Light
                  </span>
                  <span className="text-right text-stone-600">{plant.light}</span>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-3">
                  <span className="flex items-center gap-2 font-medium text-stone-700">
                    <span className="text-base">💧</span> Watering
                  </span>
                  <span className="text-right text-stone-600">
                    {plant.watering}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-3">
                  <span className="flex items-center gap-2 font-medium text-stone-700">
                    <span className="text-base">🌱</span> Difficulty
                  </span>
                  <span className="text-right text-stone-600">
                    {plant.difficulty}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-3">
                  <span className="flex items-center gap-2 font-medium text-stone-700">
                    <span className="text-base">📏</span> Size
                  </span>
                  <span className="text-right text-stone-600">{plant.size}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="flex items-center gap-2 font-medium text-stone-700">
                    <span className="text-base">🐾</span> Pet Safe
                  </span>
                  <span className="text-right text-stone-600">
                    {plant.petFriendly ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <button className="rounded-full bg-stone-900 px-7 py-3.5 font-medium text-white shadow-sm transition hover:bg-green-800 hover:shadow">
                Add to Cart
              </button>
              <Link
                href="/plant-care"
                className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-center font-medium transition hover:border-stone-900"
              >
                Learn How to Care for This Plant
              </Link>
            </div>

            {/* Not sure which plant? */}
            <div className="mt-8 rounded-2xl bg-[#dfe8dc] p-6">
              <h3 className="text-sm font-semibold text-stone-900">
                Not sure if this is the right plant for you?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-600">
                Use our Plant Finder to get personalized recommendations based on
                your space, light, and experience level.
              </p>
              <Link
                href="/plant-finder"
                className="mt-4 inline-block text-xs font-semibold text-green-800 hover:underline"
              >
                Try Plant Finder →
              </Link>
            </div>
          </div>
        </div>

        {/* You Might Also Like */}
        <div className="mt-20 border-t border-stone-200/80 pt-16">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
              More to Discover
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
              You might also like
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {relatedPlants.map((relatedPlant) => (
              <PlantCard key={relatedPlant.id} plant={relatedPlant} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
