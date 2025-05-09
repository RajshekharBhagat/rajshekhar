"use client";
import AboutMe from "@/components/AboutMe";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MyTechStack from "@/components/MyTechStack";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative w-full min-h-screen flex flex-col items-center justify-start md:justify-center overflow-hidden -mt-20 lg:-mt-0"
      >
        <FlickeringGrid
          className="absolute inset-0 h-full w-screen"
          squareSize={7}
          gridGap={9}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.1}
        />
        <MaxWidthWrapper className="min-h-screen flex flex-col items-center justify-center">
          <Hero />
        </MaxWidthWrapper>
      </section>
      {/* <section
        id="project"
        className="relative w-full min-h-screen overflow-hidden border"
      >
        <Projects />
      </section> */}
      <section id='techStack' className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
        <MyTechStack />
      </section>
      <section id="about" className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
        <AboutMe />
      </section>
      <section
        id="getInTouch"
        className="relative flex flex-col items-center justify-center w-full min-h-screen"
      >
        <MaxWidthWrapper>
          <GetInTouch />
        </MaxWidthWrapper>
      </section>
    </>
  );
}
