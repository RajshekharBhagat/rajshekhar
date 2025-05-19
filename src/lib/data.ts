import { ProjectType } from "../../types/types";

const projectsData: ProjectType[] = [
    {
      id: 1,
      title: "Ask-It",
      description:
        "A modern e-commerce platform with Stripe payments, product management, and user authentication. Built using Next.js, MongoDB, and Tailwind CSS.",
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "/projects/ask-it.png",
      liveLink: "https://ask-it-five.vercel.app",
      githubLink: "https://github.com/RajshekharBhagat/Ask-It",
      color: "blue",
    },
    {
      id: 2,
      title: "chatWave",
      description:
        "A Reddit clone for discussions and discoveries. Features voting, commenting, and real-time updates using Upstash Redis and NextAuth.",
      techStack: ["Next.js", "Redis", "React Query", "NextAuth"],
      image: "/projects/chatwave.png",
      liveLink: "https://chat-wave-vert.vercel.app",
      githubLink: "https://github.com/RajshekharBhagat/Chat-Wave",
      color: "green",
    },
    {
      id: 3,
      title: "swiftDrop",
      description:
        "A logistics dashboard for managing delivery partners and order assignments with real-time updates and role-based access.",
      techStack: ["React", "Node.js", "MongoDB", "ShadCN UI"],
      image: "/projects/swiftdrop.png",
      liveLink: "https://swift-drop-amber.vercel.app",
      githubLink: "https://github.com/RajshekharBhagat/swiftDrop",
      color: "red",
    },
  ];

export default projectsData;