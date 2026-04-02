export default function Insight() {
  return (
    <section className="py-24 px-6 bg-light-blue">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-8">
        <div className="flex-1 w-full order-2 md:order-1 relative min-h-[400px]">
          <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-xl p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold">1</div>
              <span className="text-xs font-semibold text-muted uppercase tracking-widest px-3 py-1 bg-white-grey rounded-full border border-light-blue">Data Insight</span>
            </div>
            <div>
              <p className="text-[3rem] font-bold text-navy leading-none mb-2 tracking-tight">80<span className="text-blue-500">%</span></p>
              <p className="text-muted text-lg">of foreign applicants are rejected due to formatting mismatch, not lack of skill.</p>
            </div>
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight mb-6">
            The invisible <span className="text-blue-500">filter</span> you didn't know existed.
          </h2>
          <p className="text-xl text-muted leading-relaxed mb-8">
            Korean corporate recruiting is heavily structured. If your resume doesn't align with local expectations, it's often ignored before a human ever reads it. We fix that translation error.
          </p>
        </div>
      </div>
    </section>
  );
}
