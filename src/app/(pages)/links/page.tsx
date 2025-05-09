import GetInTouch from "@/components/GetInTouch";
import MagneticContainer from "@/components/MagneticContainer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { WavyBackground } from "@/components/ui/wavy-background";
import { User } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const Links = [
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-1 cursor-none hover:text-zinc-200"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: "https://www.linkedin.com/in/rajshekhar-bhagat-291425242",
      title: "LinkedIn.com",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-1 cursor-none hover:text-zinc-200"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      ),
      href: "https://github.com/RajshekharBhagat",
      title: "GitHub",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-1 cursor-none hover:text-zinc-200"
        >
          <path d="M16 12a4 4 0 1 0-1.172 2.829A3.84 3.84 0 0 0 16 12.06l-.001-.063zm2.16 0a6.135 6.135 0 1 1-1.797-4.359a5.92 5.92 0 0 1 1.798 4.256l-.001.109zm1.687-6.406v.002a1.44 1.44 0 1 1-.422-1.018c.256.251.415.601.415.988v.029v-.001zm-7.84-3.44l-1.195-.008q-1.086-.008-1.649 0t-1.508.047c-.585.02-1.14.078-1.683.17l.073-.01c-.425.07-.802.17-1.163.303l.043-.014a4.12 4.12 0 0 0-2.272 2.254l-.01.027a6 6 0 0 0-.284 1.083l-.005.037a12 12 0 0 0-.159 1.589l-.001.021q-.039.946-.047 1.508t0 1.649t.008 1.195t-.008 1.195t0 1.649t.047 1.508c.02.585.078 1.14.17 1.683l-.01-.073c.07.425.17.802.303 1.163l-.014-.043a4.12 4.12 0 0 0 2.254 2.272l.027.01c.318.119.695.219 1.083.284l.037.005c.469.082 1.024.14 1.588.159l.021.001q.946.039 1.508.047t1.649 0l1.188-.024l1.195.008q1.086.008 1.649 0t1.508-.047c.585-.02 1.14-.078 1.683-.17l-.073.01c.425-.07.802-.17 1.163-.303l-.043.014a4.12 4.12 0 0 0 2.272-2.254l.01-.027c.119-.318.219-.695.284-1.083l.005-.037c.082-.469.14-1.024.159-1.588l.001-.021q.039-.946.047-1.508t0-1.649t-.008-1.195t.008-1.195t0-1.649t-.047-1.508c-.02-.585-.078-1.14-.17-1.683l.01.073a6.3 6.3 0 0 0-.303-1.163l.014.043a4.12 4.12 0 0 0-2.254-2.272l-.027-.01a6 6 0 0 0-1.083-.284l-.037-.005a12 12 0 0 0-1.588-.159l-.021-.001q-.946-.039-1.508-.047t-1.649 0zM24 12q0 3.578-.08 4.953a6.64 6.64 0 0 1-6.985 6.968l.016.001q-1.375.08-4.953.08t-4.953-.08a6.64 6.64 0 0 1-6.968-6.985l-.001.016q-.08-1.375-.08-4.953t.08-4.953A6.64 6.64 0 0 1 7.061.079L7.045.078q1.375-.08 4.953-.08t4.953.08a6.64 6.64 0 0 1 6.968 6.985l.001-.016Q24 8.421 24 12"></path>
        </svg>
      ),
      href: "https://www.instagram.com/_._r__a__j__",
      title: "Instagram",
    },
  ];
  return (
    <WavyBackground className="relative w-full min-h-screen overflow">
      <MaxWidthWrapper>
        <div className="h-full flex flex-col items-center">
          <div className="flex flex-col items-center py-3 max-w-md w-full mt-10 space-y-3">
            <div className="relative bg-zinc-900/50 overflow-hidden rounded-full size-24">
              <User className="absolute text-gray-500 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-full" />
            </div>
            <h1 className="text-xl tracking-tighter font-semibold text-zinc-50">
              Rajshekhar Bhagat
            </h1>
            <h1 className="text-zinc-400 text-sm lg:text-lg">
              Fullstack Developer | IT Student | Problem Solver
            </h1>
            <div className="flex mt-5 items-center gap-6 justify-between">
              <MagneticContainer>
                <Link
                  className="cursor-none py-2 bg-zinc-900 rounded-full hover:scale-110 transition-all  border px-3"
                  href={"/"}
                >
                  Website
                </Link>
              </MagneticContainer>
              <MagneticContainer>
                <Link
                  className="cursor-none py-2 bg-zinc-900 rounded-full hover:scale-110 transition-all  border px-3"
                  href={"/"}
                >
                  rajbhagat27889@gmail.com
                </Link>
              </MagneticContainer>
            </div>
            <div className="mt-10 flex flex-col w-full space-y-5">
              {Links.map((link, index) => (
                <div
                  key={index}
                  className="w-full hover:border-zinc-200 border-zinc-400 transition-all border py-3 px-3 mt-4 items-center gap-5 rounded-md flex bg-zinc-800/50"
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
        </div>
      </MaxWidthWrapper>
      <GetInTouch />
    </WavyBackground>
  );
};

export default Page;
