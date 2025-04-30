import { IconCloud } from "./magicui/icon-cloud";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { FlipWords } from "./ui/flip-words";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
];

const Hero = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  const text = ["Fullstack Developer", "Problem Solver", "Lifelong Learner"];
  return (
    <>
    <div className="relative grid items-center md:grid-cols-[3fr_2fr] md:mt-24 mt-30 p-6">
      <div className="">
        <h1 className="md:text-5xl lg:text-7xl text-3xl font-semibold bg-gradient-to-b md:text-left from-white to-gray-400 bg-clip-text text-transparent text-center">
          Turning ideas into interactive, blazing-fast web experiences.
        </h1>
        <div className="mt-10 text-3xl md:text-4xl h-[10rem] text-center flex flex-col md:inline-block items-center font-semibold bg-gradient-to-b md:text-left from-white to-gray-400 bg-clip-text text-transparent">
          <span>I’m Rajshekhar a</span>
          <FlipWords
            className="text-white"
            words={text}
            />
        </div>
      </div>
      <div className="relative hidden md:flex size-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
    </div>
    <div className="flex items-center justify-center gap-5">
    <InteractiveHoverButton>
      Let&apos;s Connect
    </InteractiveHoverButton>
    </div>
    </>
  );
};

export default Hero;
