const skills = [
  "Communication",
  "Cross-cultural management",
  "Project coordination",
  "Data analysis",
  "Customer relations",
];

export default function ProductPreview() {
  return (
    <section className="py-24 px-6 bg-gray-50/70">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p className="text-xs uppercase font-bold tracking-widest text-[#004aad] mb-3">
            Product Preview
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            See it in action
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Resume Score */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Resume Score
            </p>
            {/* Score ring */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-28 h-28">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#004aad"
                    strokeWidth="10"
                    strokeDasharray="314"
                    strokeDashoffset="69"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-gray-900">
                    78%
                  </span>
                  <span className="text-xs text-gray-400 font-medium">Ready</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { label: "Keyword Match", val: 85 },
                { label: "Format", val: 70 },
                { label: "Clarity", val: 78 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{item.label}</span>
                    <span className="font-semibold text-gray-700">
                      {item.val}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#004aad]"
                      style={{ width: `${item.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Skill Discovery */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Skill Discovery
            </p>
            <p className="text-sm text-gray-500 mb-5">
              Based on your experience, Acafo found these transferable skills:
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-[#e8eef8] text-[#004aad] text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-medium">
                + 12 more skills detected from your resume
              </p>
            </div>
          </div>

          {/* Card 3: Job Match */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Best Fit Job
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  role: "Global Business Coordinator",
                  company: "Lotte Global Logistics",
                  match: 94,
                },
                {
                  role: "International Sales Manager",
                  company: "Samsung C&T",
                  match: 88,
                },
                {
                  role: "Global HR Specialist",
                  company: "Kakao Corp",
                  match: 82,
                },
              ].map((job) => (
                <div
                  key={job.role}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="min-w-0 mr-3">
                    <p className="text-sm font-semibold text-gray-800 truncate">
                      {job.role}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{job.company}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-[#e8eef8] text-[#004aad]">
                    {job.match}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
