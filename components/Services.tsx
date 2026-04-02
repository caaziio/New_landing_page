export default function Services() {
  const services = [
    {
      title: "Job in 60 days Challenge",
      desc: "An intensive, cohort-based program designed to get you from application to offer in just eight weeks.",
      img: "/services/job-challenge.png",
      cta: "Join challenge"
    },
    {
      title: "1:1 Coaching",
      desc: "Personalized sessions with industry insiders at top Korean companies to build your custom strategy.",
      img: "/services/coaching.png",
      cta: "Book a session"
    },
    {
      title: "Workshops",
      desc: "Interactive group sessions focusing on networking, cultural nuances, and high-stakes interviewing.",
      img: "/services/workshops.png",
      cta: "Explore workshops"
    }
  ];

  return (
    <section id="services" className="py-32 md:py-56 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-syne font-extrabold tracking-tighter leading-[1.1] uppercase max-w-4xl">
            Get additional <br />
            <span className="text-brand-blue italic font-serif lowercase tracking-normal">support.</span>
          </h2>
          <div className="mt-8 h-[1px] w-24 bg-brand-blue/30 mx-auto" />
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col rounded-[2rem] overflow-hidden border border-brand-blue/10 bg-white shadow-lg shadow-brand-blue/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
              {/* Image Container */}
              <div className="h-64 md:h-72 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Content Panel */}
              <div className="p-8 md:p-10 flex flex-col flex-1 items-start">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1a1a1a] mb-4 leading-tight uppercase font-syne">
                  {service.title}
                </h3>
                <p className="text-[#1a1a1a]/50 text-base leading-relaxed font-light mb-10 flex-1">
                  {service.desc}
                </p>
                <a
                  href="#"
                  className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-[16px] hover:shadow-xl transition-all active:scale-95 shadow-md"
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

