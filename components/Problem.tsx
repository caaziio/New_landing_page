export default function Problem() {
  return (
    <section className="py-24 md:py-40 px-6 overflow-hidden bg-[#fafafa]">
      <div className="max-w-[70rem] mx-auto flex flex-col">

        {/* Top Text (Hinge Style) */}
        <div className="w-full relative z-20">
          <h2 className="text-[1.75rem] md:text-[2.75rem] lg:text-[3.25rem] font-serif tracking-tight leading-[1.05] text-[#1b1b1b] max-w-4xl">
            Say goodbye to <span className="opacity-40 italic line-through decoration-1">endless</span><br />
            <span className="opacity-40 italic line-through decoration-1">rejection.</span>
          </h2>
        </div>

        {/* Bottom Right Content */}
        <div className="w-full flex justify-end mt-16 md:mt-24 relative">
          <div className="max-w-md relative z-10 pl-8 md:pl-12 border-l border-[#1b1b1b]/10">
            <p className="text-[#444] text-[15px] md:text-[17px] font-light leading-[1.7] mb-10">
              Acafo is built on the belief that foreign talent shouldn't be filtered out by simple formatting differences. We restructure your global experience into the exact corporate language Korean recruiters trust—so you can stop applying blind, and start interviewing.
            </p>

            <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-gradient text-white font-bold text-[16px] hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 shadow-lg">
              Learn our approach
            </a>
          </div>
        </div>
        {/* Problem Synthesis Quote */}
        <div className="mt-20 md:mt-24 pt-16 md:pt-20 border-t border-[#1b1b1b]/5 flex flex-col items-center text-center">
          <blockquote className="max-w-4xl flex flex-col items-center group">
            <div className="text-[4.5rem] font-serif text-brand-blue/25 select-none leading-none -mb-8">
              “
            </div>
            
            <h4 className="text-[1.5rem] md:text-[2.25rem] lg:text-[2.75rem] font-serif italic text-[#1b1b1b] leading-[1.3] tracking-tight relative px-4">
              The problem is not your skills. <br className="hidden md:block" />
              The problem is <span className="text-brand-blue not-italic font-bold">misalignment.</span>
            </h4>

            {/* Bottom Quote Icon */}
            <div className="text-[4.5rem] font-serif text-brand-blue/25 select-none leading-none mt-2">
              ”
            </div>
          </blockquote>
        </div>

      </div>
    </section>
  );
}
