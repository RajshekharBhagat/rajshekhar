'use client';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ProjectsShowcase = () => {
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

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setCurrentProjectIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
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
    <MaxWidthWrapper className="py-20">
      <h1 className="text-4xl font-bold text-center mb-16">My Projects</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Scrollable Project Previews */}
        <div className="w-full lg:w-[60%] space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {projectRefs.current[index] = el}}
              className="min-h-screen flex items-center justify-center"
            >
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <div className="border border-zinc-700 rounded-xl p-1 bg-zinc-900">
                  <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      quality={100}
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Mobile Details - Hidden on desktop */}
                <div className="lg:hidden mt-8 space-y-4">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p className="text-zinc-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-800 text-zinc-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Right Column - Sticky Project Details */}
        <div className="hidden lg:block lg:w-[40%]">
          <div className="sticky top-28 h-[calc(100vh-7rem)] flex items-center">
            <motion.div
              key={projects[currentProjectIndex].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full p-8 bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-700 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {projects[currentProjectIndex].title}
              </h2>
              <p className="text-zinc-300 mb-6">
                {projects[currentProjectIndex].description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projects[currentProjectIndex].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-800 text-zinc-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={projects[currentProjectIndex].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  Live Demo
                </a>
                <a
                  href={projects[currentProjectIndex].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors font-medium"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProjectsShowcase;