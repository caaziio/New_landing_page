export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Tell us your story",
      desc: "Forget stiff cover letters. Walk us through your background, experiences, and what makes you unique in a simple, guided discovery flow."
    },
    {
      num: "2",
      title: "We translate your value",
      desc: "Our engine maps your experiences into the specific skills and formats that Korean recruiters are actively filtering for."
    },
    {
      num: "3",
      title: "Audit your readiness",
      desc: "Get an instant score on your newly formatted resume. See exactly what to tweak to bump your chances from 'maybe' to 'interview'."
    },
    {
      num: "4",
      title: "Meet your match",
      desc: "Access job listings that actually align with your audited profile. No more applying to jobs where you never had a chance."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white mx-0 lg:mx-4 rounded-none lg:rounded-[3rem] border-y lg:border border-[#e7e5e4]/50 shadow-soft">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        
        <div className="lg:w-1/3 sticky top-32">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-serif text-[#1c1917] leading-tight mb-6">
            How we <br className="hidden lg:block"/>set you up.
          </h2>
          <p className="text-lg text-[#78716c] mb-8">
            A four-step process designed to highlight your strengths in a way companies immediately understand.
          </p>
          <div className="hidden lg:block w-24 h-[1px] bg-[#e7e5e4]"></div>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-12">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#fdfaf6] border border-[#e7e5e4] flex items-center justify-center text-xl font-serif text-[#1c1917] group-hover:bg-[#1c1917] group-hover:text-white transition-colors duration-300">
                {step.num}
              </div>
              <div className="pt-3">
                <h3 className="text-2xl font-serif text-[#1c1917] mb-3">{step.title}</h3>
                <p className="text-[1.05rem] text-[#78716c] leading-[1.6] max-w-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
