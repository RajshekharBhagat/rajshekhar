"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectDetails from "@/components/ProjectDetails";
import { Safari } from "@/components/magicui/safari";
import React, { useEffect, useRef, useState } from "react";

export type projectType = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink: string;
  githubLink: string;
};

const Page = () => {
  const projects = [
    {
      id: 1,
      title: "Ask-It",
      description:
        "A modern e-commerce platform with Stripe payments, product management, and user authentication. Built using Next.js, MongoDB, and Tailwind CSS.",
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "/Ask-It.png",
      liveLink: "https://ask-it-five.vercel.app",
      githubLink: "https://github.com/RajshekharBhagat/Ask-It",
    },
    {
      id: 2,
      title: "chatWave",
      description:
        "A Reddit clone for discussions and discoveries. Features voting, commenting, and real-time updates using Upstash Redis and NextAuth.",
      techStack: ["Next.js", "Redis", "React Query", "NextAuth"],
      image: "/chatWave.png",
      liveLink: "https://chat-wave-vert.vercel.app",
      githubLink: "https://github.com/RajshekharBhagat/Chat-Wave",
    },
    {
      id: 3,
      title: "swiftDrop",
      description:
        "A logistics dashboard for managing delivery partners and order assignments with real-time updates and role-based access.",
      techStack: ["React", "Node.js", "MongoDB", "ShadCN UI"],
      image: "/swiftDrop.png",
      liveLink: "https://swift-drop-amber.vercel.app",
      githubLink: "https://github.com/RajshekharBhagat/swiftDrop",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);


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
    <MaxWidthWrapper>
      <div>
        <h1 className="max-w-2xl mx-auto px-4  w-full mb-20 mt-10 text-xl">
          Crafted with precision, passion, and purpose — each project below
          reflects my journey as a Full Stack Developer. From sleek UIs to
          robust backends, explore how I bring ideas to life through code.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 min-h-screen">
        <div className="overflow-y-scroll h-screen space-y-20 p-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {projectRefs.current[index] = el}}
              className="relative h-[500px]"
            >
              <Safari
                url={project.liveLink}
                className="size-full"
                imageSrc={project.image}
              />
            </div>
          ))}
        </div>
        <div className="hidden md:block sticky top-0 h-screen p-6">
          <ProjectDetails project={projects[currentProjectIndex]} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
