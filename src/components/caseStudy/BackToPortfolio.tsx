import Link from "next/link";

export default function BackToPortfolio() {
  return (
    <Link
      href="/"
      className="
        inline-flex
        items-center
        gap-2
        text-gray-400
        hover:text-white
        transition-colors
      "
    >
      ← Back to Portfolio
    </Link>
  );
}
