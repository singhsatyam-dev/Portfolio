import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="text-blue-400 mb-4 text-lg">
              Hello, I'm
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-none">
              Satyam
              <br />
              Singh
            </h1>

            <h2 className="text-2xl text-gray-400 mt-6">
              Frontend-Focused Full Stack Developer
            </h2>

            <p className="text-lg text-gray-300 max-w-xl mt-8 leading-8">
              Building modern web applications while
              continuously learning, creating and improving
              through real-world projects.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="px-6 py-3 bg-white text-black rounded-xl"
              >
                View Projects
              </a>

              <a
                href="https://github.com/singhsatyam-dev"
                target="_blank"
                className="px-6 py-3 border border-gray-700 rounded-xl"
              >
                GitHub
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-3 border border-gray-700 rounded-xl"
              >
                Resume
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="relative w-[350px] h-[350px]">

              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

              <Image
                src="/images/ProfileImage.jpeg"
                alt="Satyam Singh"
                fill
                className="rounded-full object-cover border border-gray-700"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}