'use client';
import { useEffect, useRef, useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

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
const Projects = () => {

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
        <MaxWidthWrapper>
          <div className='flex flex-col lg:flex-row'>
            <div className='border lg:w-[65%] h-screen'>

            </div>
            <div>

            </div>
          </div>
        </MaxWidthWrapper>
      );
}
export default Projects
