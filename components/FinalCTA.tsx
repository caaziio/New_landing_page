export default function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-white flex justify-center items-center">
      <div className="max-w-4xl w-full bg-gradient-to-br from-[#102442] to-[#060e1c] rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden border border-white/5">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-light-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-[4rem] font-bold tracking-tight text-white leading-tight mb-8">
            Your next offer <br/><span className="text-light-blue">starts here.</span>
          </h2>
          <p className="text-xl text-white-grey/80 mb-12 max-w-xl mx-auto leading-relaxed">
            Stop letting translation errors hold your career back. Find out exactly where you stand with local recruiters today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="w-full sm:w-auto px-8 py-4 rounded-full bg-light-blue text-navy font-bold text-lg hover:bg-white transition-all shadow-xl hover:-translate-y-1">
              Audit My Resume — Free
            </a>
            <p className="text-sm text-white-grey/50 mt-4 sm:mt-0 sm:ml-4">Takes 2 minutes. No credit card required.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
