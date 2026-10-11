export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Browse our collection of carefully selected plants.",
    },
    {
      number: "02",
      title: "Find Your Match",
      description: "Use our Plant Finder to get personalized recommendations.",
    },
    {
      number: "03",
      title: "Learn to Care",
      description: "Get simple, practical care guidance for your plant.",
    },
    {
      number: "04",
      title: "Bring It Home",
      description: "Add your perfect plant to your space and watch it thrive.",
    },
  ];

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            How It Works
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Find plants that fit your life.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mb-4 text-5xl font-bold text-green-700/20">
                {step.number}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-stone-800">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-stone-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
