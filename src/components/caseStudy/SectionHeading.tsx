interface SectionHeadingProps {
  title: string;
  icon: string;
}

export default function SectionHeading({ title, icon }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="text-3xl">{icon}</span>

      <h2 className="text-4xl font-bold">{title}</h2>
    </div>
  );
}
