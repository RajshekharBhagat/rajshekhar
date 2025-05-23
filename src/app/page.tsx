"use client";
import AboutMe from "@/components/AboutMe";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MyTechStack from "@/components/MyTechStack";
import Projects from "@/components/Projects";
import ScrollingText from "@/components/ScrollingText";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen w-full flex flex-col items-center overflow-x-clip"
      >
        <FlickeringGrid
          className="absolute inset-0 h-full max-w-[1600px] mx-auto"
          squareSize={7}
          gridGap={9}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.1}
        />
        <MaxWidthWrapper className="h-full flex flex-col items-center justify-center mt-16 md:mt-20">
          <div className="text-xs relative text-zinc-400 mb-10 p-1 border-1 border-zinc-700 rounded-full">This site is under development </div>
          <Hero />
        </MaxWidthWrapper>
      </section>
      <section id="project" className="relative w-full min-h-screen overflow-x-clip">
        <Projects />
      </section>
      <section id='techStack' className="relative w-full min-h-screen overflow-x-clip flex flex-col items-center justify-center">
        <MyTechStack />
      </section>
      <section className="relative w-full h-full overflow-x-clip">
      <ScrollingText />
      </section>
      <section id="about" className="relative w-full min-h-screen overflow-x-clip flex flex-col items-center justify-center">
        <AboutMe />
      </section>
      <section
        id="getInTouch"
        className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-x-clip"
      >
        <MaxWidthWrapper>
          <GetInTouch />
        </MaxWidthWrapper>
      </section>
    </>
  );
}
