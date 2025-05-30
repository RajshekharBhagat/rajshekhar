'use client';
import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SocialIcons = ({className}:{className?:string}) => {
  return (
    <motion.div className={cn(className,"my-4 flex items-center justify-center md:justify-start gap-4")}>
      <Link href={"https://www.linkedin.com/in/rajshekhar-bhagat-291425242"}>
        <Icons.LinkedIn className="text-zinc-400 hover:text-blue-500 size-5 cursor-none hover:scale-110 transition-all duration-200" />
      </Link>
      <Link href={"https://github.com/RajshekharBhagat"}>
        <Icons.Github className="text-zinc-400 hover:text-white size-5 cursor-none hover:scale-110 transition-all duration-200" />
      </Link>
      <Link href={"https://www.instagram.com/_._r__a__j__"}>
        <Icons.Instagram className="text-zinc-400 hover:text-pink-500 size-5 cursor-none hover:scale-110 transition-all duration-200" />
      </Link>
      <Link href={'https://x.com/RajBhag44561162'}>
        <Icons.TwitterX className="text-zinc-400 hover:text-blue-500 size-5 cursor-none hover:scale-110 transition-all duration-200" />
      </Link>
    </motion.div>
  );
};

export default SocialIcons;
