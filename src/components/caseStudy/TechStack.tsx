import { FaReact, FaNodeJs, FaDatabase, FaRobot } from "react-icons/fa6";

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

import SectionHeading from "./SectionHeading";

interface TechStackProps {
  tech: string[];
}

const iconMap: Record<string, React.ElementType> = {
  React: FaReact,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss,
  AI: FaRobot,
};

export default function TechStack({ tech }: TechStackProps) {
  return (
    <section className="mt-24">
      <SectionHeading icon="🛠" title="Tech Stack" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tech.map((item) => {
          const Icon = iconMap[item];

          return (
            <div
              key={item}
              className="
                border border-gray-800
                rounded-2xl
                p-6
                bg-white/5
                flex
                flex-col
                items-center
                gap-4
                hover:border-blue-500/40
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {Icon && <Icon size={34} className="text-blue-400" />}

              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
