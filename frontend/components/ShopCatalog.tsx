"use client";

import { useState, useMemo } from "react";
import { Plant } from "@/types/plant";
import PlantCard from "@/components/PlantCard";

interface ShopCatalogProps {
  initialPlants: Plant[];
}

export default function ShopCatalog({ initialPlants }: ShopCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [petFriendlyOnly, setPetFriendlyOnly] = useState(false);

  const categories = ["All", "Tropical", "Low Maintenance", "Indoor", "Succulents"];
  const difficulties = ["All", "Beginner", "Intermediate"];

  const filteredPlants = useMemo(() => {
    return initialPlants.filter((plant) => {
      // Search query match
      const matchesSearch =
        plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Category match
      const matchesCategory =
        selectedCategory === "All" || plant.category === selectedCategory;

      // Difficulty match
      const matchesDifficulty =
        selectedDifficulty === "All" || plant.difficulty === selectedDifficulty;

      // Pet friendly match
      const matchesPet = !petFriendlyOnly || plant.petFriendly;

      return matchesSearch && matchesCategory && matchesDifficulty && matchesPet;
    });
  }, [initialPlants, searchQuery, selectedCategory, selectedDifficulty, petFriendlyOnly]);

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "All" ||
    selectedDifficulty !== "All" ||
    petFriendlyOnly;

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedDifficulty("All");
    setPetFriendlyOnly(false);
  };

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="mb-10 space-y-6 rounded-3xl bg-white p-6 shadow-sm">
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search plants by name, category, or care..."
            className="w-full rounded-full border border-stone-200 bg-[#fdfcf9] px-6 py-3.5 pl-12 text-sm text-stone-800 placeholder-stone-400 transition focus:border-stone-900 focus:outline-none"
          />
          <span className="absolute left-4 top-3.5 text-lg text-stone-400">
            🔍
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-3 text-xs font-semibold text-stone-400 hover:text-stone-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills & Secondary Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                  selectedCategory === cat
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Difficulty & Pet Friendly */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Care:
              </span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 focus:border-stone-900 focus:outline-none"
              >
                {difficulties.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff === "All" ? "All Levels" : diff}
                  </option>
                ))}
              </select>
            </div>

            <label className="inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-stone-700">
              <input
                type="checkbox"
                checked={petFriendlyOnly}
                onChange={(e) => setPetFriendlyOnly(e.target.checked)}
                className="h-4 w-4 rounded border-stone-300 text-green-700 focus:ring-green-600"
              />
              🐾 Pet Friendly Only
            </label>
          </div>
        </div>

        {/* Active Filter summary */}
        <div className="flex items-center justify-between border-t border-stone-100 pt-4 text-xs text-stone-500">
          <span>
            Showing {filteredPlants.length}{" "}
            {filteredPlants.length === 1 ? "plant" : "plants"}
          </span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="font-medium text-green-700 hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>
      </div>

      {/* Plants Grid */}
      {filteredPlants.length > 0 ? (
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
          <p className="text-4xl">🪴</p>
          <h3 className="mt-4 text-xl font-semibold text-stone-800">
            No plants found
          </h3>
          <p className="mt-2 text-sm text-stone-500">
            Try adjusting your search query or relaxing your filters.
          </p>
          <button
            onClick={resetFilters}
            className="mt-6 rounded-full bg-stone-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-green-800"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
