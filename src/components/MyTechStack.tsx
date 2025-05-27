"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticContainer from "./MagneticContainer";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { AuroraText } from "./magicui/aurora-text";
import { techStacks } from "@/lib/data";
import MainHeadingText from "./MainHeadingText";
import { GlowingEffect } from "./ui/glowing-effect";

const MyTechStack = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const TextVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.75,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center w-full h-full min-h-screen overflow-hidden"
    >
      <motion.div
        style={{ scale, rotate }}
        className="absolute max-w-xl aspect-square w-full mx-auto -z-10"
      >
        <Image
          src={"/TechStackBG.jpg"}
          fill
          className="object-cover bg-center aspect-square -z-10 blur-[2px]"
          priority
          alt={"TechStackBackground"}
        />
        <motion.div className="absolute inset-0 -z-9 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 pointer-events-none" />
        <motion.div className="absolute inset-0 -z-[9] bg-gradient-to-l from-zinc-950 via-transparent to-zinc-950 pointer-events-none"></motion.div>
      </motion.div>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center">
          <motion.h1
            variants={TextVariants}
            initial="hidden"
            whileInView="visible"
            className="text-sm font-semibold text-zinc-50"
          >
            I CONSTANTLY TRY TO IMPROVE
          </motion.h1>
          <motion.div
            variants={TextVariants}
            initial="hidden"
            whileInView="visible"
          >
            <MainHeadingText>
              <AuroraText className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold mt-3">
                My Tech Stack
              </AuroraText>
            </MainHeadingText>
          </motion.div>
          <div className="md:mt-30 mt-10 max-w-4xl justify-center relative w-full mx-auto flex flex-wrap gap-3 md:gap-5">
            {techStacks.map((techstack, index) => (
              <MagneticContainer key={index}>
                <motion.div
                  style={{ transformOrigin: "center" }}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      duration: 0.5,
                      delay: index * 0.04,
                      damping: 10,
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { type: "spring", duration: 0.2 },
                  }}
                  className="relative flex group shadow-2xs shadow-black/50 bg-zinc-950  items-center justify-center border-t-1 border-t-white/20 border-b-2 border-b-white/20 w-fit rounded-xl py-1.5 px-4 gap-4 pointer-events-none"
                >
                  <GlowingEffect
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="size-6 group-hover:scale-110 transition-all">
                    <techstack.icon />
                  </div>
                  <h1 className="font-semibold">{techstack.title}</h1>
                </motion.div>
              </MagneticContainer>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MyTechStack;
