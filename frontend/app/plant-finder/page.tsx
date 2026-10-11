import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlantFinderFlow from "@/components/PlantFinderFlow";
import { plants } from "@/data/plants";

export const metadata = {
  title: "Plant Finder — Get Personalized Plant Recommendations | Planta.",
  description:
    "Answer a few simple questions and discover plants perfectly suited to your space, light, and lifestyle.",
};

export default function PlantFinderPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f3ed] text-stone-800">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 md:py-16">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Interactive Tool
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Find Your Perfect Plant
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600">
            Answer a few quick questions about your space, light, and lifestyle.
            We&apos;ll match you with plants that will actually thrive in your home.
          </p>
        </div>

        {/* Interactive Questionnaire */}
        <PlantFinderFlow plants={plants} />
      </main>

      <Footer />
    </div>
  );
}
