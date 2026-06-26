export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">About Me</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* About Card */}

          <div className="border border-gray-800 rounded-3xl p-8 bg-white/5">
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>

            <p className="text-gray-300 leading-8">
              I'm a BCA graduate and Frontend-Focused Full Stack Developer
              currently building modern web applications with React, Node.js and
              Next.js.
            </p>

            <p className="text-gray-300 leading-8 mt-4">
              Over the last several months, I have progressed from learning
              HTML, CSS and JavaScript to building full stack projects while
              strengthening my problem-solving skills through DSA.
            </p>
          </div>

          {/* Current Focus */}

          <div className="border border-gray-800 rounded-3xl p-8 bg-white/5">
            <h3 className="text-2xl font-semibold mb-6">Current Focus</h3>

            <div className="space-y-4">
              <div>🤖 Developing AI Interview Simulator</div>

              <div>⚡ Learning TypeScript</div>

              <div>▲ Exploring Next.js</div>

              <div>☁ AWS Deployment</div>
            </div>
          </div>

          {/* Journey Card */}

          <div className="border border-gray-800 rounded-3xl p-8 bg-white/5">
            <h3 className="text-2xl font-semibold mb-6">Learning Journey</h3>

            <p className="text-gray-300">
              HTML → CSS → JavaScript → Node.js → React → CareerForge →
              TypeScript → Next.js → AWS
            </p>
          </div>

          {/* Stats Card */}

          <div className="border border-gray-800 rounded-3xl p-8 bg-white/5">
            <h3 className="text-2xl font-semibold mb-6">Quick Stats</h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold">10+</p>
                <p className="text-gray-400">Months Learning</p>
              </div>

              <div>
                <p className="text-3xl font-bold">2+</p>
                <p className="text-gray-400">Major Projects</p>
              </div>

              <div>
                <p className="text-3xl font-bold">100+</p>
                <p className="text-gray-400">DSA Problems</p>
              </div>

              <div>
                <p className="text-3xl font-bold">2023</p>
                <p className="text-gray-400">Internship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
