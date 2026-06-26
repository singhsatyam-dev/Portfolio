import Link from "next/link";

interface NextProjectProps {
  title: string;
  href: string;
}

export default function NextProject({ title, href }: NextProjectProps) {
  return (
    <section className="mt-24 mb-20">
      <div
        className="
        border
        border-gray-800
        rounded-3xl
        p-10
        bg-white/5
      "
      >
        <p className="text-gray-400">Next Project</p>

        <Link
          href={href}
          className="
            text-4xl
            font-bold
            mt-4
            inline-block
            hover:text-blue-400
            transition
          "
        >
          {title} →
        </Link>
      </div>
    </section>
  );
}
