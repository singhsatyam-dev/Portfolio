import { FaTriangleExclamation } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";

interface ChallengesProps {
  challenges: string[];
}

export default function Challenges({ challenges }: ChallengesProps) {
  return (
    <section className="mt-24">
      <SectionHeading icon="⚡" title="Challenges" />

      <div className="space-y-5">
        {challenges.map((challenge) => (
          <div
            key={challenge}
            className="
              flex
              items-start
              gap-4
              rounded-2xl
              border
              border-yellow-500/20
              bg-yellow-500/5
              p-6
            "
          >
            <FaTriangleExclamation className="text-yellow-400 mt-1" size={20} />

            <p className="text-gray-300 leading-7">{challenge}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
