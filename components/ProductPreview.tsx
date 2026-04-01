export default function ProductPreview() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        <h2 className="text-[2.5rem] md:text-[3.5rem] text-center font-serif text-[#1c1917] mb-16 max-w-2xl leading-tight">
          A platform that actually <span className="italic text-[#004aad]">understands</span> your context.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Card 1: Hand-holding Audit */}
          <div className="bg-[#fdfaf6] border border-[#e7e5e4] rounded-[2.5rem] p-10 flex flex-col h-full shadow-soft transition-transform hover:-translate-y-1">
            <h3 className="text-2xl font-serif text-[#1c1917] mb-4">The Resume Audit</h3>
            <p className="text-[#78716c] mb-12 flex-grow text-[1.05rem]">
              Upload your current CV, and we'll show you exactly how a Korean recruiter sees it. No confusing metrics, just clear action items.
            </p>
            
            {/* Visual element */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e7e5e4]">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm font-medium text-[#78716c] mb-1">Your Alignment Score</p>
                  <p className="text-4xl font-serif text-[#1c1917]">78<span className="text-lg text-[#a8a29e] ml-1">/ 100</span></p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-[#e7e5e4] border-t-[#004aad] border-r-[#004aad] rotate-45"></div>
              </div>
              <div className="space-y-3">
                <div className="px-3 py-2 rounded-lg bg-[#fee2e2]/40 text-[#b91c1c] text-sm">
                  <span className="font-semibold mr-1">Tweak:</span> Rephrase "Led team" to "Project Managed".
                </div>
                <div className="px-3 py-2 rounded-lg bg-[#def7ec]/50 text-[#046c4e] text-sm">
                  <span className="font-semibold mr-1">Great:</span> Excellent use of quantifiable metrics!
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Intimate Job Matching */}
          <div className="bg-[#1c1917] rounded-[2.5rem] p-10 flex flex-col h-full shadow-soft text-white transition-transform hover:-translate-y-1">
            <h3 className="text-2xl font-serif mb-4">The Match</h3>
            <p className="text-[#a8a29e] mb-12 flex-grow text-[1.05rem]">
              We don't show you roles that legally can't sponsor your visa. We show you the companies excitedly looking for your exact background.
            </p>

            {/* Visual element */}
            <div className="space-y-4">
              {[
                { role: "Global Business Coordinator", co: "Lotte Logistics", match: "94%" },
                { role: "Overseas Sales Specialist", co: "Samsung C&T", match: "88%" },
              ].map((j, i) => (
                <div key={i} className="bg-[#292524] rounded-2xl p-4 border border-[#44403c] flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-white mb-1">{j.role}</h4>
                    <p className="text-xs text-[#a8a29e]">{j.co}</p>
                  </div>
                  <div className="bg-white text-[#1c1917] px-3 py-1.5 rounded-full text-sm font-bold shadow-sm">
                    {j.match}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
