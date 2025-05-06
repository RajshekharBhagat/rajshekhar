'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
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
      const projectRefs = useRef<(HTMLElement | null)[]>([]);
    
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
        <>
          <div className="flex flex-col h-full lg:flex-row">
            {/* Left side image + inline mobile details */}
            <div className="flex-1 h-screen lg:h-screen overflow-y-scroll scrollbar-hidden scroll-smooth snap-y snap-mandatory">
              {projects.map((project, i) => {
                return (
                  <section
                  ref={(el) => {
                    if (el) projectRefs.current[i] = el;
                  }}
                    key={project.id}
                    data-index={i}
                    className="snap-start h-screen flex flex-col lg:flex-row items-start justify-center p-2 lg:space-y-0"
                  >
                    <motion.div
                      
                      className="w-full p-1 border-zinc-600 border rounded-xl"
                    >
                      <div className="relative w-full max-w-5xl border-zinc-500 aspect-video overflow-hidden rounded-lg border ">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                          sizes=""
                        />
                      </div>
                    </motion.div>
    
                    {/* Mobile only details */}
                    <div className="lg:hidden mt-6 space-y-4">
                      <h2 className="text-2xl font-bold">{project.title}</h2>
                      <p className="text-zinc-600">{project.description}</p>
                      <ul className="list-disc list-inside text-zinc-500">
                        {project.techStack.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3 text-sm">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-zinc-200 text-zinc-800 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
            <motion.div
              initial={{opacity:0,x:40}}
              whileInView={{opacity:1,x:0}}
              transition={{
                duration:0.5,
                type:'spring',
              }}
              key={projects[currentProjectIndex].id}
              className="w-full lg:w-[40%] hidden lg:block sticky top-0 h-screen p-10 text-white"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  {projects[currentProjectIndex].title}
                </h2>
                <p className="text-zinc-400">
                  {projects[currentProjectIndex].description}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  {projects[currentProjectIndex].techStack.map((tech) => (
                    <span key={tech} className="bg-zinc-800 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      );
}
export default Projects
