import Image from "next/image";
import Link from "next/link";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;

  github: string;
  live: string;

  heroImage: string;
}

export default function CaseStudyHero({
  title,
  subtitle,
  github,
  live,
  heroImage,
}: CaseStudyHeroProps) {
  return (
    <>
      <div className="flex justify-between items-start flex-wrap gap-8">
        <div>
          <Link href="/" className="text-gray-400 hover:text-white transition">
            ← Back to Portfolio
          </Link>

          <h1 className="text-6xl font-bold mt-6">{title}</h1>

          <p className="text-xl text-gray-400 mt-4">{subtitle}</p>

          <div className="flex gap-4 mt-8">
            <a
              href={live}
              target="_blank"
              className="px-6 py-3 rounded-xl bg-white text-black"
            >
              Live Demo
            </a>

            <a
              href={github}
              target="_blank"
              className="px-6 py-3 rounded-xl border border-gray-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-[650px] rounded-3xl overflow-hidden mt-16 border border-gray-800">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>
    </>
  );
}
