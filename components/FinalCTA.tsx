export default function FinalCTA() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto bg-[#e8eef8] rounded-[3rem] p-12 md:p-20 text-center relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#004aad]/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-[3rem] md:text-[4rem] font-serif text-[#1c1917] leading-[1.1] mb-6 relative z-10">
          Ready to meet <br />your match?
        </h2>
        <p className="text-[#57534e] text-lg md:text-xl mb-10 max-w-md mx-auto relative z-10">
          Upload your resume in seconds and see exactly where you stand in the Korean job market.
        </p>

        <a
          href="#"
          className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#1c1917] text-white font-medium text-lg hover:bg-[#333] transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-[#1c1917]/10 relative z-10"
        >
          Check My Resume
        </a>
      </div>
    </section>
  );
}
