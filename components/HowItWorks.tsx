const steps = [
  {
    number: "01",
    title: "Discover your skills",
    description:
      "Extract hidden skills from your life experiences, projects, and work history.",
  },
  {
    number: "02",
    title: "Build a market-ready resume",
    description:
      "Create a Korean-style CV tailored to what employers actually look for.",
  },
  {
    number: "03",
    title: "Get your resume scored",
    description:
      "Receive an alignment score with specific, actionable improvements.",
  },
  {
    number: "04",
    title: "Access aligned jobs",
    description:
      "See roles matched to your actual profile — not just keywords.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <p className="text-xs uppercase font-bold tracking-widest text-[#004aad] mb-3">
            The system
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            How Acafo works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-[#004aad]/30 hover:bg-[#e8eef8]/30 transition-all"
            >
              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-px h-0 border-t border-dashed border-gray-200 translate-x-1/2" />
              )}

              <span className="text-3xl font-black text-[#004aad]/15 leading-none">
                {step.number}
              </span>
              <h3 className="text-base font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
