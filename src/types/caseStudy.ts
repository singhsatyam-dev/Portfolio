export interface GalleryImage {
  title: string;
  image: string;
}

export interface CaseStudy {
  title: string;
  subtitle: string;

  heroImage: string;

  github: string;
  live: string;

  overview: string;

  problem: string;

  solution: string;

  features: string[];

  techStack: string[];

  gallery: GalleryImage[];

  challenges: string[];

  learnings: string[];

  nextProject?: {
    title: string;
    href: string;
  };
}
