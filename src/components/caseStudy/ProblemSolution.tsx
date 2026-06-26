import SectionHeading from "./SectionHeading";

interface ProblemSolutionProps {
  problem: string;
  solution: string;
}

export default function ProblemSolution({
  problem,
  solution,
}: ProblemSolutionProps) {
  return (
    <section className="mt-24">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Problem */}

        <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
          <SectionHeading icon="🎯" title="Problem" />

          <p className="text-gray-300 leading-8">{problem}</p>
        </div>

        {/* Solution */}

        <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8">
          <SectionHeading icon="💡" title="Solution" />

          <p className="text-gray-300 leading-8">{solution}</p>
        </div>
      </div>
    </section>
  );
}
