import Link from "next/link";
import { Plant } from "@/types/plant";

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-stone-800 shadow-sm backdrop-blur-sm">
          {plant.difficulty}
        </div>
      </div>

      <div className="p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-700">
          {plant.category}
        </p>

        <h3 className="text-xl font-semibold text-stone-800">{plant.name}</h3>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-bold text-stone-800">
            {plant.price}
          </span>

          <Link
            href={`/shop/${plant.slug}`}
            className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-800"
          >
            View Plant
          </Link>
        </div>
      </div>
    </article>
  );
}
