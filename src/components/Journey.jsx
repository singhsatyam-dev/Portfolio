export default function Journey() {
  const timeline = [
    {
      year: "2023",
      title: "Content Research & Writer Internship (Paid)",
      description:
        "Worked with Canadian small businesses, created 50+ page business strategy presentations and researched funding utilization plans.",
    },
    {
      year: "2025",
      title: "Started Web Development",
      description:
        "Began learning HTML, CSS and JavaScript while building responsive websites.",
    },
    {
      year: "2025",
      title: "Backend Development",
      description:
        "Learned Node.js and Express.js and started building REST APIs.",
    },
    {
      year: "2026",
      title: "React & Frontend Development",
      description:
        "Built interactive frontend applications using React.js and modern development practices.",
    },
    {
      year: "2026",
      title: "CareerForge",
      description:
        "Built a Full Stack Job Portal featuring authentication, job management and AI ATS Resume Scoring.",
    },
    {
      year: "2026",
      title: "CollaborateX",
      description:
        "Built a Full Stack Realtime Collaboraion Project using Socket.IO, realtime editing, and sharing docs.",
    },
    {
      year: "2026",
      title: "Current Focus",
      description:
        "Learning TypeScript, Next.js, AWS and building production-ready applications.",
    },
  ];

  return (
    <section id="journey" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">My Learning Journey</h2>

        <div className="relative border-l border-gray-700 ml-4">
          {timeline.map((item, index) => (
            <div key={index} className="mb-12 ml-8">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2" />

              <p className="text-blue-400 font-semibold">{item.year}</p>

              <h3 className="text-2xl font-semibold mt-2">{item.title}</h3>

              <p className="text-gray-400 mt-3 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
