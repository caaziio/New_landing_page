export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Upload & Audit", desc: "Upload your current English or translated resume. Our engine scans it against 5,000+ local job profiles." },
    { num: "02", title: "Alignment Score", desc: "Get an instant, actionable score. See exactly what keywords and formatting you're missing for your target roles." },
    { num: "03", title: "Restructure", desc: "We map your experiences into the localized, corporate formats that Korean applicant tracking systems (ATS) prefer." },
    { num: "04", title: "Apply & Interview", desc: "Start sending applications with confidence. Your new profile speaks exactly what recruiters are looking for." }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-[#060f1c] via-navy to-[#081324] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-light-blue font-bold text-sm uppercase tracking-widest mb-4">The Process</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Four steps to a local offer.</h2>
          <p className="text-white-grey/70 max-w-2xl mx-auto text-lg leading-relaxed">A systematic approach to breaking down the cultural barrier between you and the Korean job market.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group">
              <span className="text-5xl font-black text-white/10 mb-6 block group-hover:text-blue-500 transition-colors">{step.num}</span>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white-grey/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
