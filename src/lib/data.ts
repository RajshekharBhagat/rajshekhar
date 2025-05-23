import {
  AlarmClockIcon,
  DatabaseIcon,
  Eye,
  EyeOff,
  HandshakeIcon,
  Layers,
  Link2,
  MailCheck,
  MessageCircleHeart,
  MonitorSmartphone,
  Paintbrush2,
  Rocket,
  ShieldCheck,
  ShieldCheckIcon,
  ShieldIcon,
  ThumbsUpIcon,
  ToggleRight,
  UserCheck,
} from "lucide-react";
import { ProjectType } from "../../types/types";
import {Icons} from '@/components/Icons'

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "Chat Wave",
    description: `Chat_Wave is a modern, real-time chat application designed to deliver seamless messaging experiences. It supports one-on-one conversations with message persistence, friend request systems, user authentication, and dynamic real-time updates. Built with scalability and user experience in mind, Chat_Wave incorporates modern development best practices and robust architecture.`,

    techStack: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "Redis",
      "Upstash",
      "React Query",
      "NextAuth.js",
      "Lucide Icons",
      "Zod",
      "ShadCN UI",
      "Socket.IO/WebSockets",
      "Vercel (Hosting)",
    ],

    image: "/projects/chatwave.png", 
    liveLink: "https://chat-wave-vert.vercel.app", 
    githubLink: "https://github.com/RajshekharBhagat/Chat-Wave", 

    textColor: "text-orange-500",
    bg_from: "from-orange-500/80",
    bg_color: 'bg-orange-500/30',
    bg_to:'to-orange-200/80',
    smallTextColor: 'text-orange-200',
    shadowColor: "shadow-white",

    Features: [
      {
        icon: AlarmClockIcon,
        title: "Real-Time Messaging",
        description:
          "Users can chat in real-time using WebSocket-powered communication for instant message delivery.",
      },
      {
        icon: HandshakeIcon,
        title: "Friend Request System",
        description:
          "Users can send and accept friend requests, ensuring only mutual connections can initiate conversations.",
      },
      {
        icon: ShieldCheckIcon,
        title: "Session-based Authentication",
        description:
          "Secure user sessions are managed using NextAuth with Google OAuth integration.",
      },
      {
        icon: ThumbsUpIcon,
        title: "Optimistic UI Updates",
        description:
          "Uses React Query for fast and responsive UI updates with background data syncing.",
      },
      {
        icon: DatabaseIcon,
        title: "Redis-backed Message Store",
        description:
          "Stores chat messages using Redis sorted sets for fast access and retrieval of last messages.",
      },
      {
        icon: ShieldIcon,
        title: "Validation and Error Handling",
        description:
          "Zod schemas ensure robust form validations and error handling across the app.",
      },
    ],
    Technology: [
      {
        title: "Next.js",
        link: "https://nextjs.org/",
        description:
          "The core React framework powering the SSR and API routing for Chat_Wave.",
      },
      {
        title: "Upstash Redis",
        link: "https://upstash.com/",
        description:
          "A serverless Redis solution used for storing and fetching chat messages efficiently.",
      },
      {
        title: "React Query",
        link: "https://tanstack.com/query/latest",
        description:
          "Manages remote state and provides smooth UI updates and data caching.",
      },
      {
        title: "NextAuth.js",
        link: "https://next-auth.js.org/",
        description:
          "Handles secure and scalable authentication flows using OAuth (Google in this case).",
      },
      {
        title: "Zod",
        link: "https://zod.dev/",
        description:
          "Schema validation tool that helps validate request bodies and form inputs.",
      },
      {
        title: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        description:
          "Used for designing a clean, responsive and modern user interface.",
      },
      {
        title: "ShadCN UI",
        link: "https://ui.shadcn.dev/",
        description:
          "Component library that provides beautiful and accessible UI primitives.",
      },
      {
        title: "WebSockets / Socket.IO",
        link: "https://socket.io/",
        description:
          "Handles real-time bi-directional communication between users for instant messaging.",
      },
    ],
  },
  {
    id: 2,
    title: "Ask-it",
    description:
      "Ask-it is an anonymous messaging platform where users can receive anonymous messages through a unique link. It ensures secure registration using OTP verification and allows users to control message reception via a toggle. Built with modern UI and deployed on Vercel.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Aceternity UI",
      "MongoDB",
      "NextAuth",
      "OTP Verification",
      "Vercel",
    ],
    image: "/projects/ask-it.png", // You can replace this with your actual image path
    liveLink: "https://ask-it-five.vercel.app", // Replace with actual link
    githubLink: "https://github.com/RajshekharBhagat/Ask-It", // Replace with actual repo
    textColor: "text-zinc-200",
    bg_color: "bg-zinc-500/30",
    bg_from: 'from-zinc-600/50',
    bg_to:'to-zinc-50/70',
    smallTextColor: 'text-zinc-200',
    shadowColor: "shadow-zinc-200",
    Features: [
      {
        icon: UserCheck,
        title: "Unique Username System",
        description:
          "Users must register with a unique username. Real-time validation prevents duplicates.",
      },
      {
        icon: MailCheck,
        title: "Secure OTP Verification",
        description:
          "OTP-based verification ensures secure account creation before login is allowed.",
      },
      {
        icon: Link2,
        title: "Anonymous Message Link",
        description:
          "Each user receives a personal link to receive messages without exposing identity.",
      },
      {
        icon: EyeOff,
        title: "Truly Anonymous Messaging",
        description:
          "Messages sent through personal links are anonymous and cannot be traced.",
      },
      {
        icon: ToggleRight,
        title: "Toggle Message Reception",
        description:
          "Users can toggle ON/OFF to decide whether they want to receive messages.",
      },
      {
        icon: ShieldCheck,
        title: "No Login Required to Send",
        description:
          "Anyone can send a message anonymously without needing to register or login.",
      },
    ],
    Technology: [
      {
        title: "Next.js",
        link: "https://nextjs.org/",
        description:
          "React-based framework used for building the full-stack application with server-side features.",
      },
      {
        title: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        description:
          "Utility-first CSS framework used to style the application responsively and efficiently.",
      },
      {
        title: "ShadCN UI",
        link: "https://ui.shadcn.dev/",
        description:
          "Component library based on Radix UI and Tailwind, used for accessible, modern UI components.",
      },
      {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com/",
        description:
          "Sleek animations and UI utilities that enhance the fun, interactive nature of the app.",
      },
      {
        title: "NextAuth",
        link: "https://next-auth.js.org/",
        description:
          "Authentication solution enabling credential-based sign-in and session management.",
      },
      {
        title: "MongoDB",
        link: "https://www.mongodb.com/",
        description:
          "Used to store user data, messages, and OTPs with scalable document-based storage.",
      },
      {
        title: "Vercel",
        link: "https://vercel.com/",
        description:
          "Cloud platform used for seamless deployment and hosting of the Ask-it application.",
      },
    ],
  },
  {
    id: 3,
  title: "My Portfolio Website",
  description:
    "A visually stunning, interactive portfolio inspired by Awwwards-winning websites. It showcases my work, skills, and personality through clean UI, smooth animations, and a modern developer-focused design. Includes a guestbook feature with Google OAuth via NextAuth for visitors to leave public messages.",
  techStack: [
    "Next.js",
    "Tailwind CSS",
    "ShadCN UI",
    "Framer Motion",
    "Aceternity UI",
    "Magic UI",
    "NextAuth",
    "Vercel",
  ],
  image: "/projects/rajshekharBhagat.png",
  liveLink: "https://rajshekhardev.vercel.app",
  githubLink: "https://github.com/RajshekharBhagat/rajshekhar", 
  textColor: "text-violet-500",
  bg_color: "bg-violet-500/30",
  bg_from: 'from-violet-500/80',
  bg_to:'to-violet-50/50',
  smallTextColor: 'text-violet-200',
  shadowColor: "shadow-violet-50",
  Features: [
    {
      icon: MonitorSmartphone,
      title: "Responsive & Futuristic Design",
      description:
        "Crafted with a modern design system inspired by Awwwards websites, the layout adapts beautifully to all screens.",
    },
    {
      icon: Paintbrush2,
      title: "Tailwind + ShadCN + Magic UI",
      description:
        "Combines Tailwind CSS with ShadCN UI and Magic UI to deliver fast, consistent, and stunning components.",
    },
    {
      icon: Eye,
      title: "Smooth Animations with Framer Motion",
      description:
        "Interactive page transitions and section reveals enhance user engagement across the site.",
    },
    {
      icon: MessageCircleHeart,
      title: "Public Guestbook via Google Auth",
      description:
        "Visitors can sign in with Google and leave feedback or messages using the guestbook feature powered by NextAuth.",
    },
    {
      icon: Layers,
      title: "Modular Component Architecture",
      description:
        "Reusable and scalable codebase structured around components and clean design principles.",
    },
    {
      icon: Rocket,
      title: "Deployed on Vercel",
      description:
        "Production-ready with blazing-fast performance, automatic optimizations, and CI/CD.",
    },
  ],
  Technology: [
    {
      title: "Next.js",
      link: "https://nextjs.org/",
      description: "Used for building the application with SSR, API routes, and seamless deployment.",
    },
    {
      title: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      description: "A utility-first CSS framework that helps build responsive, consistent UIs quickly.",
    },
    {
      title: "ShadCN UI",
      link: "https://ui.shadcn.dev/",
      description: "Delivers well-designed, accessible components based on Radix and Tailwind.",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com/",
      description: "Collection of experimental components and animations for React.",
    },
    {
      title: "Magic UI",
      link: "https://magicui.design/",
      description: "Provides headless animation primitives and effects for building modern UIs.",
    },
    {
      title: "Framer Motion",
      link: "https://www.framer.com/motion/",
      description: "Animation library for React that enables smooth, fluid interactions.",
    },
    {
      title: "NextAuth",
      link: "https://next-auth.js.org/",
      description: "Handles secure Google OAuth and session management for the guestbook feature.",
    },
    {
      title: "Vercel",
      link: "https://vercel.com/",
      description: "Provides zero-config deployment, serverless functions, and global CDN hosting.",
    },
  ],
  }
];

