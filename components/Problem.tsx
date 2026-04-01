const problems = [
  {
    emoji: "📭",
    text: "You apply but get no response.",
  },
  {
    emoji: "🤷",
    text: "You don't know what companies actually want.",
  },
  {
    emoji: "📄",
    text: "Your resume doesn't match Korean expectations.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Why getting a job in Korea
          <br />
          feels impossible.
        </h2>
        <p className="text-gray-400 text-base mb-12">
          You're not alone. Most foreigners face the same wall.
        </p>

        <div className="flex flex-col gap-5">
          {problems.map((p) => (
            <div
              key={p.text}
              className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50/60 hover:border-gray-200 transition-colors"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{p.emoji}</span>
              <p className="text-gray-700 font-medium text-base leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
