import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, #dce9ff 0%, #eef3ff 35%, #ffffff 70%)",
        }}
      />

      {/* Faint decorative ring */}
      <div
        className="absolute -z-10 opacity-10"
        style={{
          right: "-10%",
          top: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "80px solid #004aad",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center w-full">
        {/* ── LEFT: Copy ── */}
        <div className="flex flex-col items-start">
          {/* Label badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004aad]/10 text-[#004aad] text-xs font-semibold uppercase tracking-widest mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004aad] inline-block" />
            AI-Powered Job Alignment for Korea
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-6">
            Get hired in Korea
            <br />
            <span className="text-[#004aad]">as a foreigner.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-500 leading-relaxed max-w-md mb-10">
            Acafo aligns your skills with real market demand so you stop
            guessing and start getting interviews.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href="#"
              id="hero-start-free"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-[#004aad] text-white font-semibold text-base hover:bg-[#003a8c] transition-colors shadow-md shadow-[#004aad]/20"
            >
              Start Free
            </a>
            <a
              href="#"
              id="hero-check-resume"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl border border-gray-200 bg-white text-gray-700 font-semibold text-base hover:border-[#004aad] hover:text-[#004aad] transition-colors"
            >
              Check My Resume →
            </a>
          </div>

          {/* Social proof micro-line */}
          <p className="mt-8 text-sm text-gray-400">
            Trusted by{" "}
            <span className="font-semibold text-gray-600">500+ foreigners</span>{" "}
            building their careers in Korea.
          </p>
        </div>

        {/* ── RIGHT: Image ── */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Floating card: Resume Score */}
          <div className="absolute -top-4 -left-4 lg:-left-8 z-10 bg-white rounded-2xl shadow-lg shadow-gray-200/80 px-4 py-3 flex items-center gap-3 border border-gray-100">
            <div className="w-9 h-9 rounded-full bg-[#004aad]/10 flex items-center justify-center text-[#004aad] font-black text-sm">
              78
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800">Resume Score</p>
              <p className="text-[10px] text-gray-400">Market alignment: High</p>
            </div>
          </div>

          {/* Floating card: Job matches */}
          <div className="absolute -bottom-4 right-4 lg:-bottom-6 z-10 bg-white rounded-2xl shadow-lg shadow-gray-200/80 px-4 py-3 border border-gray-100">
            <p className="text-xs font-bold text-gray-800 mb-2">Best Match Jobs</p>
            <div className="flex flex-col gap-1">
              {["Global Coordinator · 94%", "HR Specialist · 88%"].map((j) => (
                <div
                  key={j}
                  className="flex items-center gap-2 text-[10px] text-gray-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004aad] flex-shrink-0" />
                  {j}
                </div>
              ))}
            </div>
          </div>

          {/* Main photo */}
          <div className="relative w-full max-w-sm lg:max-w-none lg:w-[520px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#004aad]/10">
            <Image
              src="/hero.png"
              alt="Foreign professional working in a modern Seoul office"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle blue tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#004aad]/5 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
