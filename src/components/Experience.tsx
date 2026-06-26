export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">Experience</h2>

        <div className="border border-gray-800 rounded-3xl p-8 bg-white/5 backdrop-blur">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h3 className="text-2xl font-semibold">
                Content Researcher & Writer Intern
              </h3>

              <p className="text-blue-400 mt-2">Remote Internship</p>
            </div>

            <div>
              <p className="text-gray-400">Oct 2023 – Feb 2024</p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-gray-300">
            <p>
              • Created detailed 50+ page business strategy presentations for
              Canadian small businesses.
            </p>

            <p>
              • Researched funding opportunities and business growth strategies
              for companies seeking interest-free loan programs.
            </p>

            <p>
              • Utilized AI-assisted research workflows to gather information
              and structure reports.
            </p>

            <p>
              • Developed communication, analytical thinking, business research
              and presentation skills.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
              Business Research
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
              Presentation Design
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
              Content Strategy
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
              AI-Assisted Research (ChatGpt)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
