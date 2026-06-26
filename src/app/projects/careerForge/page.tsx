import { careerForge } from "@/src/data/careerForge";

import CaseStudyHero from "@/src/components/caseStudy/CaseStudyHero";
import Overview from "@/src/components/caseStudy/Overview";
import ProblemSolution from "@/src/components/caseStudy/ProblemSolution";
import Features from "@/src/components/caseStudy/Features";
import Gallery from "@/src/components/caseStudy/Gallery";
import TechStack from "@/src/components/caseStudy/TechStack";
import Challenges from "@/src/components/caseStudy/Challenges";
import Learnings from "@/src/components/caseStudy/Learnings";
import NextProject from "@/src/components/caseStudy/NextProject";
import BackToPortfolio from "@/src/components/caseStudy/BackToPortfolio";

export default function CareerForgePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <CaseStudyHero
        title={careerForge.title}
        subtitle={careerForge.subtitle}
        github={careerForge.github}
        live={careerForge.live}
        heroImage={careerForge.heroImage}
      />

      <Overview overview={careerForge.overview} />

      <ProblemSolution
        problem={careerForge.problem}
        solution={careerForge.solution}
      />

      <Features features={careerForge.features} />

      <TechStack tech={careerForge.techStack} />

      <Gallery images={careerForge.gallery} />

      <Challenges challenges={careerForge.challenges} />

      <Learnings learnings={careerForge.learnings} />

      <BackToPortfolio />

      <NextProject
        title={careerForge.nextProject!.title}
        href={careerForge.nextProject!.href}
      />
    </main>
  );
}
