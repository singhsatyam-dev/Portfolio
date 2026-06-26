import { CaseStudy } from "../types/caseStudy";

export const careerForge: CaseStudy = {
  title: "CareerForge",

  subtitle: "AI Powered Full Stack Job Portal",

  heroImage: "/images/CareerForge/CareerForge-LandingPage.png",

  github: "https://github.com/singhsatyam-dev/Job-portal-Full_Stack",

  live: "https://job-portal-full-stack-jade.vercel.app/",

  overview:
    "CareerForge is a Full Stack Job Portal that connects recruiters and job seekers through a modern web application. Recruiters can create and manage job postings, while candidates can search, apply for jobs and analyze their resumes using the AI ATS Scorer.",

  problem:
    "Traditional job portals mainly focus on job listings and applications. Candidates often have no idea whether their resumes match a job description, while recruiters need a streamlined way to manage job postings and applicants.",

  solution:
    "CareerForge solves these challenges by combining recruiter tools, candidate workflows, secure authentication, role-based authorization and an AI ATS Scorer into one unified platform.",

  features: [
    "User Authentication",
    "Role Based Access",
    "Recruiter Dashboard",
    "Job Posting",
    "Edit/Delete Jobs",
    "Job Applications",
    "AI ATS Scorer",
    "Responsive Design",
  ],

  techStack: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "AI"],

  gallery: [
    {
      title: "Landing Page",
      image: "/images/CareerForge/CareerForge-LandingPage.png",
    },

    {
      title: "Home Page",
      image: "/images/CareerForge/CareerForge-HomePage.png",
    },

    {
      title: "Recruiter Dashboard",
      image: "/images/CareerForge/Recruiter-Dashboard.png",
    },

    {
      title: "Post Job",
      image: "/images/CareerForge/Post-Job.png",
    },

    {
      title: "Edit Job",
      image: "/images/CareerForge/Edit-Job.png",
    },

    {
      title: "AI ATS Scorer",
      image: "/images/CareerForge/Ai-ATS-Scrorer.png",
    },

    {
      title: "Job Apply",
      image: "/images/CareerForge/Job-Apply.png",
    },
  ],

  challenges: [
    "Designing separate workflows for recruiters and candidates.",
    "Implementing secure authentication and authorization.",
    "Building an AI ATS Scorer for resume evaluation.",
    "Managing resume uploads and analysis.",
  ],

  learnings: [
    "Building scalable React applications.",
    "Creating secure REST APIs.",
    "Implementing role-based authentication.",
    "Working with MongoDB.",
    "Integrating AI into real-world applications.",
    "Deploying a full stack application.",
  ],

  nextProject: {
    title: "CollaborateX",
    href: "/projects/collaboratex",
  },
};
