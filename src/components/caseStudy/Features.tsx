import { FaCheckCircle } from "react-icons/fa";

import SectionHeading from "./SectionHeading";

interface FeaturesProps {
  features: string[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="mt-24">
      <SectionHeading icon="✨" title="Key Features" />

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div
            key={feature}
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-gray-800
              bg-white/5
              p-6
              hover:border-blue-500/30
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            <FaCheckCircle className="text-green-400" size={22} />

            <span className="text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
