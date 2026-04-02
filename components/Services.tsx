import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white-grey">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#004aad] font-bold text-sm uppercase tracking-widest mb-4">Our Services</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-16">Everything you need to land the job.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Service 1 */}
          <div className="bg-white border border-light-blue p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-light-blue text-[#004aad] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold shadow-inner">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Instant Resume Audit</h3>
            <p className="text-muted leading-relaxed mb-6">Run your current resume through our engine to get an immediate Alignment Score and see where ATS systems are dropping you.</p>
            <a href="#" className="font-bold text-[#004aad] hover:underline">Start free scan →</a>
          </div>

          {/* Service 2 */}
          <div className="bg-gradient-to-br from-navy via-[#12284b] to-navy border border-white/5 p-8 rounded-[2rem] shadow-xl hover:-translate-y-1 transition-all text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="w-16 h-16 bg-white/10 border border-white/20 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold backdrop-blur-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Translation & Formatting</h3>
            <p className="text-white-grey/80 leading-relaxed mb-6">Our experts manually restructure your global profile into the perfect localized layout and corporate language.</p>
            <a href="#" className="font-bold text-light-blue hover:text-white transition-colors">View details →</a>
          </div>

          {/* Service 3 */}
          <div className="bg-white border border-light-blue p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-light-blue text-[#004aad] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold shadow-inner">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">1:1 Mentoring</h3>
            <p className="text-muted leading-relaxed mb-6">Sit down with industry insiders at top Korean tech companies to build a strategy and prep for interviews.</p>
            <a href="#" className="font-bold text-[#004aad] hover:underline">Meet mentors →</a>
          </div>
        </div>

      </div>
    </section>
  );
}
