const stats = [
  { number: "500+", label: "Foreign job seekers helped" },
  { number: "300+", label: "Consultations conducted" },
  { number: "5,000+", label: "Job posts analyzed" },
];

export default function Trust() {
  return (
    <section className="border-y border-gray-100 bg-gray-50/50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-extrabold text-[#004aad]">
                {stat.number}
              </span>
              <span className="text-sm text-gray-500 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
