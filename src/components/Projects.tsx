"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ProjectCard from "./ProjectCard";
import { AuroraText } from "./magicui/aurora-text";
import MainHeadingText from "./MainHeadingText";


const Projects = ({limit}:{limit?:number}) => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset:['start end', 'end 50%']
  })

  const TextVariants = {
    hidden: {
      opacity: 0,
      scale:0.95,
      y:30,
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

  const rotate = useTransform(scrollYProgress,[0,1],[0,180])
  return (
    <section ref={sectionRef} className="relative my-10 w-full h-full">
      <motion.div style={{rotate}} className="sticky top-0 -z-50 max-w-[1600px] w-full h-[50dvh] md:h-screen mx-auto">
        <Image
          src={"/backgrounds/projectsBG.jpg"}
          alt="Background Image"
          fill
          priority
          className="md:object-contain blur-[2px] object-cover w-full mx-auto"
        />
        <div className="absolute -inset-1 bg-black/50" />
        <div className="absolute -inset-1 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950" />
        <div className="absolute -inset-1 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      </motion.div>
      <MaxWidthWrapper className="-mt-[50dvh] md:-mt-[100dvh]">
        <div className="">
          <motion.h1 variants={TextVariants} initial="hidden" whileInView="visible" className="uppercase font-semibold text-zinc-400 text-center my-4">
            My Work
          </motion.h1>
          <motion.div variants={TextVariants} initial="hidden" whileInView="visible">
          <MainHeadingText className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center my-5">
            Crafted With <AuroraText>Code</AuroraText>, Fueled By{" "}
            <AuroraText>Passion</AuroraText>
          </MainHeadingText>
          </motion.div>
        </div>
        <ProjectCard limit={limit} />
      </MaxWidthWrapper>
    </section>
  );
};
export default Projects;
