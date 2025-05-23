'use client';
import { Clipboard, MapPinIcon } from "lucide-react";
import { useState } from "react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { FlipWords } from "./ui/flip-words";
import ContactDrawer from "./ContactDrawer";
import RotatingIconCloud from "./RotatingIconCloud";


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
        <h1 className="md:text-5xl lg:text-6xl text-4xl font-semibold bg-gradient-to-b md:text-left from-white to-gray-400 bg-clip-text text-transparent text-center">
          Turning ideas into interactive, blazing-fast web experiences.
        </h1>
        <div className="text-center mt-4 md:text-left text-2xl text-zinc-300 flex flex-col md:flex-row">
          <span>I’m Rajshekhar a</span>
          <FlipWords
            className="text-zinc-300"
            words={text}
            />
        </div>
        <div className="flex items-center justify-center md:justify-start  mt-4 gap-2">
          <MapPinIcon className="text-zinc-300 size-5" />
          <h1 className="text-sm text-zinc-300">Mumbai, India</h1>
        </div>
      </div>
      <div className="relative hidden md:flex size-full items-center justify-center overflow-hidden">
        <RotatingIconCloud />
      </div>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-10">
    <ContactDrawer open={open} setOpen={setOpen}>
    <InteractiveHoverButton onClick={() => setOpen(!open)} className="cursor-none">
      Let&apos;s Connect
    </InteractiveHoverButton>
    </ContactDrawer>
    <div onClick={copyText} className="flex relative z-20 items-center gap-2 hover:scale-110 transition-transform">
      {
        copySuccess ? (
          <h1>Copied to Clipboard</h1>
        ) : (
          <>
            <Clipboard className="text-zinc-400 " />
            <h1 className="text-zinc-400">rajbhagat27889@gmail.com</h1>
          </>
        )
      }
    </div>
    </div>
    </>
  );
};

export default Hero;
