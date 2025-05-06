'use client';
import AboutTimeline from "@/components/AboutTimeline";
import GetInTouch from "@/components/GetInTouch";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SocialIcons from "@/components/SocialIcons";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesCore } from "@/components/ui/sparkles";
import {motion} from 'framer-motion';
const Page = () => {
  return (
    <section className=" w-full min-h-screen overflow-hidden antialiased">
    <MaxWidthWrapper className="relative mt-10 md:mt-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 mb-10">
        <motion.div  className="max-w-xl w-full mx-auto">
          <p className="text-sm text-zinc-400">MORE ABOUT ME</p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-zinc-100 inline-block mt-3 md:mt-6">
            Hi There! I&apos;m{" "}
            <AuroraText className="font-extrabold">Rajshekhar</AuroraText>
          </h1>
          <p className="mt-3 md:mt-6 text-zinc-400">
            I&apos;m a passionate and curious Full Stack Developer with a love
            for building intuitive, fast, and scalable web applications. From
            backend logic to sleek UI, I enjoy crafting complete solutions that
            solve real-world problems. I&apos;m always exploring new
            technologies and pushing my limits to grow as a developer.
          </p>
          <p className="mt-3 md:mt-6 text-zinc-400 ">
            I wake up every day with a deep sense of purpose, eager to make a
            meaningful difference in the world around me.
          </p>
          <SocialIcons />
        </motion.div>
        <div></div>
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
      {/* <div className="flex h-[20rem] md:h-[30rem] flex-col items-center mt-30">
        <h1 className=" font-extrabold text-zinc-400">THE EXPERIENCE</h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl max-w-md  font-semibold text-center mt-3 md:mt-6">
          Breathing Life into{" "}
          <AuroraText className="font-extrabold">Code</AuroraText> and{" "}
          <AuroraText className="font-extrabold">Concepts</AuroraText>
        </h1>
      </div> */}
      <div></div>
      <AboutTimeline />
      <GetInTouch />
    </MaxWidthWrapper>
    </section>
  );
};

export default Page;
