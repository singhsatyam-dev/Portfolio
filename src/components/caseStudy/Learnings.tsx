import { FaGraduationCap } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";

interface LearningsProps {
  learnings: string[];
}

export default function Learnings({ learnings }: LearningsProps) {
  return (
    <section className="mt-24">
      <SectionHeading icon="🎓" title="What I Learned" />

      <div className="grid md:grid-cols-2 gap-6">
        {learnings.map((learning) => (
          <div
            key={learning}
            className="
              border
              border-gray-800
              rounded-2xl
              p-6
              bg-white/5
              hover:border-blue-500/40
              transition-all
            "
          >
            <div className="flex gap-3 items-center mb-3">
              <FaGraduationCap className="text-blue-400" />

              <h3 className="font-semibold">Lesson</h3>
            </div>

            <p className="text-gray-300">{learning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
