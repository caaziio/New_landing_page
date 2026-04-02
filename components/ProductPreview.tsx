import Image from "next/image";

export default function ProductPreview() {
  return (
    <section className="py-24 px-6 bg-light-blue">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <p className="text-[#004aad] font-bold text-sm uppercase tracking-widest mb-4">Under the hood</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-6">Built exactly for the Korean ATS.</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            See instantly how your profile aligns with top roles at Samsung, Naver, Coupang, and more.
          </p>
        </div>

        <div className="w-full max-w-5xl bg-gradient-to-br from-[#0d1e38] via-navy to-[#081324] rounded-[2rem] p-4 md:p-8 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sidebar Mockup */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <div className="h-4 w-1/2 bg-white/20 rounded-full mb-4"></div>
              <div className="h-10 w-full bg-light-blue rounded-xl flex items-center px-4 font-bold text-[#004aad]">Global PM</div>
              <div className="h-10 w-full bg-white/5 rounded-xl flex items-center px-4 text-white-grey/60">Data Analyst</div>
              <div className="h-10 w-full bg-white/5 rounded-xl flex items-center px-4 text-white-grey/60">Frontend Dev</div>
            </div>

            {/* Main Dashboard Mockup */}
            <div className="col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-6 relative">
              <div className="flex justify-between items-center mb-4">
                <div className="w-3/4 h-8 bg-white/20 rounded-md"></div>
                <div className="w-16 h-16 rounded-full border-[6px] border-blue-500/30 border-r-blue-500 flex items-center justify-center -rotate-45">
                  <span className="text-white font-bold rotate-45">92%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-white/10 rounded-xl relative overflow-hidden">
                  <div className="absolute bottom-4 left-4 right-4 h-2 bg-white/20 rounded-full">
                    <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="h-32 bg-white/10 rounded-xl border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold p-4 text-center">
                  "Keyword match improved by 45%"
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
