import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-28 pb-20">
      {/* Soft decorative background shape */}
      <div
        className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] opacity-40 mix-blend-multiply blur-3xl rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #eef3ff 0%, transparent 70%)",
          transform: "translate(30%, -20%)"
        }}
      />
      <div
        className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] opacity-30 mix-blend-multiply blur-3xl rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fef08a 0%, transparent 70%)",
          transform: "translate(-30%, 30%)"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-12 items-center w-full">
        {/* ── LEFT: Storytelling Copy ── */}
        <div className="flex flex-col items-start pt-8 lg:pt-0">
          <div className="inline-block px-4 py-2 rounded-full border border-[#e7e5e4] bg-white/60 backdrop-blur-sm text-[#78716c] text-[13px] font-medium mb-8 shadow-sm">
            👋 Designed for foreign talent in Korea
          </div>

          <h1 className="text-[3.5rem] md:text-[4.5rem] font-serif font-normal leading-[1.05] tracking-[-0.02em] text-[#1c1917] mb-8">
            You have the skills.<br />
            Let’s get you <span className="italic text-[#004aad]">hired</span>.
          </h1>

          <p className="text-[1.15rem] md:text-[1.25rem] text-[#78716c] leading-[1.6] max-w-lg mb-12 font-sans font-normal">
            Korean companies are looking for your exact experience. We just translate your background into what they actually want to see. Start matching, stop guessing.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto">
            <a
              href="#"
              id="hero-start-free"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#1c1917] text-white font-medium text-lg hover:bg-[#333] transition-all hover:-translate-y-1 shadow-lg active:translate-y-0"
            >
              Start Your Profile
            </a>
            <a
              href="#"
              id="hero-check-resume"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-[#e7e5e4] text-[#1c1917] font-medium text-lg hover:border-[#1c1917] transition-all"
            >
              Audit My Resume
            </a>
          </div>
        </div>

        {/* ── RIGHT: Authentic Photography & Scrapbook UI ── */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main photo inside a soft imperfect frame */}
          <div className="relative w-[340px] h-[460px] md:w-[420px] md:h-[540px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#1c1917]/10 -rotate-2 bg-white p-3">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <Image
                src="/hero.png"
                alt="A smiling foreign professional working in a Seoul office"
                fill
                className="object-cover object-center scale-105"
                priority
              />
            </div>
          </div>

          {/* Chat bubble overlay */}
          <div className="absolute top-[10%] -left-8 md:-left-16 z-10 bg-white rounded-2xl rounded-tr-sm shadow-xl shadow-[#1c1917]/5 p-4 border border-[#e7e5e4] rotate-3 max-w-[220px]">
            <p className="text-[13px] font-medium text-[#1c1917] leading-snug">
              "My resume score went up 40% after fixing my alignment. Got the interview!"
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#fef08a] flex items-center justify-center text-[10px]">✨</div>
              <span className="text-[11px] text-[#78716c]">Sarah, UX Designer</span>
            </div>
          </div>

          {/* Match overlay */}
          <div className="absolute bottom-[10%] -right-4 md:-right-8 z-10 bg-white rounded-full shadow-xl shadow-[#1c1917]/5 pl-3 pr-5 py-3 border border-[#e7e5e4] -rotate-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#004aad] text-white flex items-center justify-center">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#1c1917]">Great Match</p>
              <p className="text-[12px] text-[#78716c]">Global PM Role</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
