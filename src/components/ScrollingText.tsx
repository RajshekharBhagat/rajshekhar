"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ScrollingText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  const text =
    " <Eat /> <Sleep /> <Code /> <Repeat /> <Deploy /> <Debug /> <Refactor /> <Push /> <Commit /> <Test /> <Launch /> ".repeat(
      3
    );

  return (
    <div
      ref={ref}
      className="relative w-[120%] h-[15rem] -left-[10%] overflow-hidden"
    >
      <div className="absolute px-3 flex items-center inset-0 top-1/2 -translate-y-[50%] origin-center bg-gradient-to-r lg:rotate-3 rotate-6 shadow-lg shadow-black  from-blue-500 via-cyan-500 to-violet-500 h-[3rem] lg:h-[4rem]">
        <motion.div
          style={{ translateX: y1 }}
          className="text-4xl whitespace-nowrap tracking-widest font-extrabold "
        >
          {text}
        </motion.div>
      </div>
      <div className="absolute inset-0 top-1/2 px-3 flex items-center -translate-y-[50%] origin-center -z-10 lg:-rotate-3 -rotate-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 h-[3rem] lg:h-[4rem]">
        <motion.div
          style={{ translateX: y2 }}
          className="text-4xl whitespace-nowrap tracking-widest font-extrabold"
        >
          {text}
        </motion.div>
      </div>
      <div className="absolute inset-0 top-1/2 -translate-y-[50%] origin-center -z-10 -rotate-3 bg-black/50 h-[4rem]"></div>
    </div>
  );
};

export default ScrollingText;
