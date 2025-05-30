"use client";
import GetInTouch from "@/components/GetInTouch";
import { Icons } from "@/components/Icons";
import MagneticContainer from "@/components/MagneticContainer";
import MainHeadingText from "@/components/MainHeadingText";
import { WavyBackground } from "@/components/ui/wavy-background";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const Links = [
    {
      icon: <Icons.LinkedIn />,
      href: "https://www.linkedin.com/in/rajshekhar-bhagat-291425242",
      title: "LinkedIn.com",
    },
    {
      icon: <Icons.Github />,
      href: "https://github.com/RajshekharBhagat",
      title: "GitHub",
    },
    {
      icon: <Icons.Instagram />,
      href: "https://www.instagram.com/_._r__a__j__",
      title: "Instagram",
    },
    {
      icon: <Icons.TwitterX />,
      href: "",
      title: "Twitter / X",
    },
    {
      icon: <Icons.LeetCode />,
      href: "",
      title: "LeetCode",
    },
    {
      icon: <Icons.Discord />,
      href: 'https://discordapp.com/users/689423419141259275',
      title: 'Discord'
    }
  ];
  return (
    <section className="relative w-full min-h-screen overflow-x-hidden">
      <WavyBackground
        colors={[
          "#FF007F",
          "#9D00FF",
          "#A020F0",
          "#FF00FF",
          "#3F9FFF",
          "#C500FF",
          "#5D3FD3",
          "#FF4F9A",
        ]}
        backgroundFill="#09090b"
        waveOpacity={0.5}
        className="h-full mt-20 max-w-xl w-full mx-auto px-4"
      >
        <div className="flex flex-col items-center py-3 w-full mt-10 space-y-3">
          <div className="relative bg-zinc-950 overflow-clip rounded-full aspect-[239/261] w-24">
            <Image
              src={"/profilePicture2.png"}
              alt="Profile Picture"
              fill
              className="object-contain"
            />
            <motion.div
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950"
            >
              <Image
                src={"/logos/RB1.png"}
                alt="Logo Image"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
          <MainHeadingText className="text-2xl font-extrabold text-zinc-50">
            Rajshekhar Bhagat
          </MainHeadingText>
          <h1 className="text-zinc-50 text-sm md:text-lg tracking-tight">
            Fullstack Developer | IT Student | Problem Solver
          </h1>
          <div className="flex mt-5 items-center gap-6 justify-between">
            <MagneticContainer>
              <Link
                className="cursor-none py-2 bg-zinc-950 rounded-full hover:scale-110 transition-all  border border-zinc-800 px-3"
                href={"/"}
              >
                Portfolio
              </Link>
            </MagneticContainer>
            <MagneticContainer>
              <Link
                className="cursor-none py-2 bg-zinc-950 rounded-full hover:scale-110 transition-all  border border-zinc-800 px-3"
                href={"/"}
              >
                rajbhagat27889@gmail.com
              </Link>
            </MagneticContainer>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
            {Links.map((link, index) => (
              <div
                key={index}
                className={cn(
                  "w-full hover:border-zinc-700 border-zinc-800 hover:bg-zinc-900 transition-all border-2 py-3 px-3 items-center gap-5 rounded-md flex bg-zinc-950",
                  Links.length % 2 === 1 && index === Links.length - 1
                    ? "col-span-2 "
                    : ""
                )}
              >
                {link.icon}
                <Link
                  className="cursor-none w-full text-center"
                  href={link.href}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </WavyBackground>
      <GetInTouch />
    </section>
  );
};

export default Page;
