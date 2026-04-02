export default function HowItWorks() {
  const steps = [
    { 
      title: "Discover your skills", 
      desc: "Our engine scans your background against 5,000+ local job profiles to find your unique strengths.",
      img: "/how-it-works/step1.png",
      color: "bg-[#fffce8]" // Soft Yellow
    },
    { 
      title: "Build a market-ready resume", 
      desc: "Restructure your global experience into the exact corporate formats Korean recruiters trust.",
      img: "/how-it-works/step2.png",
      color: "bg-[#eff9ff]" // Soft Blue
    },
    { 
      title: "Optimize your resume", 
      desc: "Receive an instant alignment score against real-time market data and local hiring trends.",
      img: "/how-it-works/step3.png",
      color: "bg-[#eff6ff]" // Soft Blue to match gauge
    },
    { 
      title: "Access targeted job opportunities", 
      desc: "Start applying to curated roles where your restructured profile is already at the top of the pile.",
      img: "/how-it-works/step4.png",
      color: "bg-[#f0fdf4]" // Soft Green
    }
  ];

  return (
    <section id="how-it-works" className="py-32 md:py-64 px-6 bg-light-blue overflow-hidden text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        
        {/* Redesigned Header */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-syne font-extrabold tracking-tighter leading-[1.1] uppercase max-w-4xl">
            How Acafo <br />
            <span className="text-brand-blue italic font-serif lowercase tracking-normal">works.</span>
          </h2>
          <div className="mt-8 h-[1px] w-24 bg-brand-blue/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col rounded-[2rem] overflow-hidden border border-brand-blue/15 bg-white shadow-lg shadow-brand-blue/5 transition-all duration-500 hover:shadow-2xl hover:border-brand-blue/30 hover:-translate-y-2 group">
              
              {/* Top Half: Illustration Container */}
              <div className={`h-72 flex items-center justify-center overflow-hidden border-b border-brand-blue/10 ${step.color}`}>
                <img 
                  src={step.img} 
                  alt={step.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms] ease-out" 
                />
              </div>

              {/* Bottom Half: Text Content */}
              <div className="flex-1 p-8 flex flex-col items-start bg-white">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1a1a1a] mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#1a1a1a]/50 text-base leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="mt-20 md:mt-32 pt-20 border-t border-brand-blue/10 flex justify-center">
            <a 
                href="#services" 
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-brand-gradient text-white font-bold text-[16px] hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 shadow-lg"
            >
                View our services
            </a>
        </div>
      </div>
    </section>
  );
}




