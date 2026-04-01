export default function Trust() {
  return (
    <section className="py-20 px-6 bg-white rounded-[3rem] mx-4 mb-20 shadow-soft border border-[#e7e5e4]/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-serif text-xl italic text-[#78716c] mb-12">
          Join the community of expats navigating their career journey with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-[#e7e5e4]">
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <span className="text-4xl font-serif text-[#1c1917] mb-2">500+</span>
            <span className="text-[15px] text-[#78716c]">Foreign talent matched</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <span className="text-4xl font-serif text-[#1c1917] mb-2">300+</span>
            <span className="text-[15px] text-[#78716c]">Career consultations</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <span className="text-4xl font-serif text-[#1c1917] mb-2">5,000+</span>
            <span className="text-[15px] text-[#78716c]">Job posts analyzed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
