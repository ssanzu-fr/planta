import Link from "next/link";
import { plants } from "@/data/plants";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PlantCard from "@/components/PlantCard";
import PlantFinderSection from "@/components/PlantFinderSection";
import PlantCareSection from "@/components/PlantCareSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3ed] text-stone-800">
      <Navbar />

      <Hero />

      <HowItWorks />

      {/* Featured Plants */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Featured Collection
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Plants for every kind of space.
              </h2>
            </div>

            <Link
              href="/shop"
              className="font-medium text-green-800 hover:underline"
            >
              View all plants →
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {plants.slice(0, 3).map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      </section>

      <PlantFinderSection />

      <PlantCareSection />

      <Footer />
    </main>
  );
}
