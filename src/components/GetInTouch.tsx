"use client";
import { motion } from "framer-motion";
import { AuroraText } from "./magicui/aurora-text";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

import Image from "next/image";
import { useState } from "react";
import ContactDrawer from "./ContactDrawer";
import MagneticContainer from "./MagneticContainer";
import MainHeadingText from "./MainHeadingText";

const GetInTouch = () => {
  const [open, setOpen] = useState<boolean>(false);
  const TextVariantsLeft = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };
  const TextVariantRight = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };
  return (
    <main className="relative h-full w-screen overflow-x-clip ">
      <div className="relative max-w-3xl py-30 mx-auto w-full h-full flex flex-col justify-center items-center">
        <motion.div animate={{y:[-10,10,-10]}} transition={{repeat:Infinity, ease:'backInOut', repeatType:'loop',duration:3}} className="relative -mb-10 -z-10 size-36">
          <Image src={"/logos/RB1.png"} alt={"LogoImage"} fill className="" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"></div>
        </motion.div>
        <motion.div
          variants={TextVariantsLeft}
          initial="hidden"
          whileInView="visible"
          className="text-4xl md:text-5xl lg:text-6xl text-center font-bold"
        >
          <MainHeadingText>
            <AuroraText>Think</AuroraText> It. <AuroraText>Code</AuroraText> It.{" "}
            <AuroraText>Launch</AuroraText> It.
          </MainHeadingText>
        </motion.div>
        <motion.p
          variants={TextVariantRight}
          initial="hidden"
          whileInView="visible"
          className="text-sm font-semibold md:text-lg lg:text-xl text-center mt-3 md:mt-6 mb-10"
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
          I build complete web solutions that are responsive, reliable, and
          ready for scale
        </motion.p>
      </div>
    </main>
  );
};

export default GetInTouch;
