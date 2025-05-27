'use client';
import { CheckIcon, Clipboard, MapPinIcon } from "lucide-react";
import { useState } from "react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { FlipWords } from "./ui/flip-words";
import ContactDrawer from "./ContactDrawer";
import RotatingIconCloud from "./RotatingIconCloud";
import BurnoAceSC from "./MainHeadingText";
import SocialIcons from "./SocialIcons";
import { ShimmerButton } from "./magicui/shimmer-button";


const Hero = () => {
  const [open,setOpen] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<boolean>(false)
  async function copyText() {
    try {
      await window.navigator.clipboard.writeText('rajbhagat27889@gmail.com')
      setCopySuccess(true);
    } catch (error) {
      console.log(error)
      setCopySuccess(false);
    }
  }

  const text = ["Fullstack Developer", "Problem Solver", "Lifelong Learner"];
  return (
    <>
    <div className="relative grid items-center md:grid-cols-[4fr_2fr]">
      <div>
        <BurnoAceSC className="md:text-4xl lg:text-5xl text-3xl font-semibold bg-gradient-to-b md:text-left from-white to-gray-400 bg-clip-text text-transparent text-center">
          Turning ideas into interactive, blazing-fast web experiences.
        </BurnoAceSC>
        <div className="relative text-center mt-4 md:text-left text-xl md:text-2xl lg:text-3xl text-zinc-300 flex flex-col md:flex-row py-4">
          <span>I’m Rajshekhar a</span>
          <FlipWords
            className="text-zinc-300"
            words={text}
            />
        </div>
        <div className="flex items-center justify-center md:justify-start  mt-4 gap-2">
          <MapPinIcon className="text-zinc-300 size-4" />
          <h1 className="text-sm text-zinc-300">Mumbai, India</h1>
        </div>
        <SocialIcons />
      </div>
      <div className="relative hidden md:flex size-full items-center justify-center overflow-hidden">
        <RotatingIconCloud />
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-10 mt-4">
    <ContactDrawer open={open} setOpen={setOpen}>
    <InteractiveHoverButton onClick={() => setOpen(!open)} className="cursor-none">
      Let&apos;s Connect
    </InteractiveHoverButton>
    </ContactDrawer>
    <ShimmerButton onClick={copyText} className="flex px-2 py-2 relative z-20 items-center gap-2 hover:scale-[1.05] group transition-transform">
      {
        copySuccess ? (
          <div className="flex gap-2 items-center">
            <CheckIcon className="text-white size-4" />
          <h1>Copied to Clipboard</h1>
          </div>
        ) : (
          <>
            <Clipboard className="text-zinc-400 group-hover:text-white transition-colors size-4" />
            <h1 className="text-zinc-400 group-hover:text-white transition-colors ">rajbhagat27889@gmail.com</h1>
          </>
        )
      }
    </ShimmerButton>
    </div>
    </>
  );
};

export default Hero;
