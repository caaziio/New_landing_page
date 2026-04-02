export default function Trust() {
  return (
    <section className="relative z-30 px-6 -mt-16 md:-mt-24 pb-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Floating Glass/Pill UI straddling the sections */}
        <div className="bg-white rounded-[2rem] border border-white/60 shadow-[0_30px_60px_-20px_rgba(0,74,173,0.25)] py-10 px-6 lg:px-12 backdrop-blur-3xl transform hover:-translate-y-1 transition-transform duration-500">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x divide-light-blue items-center text-center">
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-[2.5rem] lg:text-[3.25rem] font-black tracking-tighter text-navy leading-none">
                300<span className="text-blue-500">+</span>
              </span>
              <span className="text-[15px] font-semibold text-[#004aad] mt-3">
                1:1 Consultations
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-[2.5rem] lg:text-[3.25rem] font-black tracking-tighter text-navy leading-none">
                6<span className="text-xl text-blue-500 ml-1 tracking-tight font-bold">wks</span>
              </span>
              <span className="text-[15px] font-semibold text-[#004aad] mt-3">
                To 1st interview
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-[2.5rem] lg:text-[3.25rem] font-black tracking-tighter text-navy leading-none">
                &lt;90<span className="text-xl text-blue-500 ml-1 tracking-tight font-bold">days</span>
              </span>
              <span className="text-[15px] font-semibold text-[#004aad] mt-3">
                To land offer
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-[2.5rem] lg:text-[3.25rem] font-black tracking-tighter text-navy leading-none">
                35<span className="text-xl text-blue-500 ml-1 tracking-tight font-bold">M+</span>
              </span>
              <span className="text-[15px] font-semibold text-[#004aad] mt-3">
                Avg. salary (KRW)
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
