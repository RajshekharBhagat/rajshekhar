"use client";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ProjectType } from "../../types/types";
import ProjectCard from "./ProjectCard";
import { AuroraText } from "./magicui/aurora-text";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

const projects: ProjectType = [
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
const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const projectRefs = useRef<(HTMLElement | null)[]>([]);
  const control = useAnimation();
  const sectionRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset:['start end','40% start']
  })

  const rotate = useTransform(scrollYProgress,[0,1],[0,-90])
  const scale = useTransform(scrollYProgress,[0,1],[0.5,1.5])

  const handleMouseEnter = () => {
    console.log("mouse enter");
    control.start({ rotate: -5 });
  };
  const handleMouseLeave = () => {
    control.start({ rotate: 0 });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const index = projectRefs.current.findIndex(
            (ref) => ref === visibleEntry.target
          );
          setCurrentProjectIndex(index);
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden">
      <motion.div style={{rotate,scale}} className="absolute -top-20 inset-0 -z-10 h-screen">
        <Image
          src={"/projectsBG.jpg"}
          alt="Background Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      </motion.div>

      <MaxWidthWrapper>
        <div className="my-3 md:my-6 lg:my-30">
          <h1 className="uppercase font-semibold text-zinc-400 text-center my-4">
            My Work
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
            Crafted With <AuroraText>Code</AuroraText>, Fueled By{" "}
            <AuroraText>Passion</AuroraText>
          </h1>
        </div>
        <ProjectCard projects={projects} />
      </MaxWidthWrapper>
    </section>
  );
};
export default Projects;
