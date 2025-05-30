"use client";
import AboutMe from "@/components/AboutMe";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MyTechStack from "@/components/MyTechStack";
import Projects from "@/components/Projects";
import ScrollingText from "@/components/ScrollingText";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen w-full flex flex-col items-center overflow-x-clip"
      >
        <FlickeringGrid
          className="absolute inset-0 -z-10 max-w-[1600px] w-full mx-auto"
          squareSize={10}
          gridGap={10}
          color="#6B7280"
          maxOpacity={0.3}
          flickerChance={0.1}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-950 to-transparent"></div>
        <MaxWidthWrapper className="h-full flex flex-col items-center justify-center mt-16 md:mt-20">
          <div className="text-xs relative text-zinc-400 mb-10 p-1 border-1 border-zinc-700 rounded-full">
            This site is under development{" "}
          </div>
          <Hero />
        </MaxWidthWrapper>
      </section>
      <section
        id="project"
        className="relative w-full min-h-screen overflow-clip"
      >
        <Projects limit={3}/>
        <div className="mt-6 w-full flex justify-center">
          <Link
            href={"/projects"}
            className="cursor-none flex items-center gap-2 hover:gap-4 transition-all duration-300 py-1.5 rounded-full"
          >
            More Projects <CircleArrowRight className="size-7 group-hover:" />
          </Link>
        </div>
      </section>
      <section
        id="techStack"
        className="relative w-full min-h-screen overflow-x-clip flex flex-col items-center justify-center"
      >
        <MyTechStack />
      </section>
      <section className="relative w-full h-full overflow-x-clip">
        <ScrollingText />
      </section>
      <section
        id="about"
        className="relative w-full min-h-screen overflow-x-clip flex flex-col items-center justify-center"
      >
        <AboutMe />
      </section>
      <section
        id="getInTouch"
        className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-x-clip"
      >
        <GetInTouch />
      </section>
    </>
  );
}
