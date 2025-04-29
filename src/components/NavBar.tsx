"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full backdrop-blur-xs bg-zinc-950/15 ">
      <MaxWidthWrapper>
        <AnimatePresence>
          {sideBar && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-gradient-to-b from-black to-transparent"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh", }}
              exit={{ opacity: 0, height: 0 }}
              
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Link href={"/"}>
                About Me
                <div className="" />
              </Link>
              <Link href={"/"}>
                Projects
                <div className="" />
              </Link>
              <Link href={"/"}>
                Education
                <div className="" />
              </Link>
              <Link href={"/"}>
                Contact Me
                <div className="" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center h-full justify-between ">
          <Link href={"/"}>
            <h1 className="font-extrabold text-lg md:text-xl  ">
              RAJSHEKHAR BHAGAT
            </h1>
          </Link>
          <div
            onClick={() => setSideBar(!sideBar)}
            className="md:hidden flex z-10 transition-all flex-col"
          >
            <div className="relative h-6 w-6">
              <div
                className={cn(
                  "absolute left-0 top-1/2 h-[2px] origin-center w-5 bg-white transition-all duration-300",
                  sideBar ? "-rotate-45" : "-translate-y-1.5"
                )}
              ></div>
              <div
                className={cn(
                  "absolute left-0 top-1/2 h-[2px] origin-center w-5 bg-white transition-all duration-300",
                  sideBar ? "rotate-45" : "translate-y-1.5"
                )}
              ></div>
            </div>
          </div>
          <div className="items-center gap-3 text-sm text-zinc-400 hidden md:flex">
            <Link href={"/"} className="relative">
              About Me
              <div className="absolute z-[100] left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-white" />
            </Link>
            <Link href={"/"} className="relative">
              Projects
              <div className="absolute h-[2px] w-0 hover:w-full transition-all duration-300 bg-white bottom-0" />
            </Link>
            <Link href={"/"} className="relative">
              Education
              <div className="absolute h-[2px] w-0 hover:w-full transition-all duration-300 bg-white bottom-0" />
            </Link>
            <Link href={"/"} className="relative">
              Contact Me
              <div className="absolute h-[2px] w-0 hover:w-full transition-all duration-300 bg-white bottom-0" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
