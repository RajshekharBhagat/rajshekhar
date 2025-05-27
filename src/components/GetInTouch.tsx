"use client";
import { motion } from "framer-motion";
import { AuroraText } from "./magicui/aurora-text";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

import Image from "next/image";
import { useState } from "react";
import ContactDrawer from "./ContactDrawer";
import MagneticContainer from "./MagneticContainer";
import MainHeadingText from "./MainHeadingText";

const  GetInTouch = () => {
  const [open, setOpen] = useState<boolean>(false);
  const TextVariantsLeft = {
    hidden: {
      opacity: 0,
      scale:0.95,
      x:-100,
    },
    visible: {
      opacity:1,
      scale:1,
      x:0,
      transition: {
        type:'spring',
        duration:2
      }
    }
  }
  const TextVariantRight = {
    hidden: {
      opacity: 0,
      scale:0.95,
      x:100,
    },
    visible: {
      opacity:1,
      scale:1,
      x:0,
      transition: {
        type:'spring',
        duration:2
      }
    }
  }
  return (
  <div className="relative max-w-3xl mx-auto w-full h-full py-10 flex flex-col justify-center overflow-x-clip items-center">
      <div className="relative top-0 bg-gradient-to-t from-zinc-950 to-transparent rounded-full size-36">
        <Image src={'/RBLogo.png'} alt={'LogoImage'} fill className="object-contain bg-center" />
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.75}} className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/10 to-zinc-950/90" />
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.75}} className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/10 to-zinc-950/90" />
      </div>
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
        I build complete web solutions that are responsive, reliable, and ready
        for scale
      </motion.p>
    </div>
  );
};

export default GetInTouch;
