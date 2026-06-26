import Image from "next/image";
import {
  ArrowRight,
  Download,
  MapPin,
  Briefcase,
  CircleCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <div>
            {/* Availability */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 mb-8">
              <CircleCheck size={16} className="text-emerald-400" />

              <span className="text-sm text-emerald-300">
                Available for Full Stack Opportunities
              </span>
            </div>

            {/* Intro */}

            <p className="text-blue-400 text-lg mb-5">👋 Hello, I'm</p>

            {/* Name */}

            <h1 className="text-6xl md:text-7xl font-bold leading-[1.05]">
              Satyam
              <br />
              Kumar Singh
            </h1>

            {/* Role */}

            <h2 className="text-2xl text-gray-400 mt-6">
              Full Stack Developer
            </h2>

            {/* Description */}

            <p className="text-lg text-gray-300 leading-8 mt-8 max-w-xl">
              Passionate about building scalable web
              applications and continuously learning modern technologies. From
              mastering JavaScript and React to developing production-ready full
              stack applications with Node.js, Next.js, TypeScript and
              AI-powered features, I'm focused on creating software that solves
              real-world problems.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="
                  flex
                  items-center
                  gap-2
                  px-7
                  py-3
                  rounded-xl
                  bg-white
                  text-black
                  font-medium
                  hover:scale-105
                  transition-all
                "
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                className="
                  flex
                  items-center
                  gap-2
                  px-7
                  py-3
                  rounded-xl
                  border
                  border-gray-700
                  hover:border-white
                  transition-all
                "
              >
                Resume
                <Download size={18} />
              </a>

              <a
                href="https://github.com/singhsatyam-dev"
                target="_blank"
                className="
                  flex
                  items-center
                  gap-2
                  px-7
                  py-3
                  rounded-xl
                  border
                  border-gray-700
                  hover:border-white
                  transition-all
                "
              >
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center">
            <div
              className="
relative
w-[380px]
h-[500px]
rounded-[32px]
overflow-hidden
border
border-white/10
rotate-2
hover:rotate-0
transition-all
duration-500
"
            >
              {/* Glow */}

              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10" />

              <Image
                src="/images/ProfileImage.jpeg"
                alt="Satyam Kumar Singh"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
