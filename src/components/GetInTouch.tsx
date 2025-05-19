"use client";
import { motion } from "framer-motion";
import { AuroraText } from "./magicui/aurora-text";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

import Image from "next/image";
import { useState } from "react";
import ContactDrawer from "./ContactDrawer";
import MagneticContainer from "./MagneticContainer";

const GetInTouch = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative w-full  min-h-screen flex flex-col justify-center overflow-hidden items-center">
      <div className="relative top-0 bg-gradient-to-t from-zinc-950 to-transparent rounded-full size-36">
        <Image src={'/RBLogo.png'} alt={'LogoImage'} fill className="object-contain bg-center" />
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.75}} className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/10 to-zinc-950/90" />
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.75}} className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/10 to-zinc-950/90" />
      </div>
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="text-4xl md:text-5xl lg:text-6xl text-center font-bold"
      >
        <AuroraText>Think</AuroraText> It. <AuroraText>Code</AuroraText> It.{" "}
        <AuroraText>Launch</AuroraText> It.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="text-sm font-semibold md:text-2xl lg:text-4xl text-center mt-3 md:mt-6 mb-10"
      >
        I&apos;m Here to Bring Your Ideas to Life
      </motion.p>
      <MagneticContainer>
        <ContactDrawer open={open} setOpen={setOpen}>
          <InteractiveHoverButton
            onClick={() => setOpen(!open)}
            className="cursor-none"
          >
            Get in Touch
          </InteractiveHoverButton>
        </ContactDrawer>
      </MagneticContainer>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="text-sm text-center mt-10"
      >
        Full-time & freelance opportunities welcome.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="md:text-sm text-sm text-center max-w-2xs w-full mx-auto mt-3 md:mt-6"
      >
        I build complete web solutions that are responsive, reliable, and ready
        for scale
      </motion.p>
    </div>
  );
};

export default GetInTouch;
