import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopCatalog from "@/components/ShopCatalog";
import { plants } from "@/data/plants";

export const metadata = {
  title: "Plant Shop — Browse All Houseplants | Planta.",
  description:
    "Explore our full collection of tropical, low maintenance, indoor, and succulent plants.",
};

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f3ed] text-stone-800">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 md:py-16">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Our Collection
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Plants for every room.
          </h1>
          <p className="mt-4 text-base leading-7 text-stone-600">
            Hand-selected, healthy indoor plants suited for all lighting conditions
            and experience levels. Every plant comes with simple care instructions.
          </p>
        </div>

        {/* Interactive Catalog */}
        <ShopCatalog initialPlants={plants} />
      </main>

      <Footer />
    </div>
  );
}
