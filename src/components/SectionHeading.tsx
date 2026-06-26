interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>

      {subtitle && <p className="text-gray-400 mt-4 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
