"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ProjectCard from "./ProjectCard";
import { AuroraText } from "./magicui/aurora-text";
import MainHeadingText from "./MainHeadingText";


const Projects = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset:['start end','40% start']
  })

  const TextVariants = {
    hidden: {
      opacity: 0,
      scale:0.95,
      y:50,
    },
    visible: {
      opacity:1,
      scale:1,
      y:0,
      transition: {
        type:'spring',
        duration:0.75
      }
    }
  }

  const rotate = useTransform(scrollYProgress,[0,1],[0,-90])
  const scale = useTransform(scrollYProgress,[0,1],[0.5,1.5])

  return (
    <section ref={sectionRef} className="relative w-full h-full overflow-x-clip">
      <motion.div style={{rotate,scale}} className="absolute max-w-2xl aspect-square w-full mx-auto -top-20 inset-0 -z-10">
        <Image
          src={"/projectsBG.jpg"}
          alt="Background Image"
          fill
          className="object-cover w-full mx-auto"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      </motion.div>
      <MaxWidthWrapper>
        <div className="my-3 md:my-6 lg:my-30">
          <motion.h1 variants={TextVariants} initial="hidden" whileInView="visible" className="uppercase font-semibold text-zinc-400 text-center my-4">
            My Work
          </motion.h1>
          <motion.div variants={TextVariants} initial="hidden" whileInView="visible">
          <MainHeadingText className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
            Crafted With <AuroraText>Code</AuroraText>, Fueled By{" "}
            <AuroraText>Passion</AuroraText>
          </MainHeadingText>
          </motion.div>
        </div>
        <ProjectCard />
      </MaxWidthWrapper>
    </section>
  );
};
export default Projects;
