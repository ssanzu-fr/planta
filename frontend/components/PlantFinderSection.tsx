import Link from "next/link";

export default function PlantFinderSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#dfe8dc] to-[#e8f0e5] shadow-lg md:grid-cols-2">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-800">
            Plant Finder
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Not sure what plant is right for you?
          </h2>

          <p className="mt-6 max-w-lg leading-7 text-stone-600">
            Tell us about your space, sunlight, experience, and how much time
            you want to spend caring for your plants. We&apos;ll recommend the
            perfect match.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/plant-finder"
              className="rounded-full bg-stone-900 px-7 py-3.5 font-medium text-white shadow-sm transition hover:bg-green-800 hover:shadow"
            >
              Build My Plant Profile
            </Link>
            <Link
              href="/shop"
              className="rounded-full border border-stone-300 bg-white px-7 py-3.5 font-medium transition hover:border-stone-900"
            >
              Browse All
            </Link>
          </div>
        </div>

        <div className="relative min-h-[350px] md:min-h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80"
            alt="Plants in a bright indoor space"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
