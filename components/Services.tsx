export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#fdfaf6]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-serif text-[#1c1917] mb-4">
            A little extra help.
          </h2>
          <p className="text-lg text-[#78716c] max-w-xl mx-auto">
            Sometimes software isn't enough. Our experts are here to personally guide you through the cultural nuances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "1:1 Mentoring",
              desc: "Get on a call with experts who have actually successfully navigated the Korean hiring process as foreigners.",
              img: "☕️"
            },
            {
              title: "Expert Audit",
              desc: "Let a human recruiter review your AI-generated resume score to add that final, perfect polish.",
              img: "📝"
            },
            {
              title: "Live Workshops",
              desc: "Join small group sessions focusing on Korean interview etiquette, salary negotiation, and more.",
              img: "🎙️"
            }
          ].map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-[#e7e5e4] flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-6">{s.img}</div>
              <h3 className="text-xl font-serif text-[#1c1917] mb-3">{s.title}</h3>
              <p className="text-[#78716c] text-[1.05rem] leading-relaxed mb-8 flex-grow">{s.desc}</p>
              <a href="#" className="font-semibold text-[#1c1917] border-b border-[#1c1917] pb-1 hover:text-[#004aad] hover:border-[#004aad] transition-colors">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
