import SectionHeading from "./SectionHeading";

interface OverviewProps {
  overview: string;
}

export default function Overview({ overview }: OverviewProps) {
  return (
    <section className="mt-24">
      <SectionHeading icon="📖" title="Overview" />

      <div className="rounded-3xl border border-gray-800 bg-white/5 p-8">
        <p className="text-gray-300 text-lg leading-8">{overview}</p>
      </div>
    </section>
  );
}
