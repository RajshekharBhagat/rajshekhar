"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import HoverProfile from "./HoverProfile";
import MagicWand from "./MagicWand";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { AuroraText } from "./magicui/aurora-text";
import SocialIcons from "./SocialIcons";
import MainHeadingText from "./MainHeadingText";

const AboutMe = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const TextVariants = {
    hidden: {
      opacity: 0,
      scale:0.95,
      x:-50,
    },
    visible: {
      opacity:1,
      scale:1,
      x:0,
      transition: {
        type:'spring',
        duration:0.75
      }
    }
  }

  const SpringOption = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  }

  const position = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }
  const WantPosition = {
    x:useSpring(position.x,SpringOption),
    y:useSpring(position.y,SpringOption),
  }
  const handleMouseMove = (e:React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if(rect) {
      position.x.set(e.clientX - rect.left - 24 );
      position.y.set(e.clientY - rect.top +50);
    } else {
      position.x.set(e.clientX - 24);
      position.y.set(e.clientY + 10);
    }
    
  }
  const handleMouseLeave = () => {
    position.x.set(0);
    position.y.set(0);
  }
  return (
    <div
      ref={ref}
      id="about"
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col antialiased items-center justify-center w-full min-h-screen overflow-hidden"
    >
      <MagicWand position={WantPosition} />
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mb-10">
          <div className="max-w-3xl flex flex-col items-center lg:items-start justify-center w-full mx-auto">
            <motion.h1
              variants={TextVariants}
              initial="hidden"
              whileInView="visible"
              className="text-sm font-semibold text-zinc-400"
            >
              KNOW ABOUT ME
            </motion.h1>
            <motion.div
              variants={TextVariants}
              initial="hidden"
              whileInView="visible"
            >
              <MainHeadingText className="text-3xl md:text-3xl lg:text-4xl font-bold lg:text-left text-center mt-5">
              Full Stack Developer building seamless experiences,{" "}
              <AuroraText>front</AuroraText> to
              <AuroraText> back</AuroraText>.
              </MainHeadingText>
            </motion.div>
            <motion.p
              variants={TextVariants}
              initial="hidden"
              whileInView="visible"
              className="mt-6 md:text-lg tracking-wide text-zinc-400 lg:text-left text-center"
            >
              I&apos;m Rajshekhar Bhagat, a passionate and curious Full Stack
              Developer with a love for building intuitive, fast, and scalable
              web applications. From backend logic to sleek UI, I enjoy crafting
              complete solutions that solve real-world problems. I&apos;m always
              exploring new technologies and pushing my limits to grow as a
              developer.
            </motion.p>
            <motion.p
              variants={TextVariants}
              initial="hidden"
              whileInView="visible"
              className="mt-6 md:text-lg text-zinc-400 tracking-wide text-center lg:text-left"
            >
              I wake up every day with a deep sense of purpose, eager to make a
              meaningful difference in the world around me.
            </motion.p>
            <motion.div
              variants={TextVariants}
              initial="hidden"
              whileInView="visible"
              className="flex gap-3"
            >
              <SocialIcons />
            </motion.div>
            <motion.div
              variants={TextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <Link
                href={"/about"}
                className="mt-6 cursor-none flex items-center gap-2 hover:gap-4 transition-all duration-300 py-1.5 rounded-full"
              >
                More about me{" "}
                <CircleArrowRight className="size-7 group-hover:" />
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <HoverProfile />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutMe;
