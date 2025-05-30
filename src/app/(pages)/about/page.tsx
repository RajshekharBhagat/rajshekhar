"use client";
import AboutTimeline from "@/components/AboutTimeline";
import GetInTouch from "@/components/GetInTouch";
import MainHeadingText from "@/components/MainHeadingText";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SocialIcons from "@/components/SocialIcons";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import Image from "next/image";



const Page = () => {
  const TextVariants = {
    hidden: {
      opacity: 0,
      scale:0.95,
      x:-50,
    },
    visible: {
      opacity:1,
      scale:1,
      x:0,
      transition: {
        type:'spring',
        duration:0.75
      }
    }
  }
  return (
    <>
      <section
        className=" relative w-full flex flex-col overflow-x-clip antialiased"
      >
        <MaxWidthWrapper className="mt-20">
          <div className="flex flex-col items-center lg:flex-row w-full">
            <div className="lg:w-[60%] max-w-md lg:max-w-xl mx-auto flex flex-col items-center lg:items-start">
            <motion.p variants={TextVariants} initial="hidden" whileInView="visible" className="text-sm font-semibold text-zinc-500">
                MORE ABOUT ME
              </motion.p>
              <MainHeadingText className="text-4xl w-full md:text-4xl lg:text-6xl font-semibold text-zinc-100 text-center lg:text-left mt-3 md:mt-6">
                <motion.p variants={TextVariants} initial="hidden" whileInView="visible">Hi There!</motion.p>
                <motion.p variants={TextVariants} initial="hidden" whileInView="visible">
                I&apos;m{" "}
                <AuroraText className="font-extrabold">Rajshekhar</AuroraText>
                </motion.p>
              </MainHeadingText>
              <motion.p variants={TextVariants} initial="hidden" whileInView="visible" className="mt-3 md:mt-6 lg:text-xl md:text-lg text-zinc-400 text-center lg:text-left">
                I&apos;m a passionate and curious Full Stack Developer with a
                love for building intuitive, fast, and scalable web
                applications. From backend logic to sleek UI, I enjoy crafting
                complete solutions that solve real-world problems. I&apos;m
                always exploring new technologies and pushing my limits to grow
                as a developer.
              </motion.p>
              <motion.p variants={TextVariants} initial="hidden" whileInView="visible" className="mt-3 md:mt-6 lg:text-xl md:text-lg text-center lg:text-left text-zinc-400 mb-5">
                I wake up every day with a deep sense of purpose, eager to make
                a meaningful difference in the world around me.
              </motion.p>
              <SocialIcons />
            </div>
            <motion.div className="hidden relative lg:flex flex-col items-center justify-center w-[25%] mx-auto aspect-[239/261] shadow-xl shadow-white/30 rounded-xl overflow-clip">
              <Image draggable="false" src={'/profilePicture2.png'} alt="Profile Picture" quality={100} fill className="object-cover bg-center" />
            </motion.div>
          </div>
          <div className="h-[20rem] w-full bg-zinc-950 flex flex-col items-center overflow-clip rounded-md mt-24">
            <h1 className="text-sm md:text-lg font-semibold text-zinc-500">THE EXPERIENCE</h1>
            <MainHeadingText className="text-3xl md:text-5xl lg:text-6xl max-w-xl w-full mx-auto  font-semibold text-center relative z-10 mt-3 md:mt-6">
              Breathing Life into{" "}
              <AuroraText className="font-extrabold">Code</AuroraText> and{" "}
              <AuroraText className="font-extrabold">Concepts</AuroraText>
            </MainHeadingText>
            <div className="w-[40rem] h-40 relative">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              <div className="absolute inset-0 w-full h-full bg-zinc-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <div></div>
        </MaxWidthWrapper>
      </section>
      <section className="relative w-full min-h-screen ">
        <AboutTimeline />
        <GetInTouch />
      </section>
    </>
  );
};

export default Page;
