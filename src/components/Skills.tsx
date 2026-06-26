import {
  FaCode,
  FaNodeJs,
  FaDatabase,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiVercel,
  SiVscodium,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FaCode,
      skills: [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind", icon: SiTailwindcss },
      ],
    },

    {
      title: "Backend",
      icon: FaNodeJs,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "REST APIs", icon: FaLaptopCode },
      ],
    },

    {
      title: "Database",
      icon: FaDatabase,
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: SiMongoose },
      ],
    },

    {
      title: "Tools & Platforms",
      icon: FaLaptopCode,
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Vercel", icon: SiVercel },
        { name: "AWS", icon: FaAws },
        { name: "VS Code", icon: SiVscodium },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-blue-400 mb-3">My Toolkit</p>

        <h2 className="text-5xl font-bold mb-6">Skills & Technologies</h2>

        <p className="text-gray-400 max-w-2xl mb-16">
          Technologies I use to build scalable, modern and high-performance web
          applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  border border-gray-800
                  rounded-3xl
                  p-8
                  bg-white/5
                  backdrop-blur
                  hover:border-blue-500/40
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <CategoryIcon size={28} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold">
                        {category.title}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        {category.skills.length} Skills
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="
                          flex
                          items-center
                          gap-3
                          p-3
                          rounded-xl
                          bg-white/5
                          hover:bg-white/10
                          transition-all
                          duration-300
                        "
                      >
                        <SkillIcon size={24} className="text-blue-400" />

                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
