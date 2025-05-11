"use client";
import AboutTimeline from "@/components/AboutTimeline";
import GetInTouch from "@/components/GetInTouch";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SocialIcons from "@/components/SocialIcons";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const Page = () => {
  const sectionRef = useRef(null);

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full flex flex-col overflow-hidden antialiased"
      >
        <MaxWidthWrapper>
          <div className="flex flex-col items-center lg:flex-row w-full">
            <motion.div className=" max-w-xl w-full mx-auto lg:w-[60%] flex flex-col items-center justify-center">
              <p className=" md:text-lg text-zinc-400 text-center">
                MORE ABOUT ME
              </p>
              <h1 className="text-4xl w-full md:text-4xl lg:text-6xl font-semibold text-zinc-100 text-center lg:text-left mt-3 md:mt-6">
                <p>Hi There!</p>
                I&apos;m{" "}
                <AuroraText className="font-extrabold">Rajshekhar</AuroraText>
              </h1>
              <p className="mt-3 md:mt-6 lg:text-xl md:text-lg text-zinc-400 text-center lg:text-left">
                I&apos;m a passionate and curious Full Stack Developer with a
                love for building intuitive, fast, and scalable web
                applications. From backend logic to sleek UI, I enjoy crafting
                complete solutions that solve real-world problems. I&apos;m
                always exploring new technologies and pushing my limits to grow
                as a developer.
              </p>
              <p className="mt-3 md:mt-6 lg:text-xl md:text-lg text-center lg:text-left text-zinc-400 mb-5">
                I wake up every day with a deep sense of purpose, eager to make
                a meaningful difference in the world around me.
              </p>
              <SocialIcons />
            </motion.div>
            <div className="relative  lg:w-[40%] lg:h-screen lg:flex flex-col items-center justify-center hidden">
              <motion.div
                animate={{
                  y: [
                    -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, -1, -2,
                    -3, -4, -5,
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="relative shadow-2xl shadow-zinc-500 w-[60%] h-[70%]  rounded-4xl overflow-clip"
              >
                <motion.div
                  style={{ opacity: 0 }}
                  className="absolute inset-0 bg-black flex z-10 flex-col items-center justify-center text-9xl"
                >
                  RB
                </motion.div>
                <Image
                  src={"/profilePicture.png"}
                  alt="Profile Picture"
                  fill
                  className="object-cover bg-scroll shrink-0 pointer-events-none"
                />
              </motion.div>
              {/* <FreeDisc /> */}
            </div>
            <div className="lg:hidden block">
            {/* <DraggableProfile /> */}
            </div>
            {/* <div className="lg:hidden flex flex-col items-center justify-center h-[30rem] w-full max-w-[30rem]" >
            <motion.div
                animate={{
                  y: [
                    -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, -1, -2,
                    -3, -4, -5,
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="relative shadow-2xl shadow-zinc-500 w-[60%] h-[80%]  rounded-4xl overflow-clip"
              >
                <motion.div
                  style={{ opacity: 0 }}
                  className="absolute inset-0 bg-black flex z-10 flex-col items-center justify-center text-9xl"
                >
                  RB
                </motion.div>
                <Image
                  src={"/profilePicture.png"}
                  alt="Profile Picture"
                  fill
                  className="object-cover bg-scroll shrink-0 pointer-events-none"
                />
              </motion.div>
            </div> */}
          </div>
          <div className="md:h-[30rem] h-[20rem] -mb-20 w-full bg-zinc-950 flex flex-col items-center overflow-hidden rounded-md md:mt-30">
            <h1 className=" font-extrabold text-zinc-400">THE EXPERIENCE</h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl max-w-md  font-semibold text-center relative z-10 mt-3 md:mt-6">
              Breathing Life into{" "}
              <AuroraText className="font-extrabold">Code</AuroraText> and{" "}
              <AuroraText className="font-extrabold">Concepts</AuroraText>
            </h1>
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
      <section className="relative w-full min-h-screen">
        <AboutTimeline />
        <GetInTouch />
      </section>
    </>
  );
};

export default Page;
