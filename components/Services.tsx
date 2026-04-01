const services = [
  {
    id: "mentoring",
    icon: "💬",
    title: "Mentoring",
    description:
      "1-on-1 sessions with career experts who know the Korean job market. Get personalized guidance tailored to your background.",
    cta: "Book a Session",
  },
  {
    id: "resume-audit",
    icon: "🔍",
    title: "Resume Audit",
    description:
      "Submit your resume for a detailed expert review. Receive a score, gap analysis, and concrete action steps.",
    cta: "Audit My Resume",
  },
  {
    id: "workshops",
    icon: "🎓",
    title: "Workshops",
    description:
      "Live and recorded workshops on Korean workplace culture, job applications, and interview techniques.",
    cta: "See Workshops",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p className="text-xs uppercase font-bold tracking-widest text-[#004aad] mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Get additional support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col p-7 rounded-2xl border border-gray-100 hover:border-[#004aad]/30 hover:shadow-md transition-all bg-white"
            >
              <span className="text-3xl mb-5">{service.icon}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-6">
                {service.description}
              </p>
              <a
                href="#"
                id={`service-${service.id}`}
                className="inline-flex items-center text-sm font-semibold text-[#004aad] hover:underline"
              >
                {service.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
