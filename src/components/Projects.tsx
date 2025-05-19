"use client";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ProjectType } from "../../types/types";
import ProjectCard from "./ProjectCard";
import { AuroraText } from "./magicui/aurora-text";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import projectsData from "@/lib/data";


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
    <section ref={sectionRef} className="relative w-full h-full overflow-hidden">
      <motion.div style={{rotate,scale}} className="absolute max-w-[1600px] w-full mx-auto h-screen -top-20 inset-0 -z-10">
        <Image
          src={"/projectsBG.jpg"}
          alt="Background Image"
          fill
          className="object-cover  max-w-[1600px] mx-auto"
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
        <ProjectCard projects={projectsData} />
      </MaxWidthWrapper>
    </section>
  );
};
export default Projects;
