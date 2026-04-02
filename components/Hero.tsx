import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] pt-32 pb-48 lg:pb-56 px-6 overflow-hidden bg-gradient-to-b from-[#0a1526] via-navy to-[#060f1c] flex items-center">
      {/* Subtle Gradients on Navy Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-light-blue/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#004aad]/15 rounded-full blur-[140px] pointer-events-none -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8 relative z-10 w-full">
        
        {/* Left: Copy */}
        <div className="flex-1 w-full text-center lg:text-left z-10 mt-10 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white-grey/10 bg-white-grey/5 text-white-grey mb-8 backdrop-blur-sm">
            You have the skills. We have the alignment.
          </div>
          
          <h1 className="text-[3rem] md:text-[4.25rem] lg:text-[4.75rem] font-serif font-normal leading-[1.1] tracking-tight text-white mb-6">
            You have the skills,<br />
            <span className="italic text-light-blue">Let's get you <span className="text-blue-500">Hired</span>.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white-grey/70 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            We align your unique skills with local market demands so your application stands out from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="#" className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-[16px] hover:shadow-2xl transition-all shadow-xl hover:-translate-y-1">
              Start your resume audit
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-transparent text-white-grey font-semibold text-lg hover:bg-white-grey/10 transition-colors">
              See how it works
            </a>
          </div>
        </div>

        {/* Right: Scrapbook Visuals adapted for Dark Background */}
        <div className="flex-1 w-full relative min-h-[500px] flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-full max-w-[450px] aspect-[4/5] z-10">
            
            {/* Main Image */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-navy border-opacity-50 transition-transform hover:-translate-y-2 duration-500">
              <Image 
                src="/hero.png" 
                alt="Confident professional" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Subtle dark overlay to match the navy vibe */}
              <div className="absolute inset-0 bg-navy/10 pointer-events-none"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
