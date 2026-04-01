export default function Problem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-[2.75rem] md:text-[3.5rem] font-serif leading-[1.1] text-[#1c1917] mb-6">
          "Why is it so hard to hear back?"
        </h2>
        <p className="text-xl text-[#78716c] max-w-2xl mb-16">
          You send out dozens of applications. Your skills are exactly what they need. But nothing happens. Sound familiar?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            {
              title: "Lost in translation",
              desc: "It’s not your language skills. It's that your resume doesn't speak the 'Korean corporate' format.",
              color: "bg-[#fef08a]/30",
            },
            {
              title: "The invisible mismatch",
              desc: "You’re highlighting what worked back home, but companies here are looking for completely different keywords.",
              color: "bg-[#e8eef8]",
            },
            {
              title: "The guessing game",
              desc: "Applying feels like throwing darts blindfolded. You don’t know why you were rejected, so you can't fix it.",
              color: "bg-[#fee2e2]/50",
            }
          ].map((item, i) => (
            <div key={i} className={`p-8 rounded-[2rem] flex flex-col text-left ${item.color}`}>
              <h3 className="text-xl font-serif font-medium text-[#1c1917] mb-4">{item.title}</h3>
              <p className="text-[15px] text-[#57534e] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
