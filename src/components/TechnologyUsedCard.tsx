"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectType } from "../../types/types";
import Link from "next/link";

interface Props {
  technology: Pick<ProjectType, "Technology">["Technology"][number];
  idx: number;
}
const TechnologyUsedCard = ({ technology, idx }: Props) => {
  return (
    <motion.div whileHover={{x:10}} transition={{type:'spring'}} className="flex flex-col md:flex-row md:items-center flex-wrap py-1.5">
      <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{duration:0.3}} className="flex items-center">
        <h1 className="border aspect-square w-[2rem] mr-2 grid place-content-center bg-black border-zinc-800  rounded ">{idx}</h1>
      <Link
        href={technology.link}
        className="cursor-none hover:underline hover:text-white transition duration-300 underline-offset-4"
      >
        {technology.title}:
      </Link>
      </motion.div>
      <motion.p initial={{opacity:0.5,x:30}} whileInView={{opacity:1, x:0}} transition={{duration:0.3}} className="text-zinc-300 tracking-tight p-2 text-sm">{technology.description}</motion.p>
    </motion.div>
  );
};

export default TechnologyUsedCard;