export const techStacks = [
  {
    icon: Icons.HTML,
    title: "HTML",
  },
  {
    icon: Icons.CSS,
    title: "CSS",
  },
  {
    icon: Icons.JavaScript,
    title: "JavaScript",
  },
  {
    icon: Icons.TypeScript,
    title: "TypeScript",
  },
  {
    icon: Icons.ReactJS,
    title: "ReactJS",
  },
  {
    icon: Icons.NextJS,
    title: "NextJS",
  },
  {
    icon: Icons.TailwindCSS,
    title: "Tailwind CSS",
  },
  {
    icon: Icons.FramerMotion,
    title: "Framer Motion",
  },
  {
    icon: Icons.Shadcn,
    title: "Shadcn",
  },
  {
    icon: Icons.NodeJS,
    title: "NodeJS",
  },
  {
    icon: Icons.ExpressJS,
    title: "ExpressJS",
  },
  {
    icon: Icons.MongoDB,
    title: "MongoDB",
  },
  {
    icon: Icons.Zod,
    title: "Zod",
  },
  {
    icon: Icons.GitHub,
    title: "GitHub",
  },
  {
    icon: Icons.Postman,
    title: "Postman",
  },
  {
    icon: Icons.Vercel,
    title: "Vercel",
  },
  {
    icon: Icons.Redux,
    title: "Redux",
  },
];

export const techStackMap = Object.fromEntries(techStacks.map((item) => [item.title, item.icon]))
