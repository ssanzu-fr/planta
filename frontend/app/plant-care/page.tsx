import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VirtualPlant from "@/components/VirtualPlant";
import { CARE_GUIDES } from "@/data/careGuides";
import Link from "next/link";

export const metadata = {
  title: "Plant Care Guide — Learn How to Care for Your Plants | Planta.",
  description:
    "Simple, practical care guidance for watering, sunlight, soil, and everyday plant health. Keep your plants thriving with beginner-friendly tips.",
};

export default function PlantCarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f3ed] text-stone-800">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 md:py-16">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Care Guides
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            How to Care for Your Plants
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600">
            Everything you need to keep your houseplants healthy and thriving.
            No confusing jargon — just clear, practical guidance for real homes.
          </p>
        </div>

        {/* Interactive Virtual Plant Demo */}
        <div className="mb-16">
          <VirtualPlant />
        </div>

        {/* Care Guide Sections */}
        <div className="space-y-8">
          {CARE_GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="p-8 md:p-10">
                {/* Section Header */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="text-5xl">{guide.icon}</div>
                  <div>
                    <h2 className="text-2xl font-semibold text-stone-900">
                      {guide.title}
                    </h2>
                    <p className="mt-2 leading-7 text-stone-600">
                      {guide.description}
                    </p>
                  </div>
                </div>

                {/* Tips List */}
                <ul className="space-y-3 border-l-2 border-green-700/20 pl-6">
                  {guide.tips.map((tip, index) => (
                    <li key={index} className="text-sm leading-6 text-stone-700">
                      <span className="mr-2 font-semibold text-green-700">
                        •
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Browse Plants or Use Finder */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-[#dfe8dc] to-[#e8f0e5] p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-stone-900">
              Ready to find your plant?
            </h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Use our Plant Finder to get personalized recommendations based on
              your space, light, and lifestyle.
            </p>
            <Link
              href="/plant-finder"
              className="mt-4 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-800"
            >
              Find My Plant
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-stone-900">
              Browse our full collection
            </h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Explore all available plants with detailed care summaries for each
              one.
            </p>
            <Link
              href="/shop"
              className="mt-4 inline-block rounded-full border border-stone-300 px-6 py-3 text-sm font-medium transition hover:border-stone-900"
            >
              View Shop
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
