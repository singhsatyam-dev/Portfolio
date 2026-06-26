import { CaseStudy } from "../types/caseStudy";

export const collaborateX: CaseStudy = {
  title: "CollaborateX",

  subtitle: "Real-Time Collaboration Platform",

  heroImage: "/images/CollaborateX/CollaborateX-LandingPage.png",

  github: "https://github.com/singhsatyam-dev/CollaborateX",

  live: "https://collaborate-x-steel.vercel.app/",

  overview:
    "CollaborateX is a full stack collaboration platform designed to improve team productivity through real-time communication and collaborative editing. It provides a centralized workspace where users can collaborate efficiently on shared content.",

  problem:
    "Modern teams often struggle with fragmented communication and document collaboration across multiple tools, making teamwork less efficient.",

  solution:
    "CollaborateX combines authentication, dashboards, real-time collaborative editing, and workspace management into a single platform, making collaboration seamless and organized.",

  features: [
    "User Authentication",
    "Real-Time Collaborative Editor",
    "User Dashboard",
    "Workspace Management",
    "Responsive Design",
    "Secure APIs",
  ],

  techStack: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],

  gallery: [
    {
      title: "Landing Page",
      image: "/images/CollaborateX/CollaborateX-LandingPage.png",
    },

    {
      title: "User Dashboard",
      image: "/images/CollaborateX/CollaborateX-UserDashboard.png",
    },

    {
      title: "Collaborative Editor",
      image: "/images/CollaborateX/CollaborateX-Editor.png",
    },
    {
      title: "Sharing The File Using Gmail and Collaborators List",
      image: "/images/CollaborateX/CollaborateX-sharingPopup.png",
    },
  ],

  challenges: [
    "Managing real-time collaboration between multiple users.",
    "Designing an intuitive dashboard and workspace.",
    "Structuring APIs for scalability.",
    "Handling state efficiently across collaborative components.",
  ],

  learnings: [
    "Building scalable React applications.",
    "Designing reusable components.",
    "Creating RESTful APIs.",
    "Improving project architecture.",
    "Building real-time collaborative applications.",
  ],

  nextProject: {
    title: "CareerForge",
    href: "/projects/careerforge",
  },
};
