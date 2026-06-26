export default function Journey() {
  const timeline = [
    {
      year: "2023",
      title: "Paid Internship",
      description:
        "Content Research & Graphic Design internship with Canadian businesses.",
    },
    {
      year: "2025",
      title: "Started Web Development",
      description:
        "Started learning HTML, CSS and JavaScript while building responsive websites.",
    },
    {
      year: "2025",
      title: "Backend Development",
      description: "Learned Node.js, Express.js and REST API development.",
    },
    {
      year: "2026",
      title: "React Development",
      description: "Built modern frontend applications using React.",
    },
    {
      year: "2026",
      title: "CareerForge",
      description: "Built a Full Stack Job Portal with AI ATS Scorer.",
    },
    {
      year: "2026",
      title: "CollaborateX",
      description: "Built a realtime collaboration platform using Socket.IO.",
    },
    {
      year: "2026",
      title: "Current Focus",
      description:
        "Learning TypeScript, Next.js, AWS and Performance Optimization.",
    },
  ];

  return (
    <section id="journey" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-blue-400 mb-3">Timeline</p>

        <h2 className="text-5xl font-bold mb-16">My Learning Journey</h2>

        <div className="overflow-x-auto pb-8">
          <div className="relative min-w-[1400px]">
            {/* Timeline */}

            <div className="absolute top-8 left-0 w-full h-[2px] bg-gray-700" />

            <div className="flex justify-between">
              {timeline.map((item) => (
                <div key={item.title} className="w-[180px] relative">
                  {/* Dot */}

                  <div
                    className="
                    w-5
                    h-5
                    rounded-full
                    bg-blue-500
                    border-4
                    border-black
                    mx-auto
                    relative
                    z-10
                  "
                  />

                  {/* Year */}

                  <p className="text-center mt-5 text-blue-400 font-semibold">
                    {item.year}
                  </p>

                  {/* Card */}

                  <div
                    className="
                      mt-6
                      rounded-2xl
                      border
                      border-gray-800
                      bg-white/5
                      p-5
                      backdrop-blur
                      hover:-translate-y-2
                      hover:border-blue-500/40
                      transition-all
                      duration-300
                    "
                  >
                    <h3 className="font-semibold">{item.title}</h3>

                    <p className="text-gray-400 text-sm mt-3 leading-6">
                      {item.description}
                    </p>
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
