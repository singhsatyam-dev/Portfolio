import { collaborateX } from "@/src/data/collaborateX";

import BackToPortfolio from "@/src/components/caseStudy/BackToPortfolio";
import CaseStudyHero from "@/src/components/caseStudy/CaseStudyHero";
import Challenges from "@/src/components/caseStudy/Challenges";
import Features from "@/src/components/caseStudy/Features";
import Gallery from "@/src/components/caseStudy/Gallery";
import Learnings from "@/src/components/caseStudy/Learnings";
import NextProject from "@/src/components/caseStudy/NextProject";
import Overview from "@/src/components/caseStudy/Overview";
import ProblemSolution from "@/src/components/caseStudy/ProblemSolution";
import TechStack from "@/src/components/caseStudy/TechStack";

export default function CollaborateXPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <CaseStudyHero
        title={collaborateX.title}
        subtitle={collaborateX.subtitle}
        github={collaborateX.github}
        live={collaborateX.live}
        heroImage={collaborateX.heroImage}
      />

      <Overview overview={collaborateX.overview} />

      <ProblemSolution
        problem={collaborateX.problem}
        solution={collaborateX.solution}
      />

      <Features features={collaborateX.features} />

      <TechStack tech={collaborateX.techStack} />

      <Gallery images={collaborateX.gallery} />

      <Challenges challenges={collaborateX.challenges} />

      <Learnings learnings={collaborateX.learnings} />

      <BackToPortfolio />

      <NextProject
        title={collaborateX.nextProject!.title}
        href={collaborateX.nextProject!.href}
      />
    </main>
  );
}
