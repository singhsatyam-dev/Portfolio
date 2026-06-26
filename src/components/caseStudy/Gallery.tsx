import Image from "next/image";

import SectionHeading from "./SectionHeading";

interface GalleryImage {
  title: string;
  image: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <section className="mt-24">
      <SectionHeading icon="🖼" title="Project Gallery" />

      <div className="grid md:grid-cols-2 gap-8">
        {images.map((image) => (
          <div
            key={image.title}
            className="
              border border-gray-800
              rounded-3xl
              overflow-hidden
              bg-white/5
            "
          >
            <div className="relative h-[280px]">
              <Image
                src={image.image}
                alt={image.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
