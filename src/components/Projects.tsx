import Link from "next/link";

import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">Featured Projects</h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-800 rounded-3xl overflow-hidden bg-white/5"
            >
              {/* Screenshot */}

              <div className="relative h-[300px] bg-black/20">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* Content */}

              <div className="p-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-bold">{project.title}</h3>

                  <span className="text-blue-400">{project.status}</span>
                </div>

                <p className="text-gray-400 mt-4">{project.description}</p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition-all"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-gray-700 rounded-xl hover:bg-white/10 transition-all"
                  >
                    Live Demo
                  </a>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="px-6 py-3 border border-blue-500/40 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
