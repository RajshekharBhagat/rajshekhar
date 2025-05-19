import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <>
    <div className="w-full h-[2px] bg-gradient-to-r from-zinc-950 via-white to-zinc-950" />
    <div className="py-16 bg-zinc-950/15">
      <MaxWidthWrapper className="grid md:grid-cols-[1.1fr_1.4fr_1.1fr] gap-8 md:gap-16">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Rajshekhar Bhagat</h1>
          <p className="mt-3 text-sm text-zinc-400">
            Help you create experiences where aesthetics & functionality
            seamlessly come together.
          </p>
          <SocialIcons />
        </div>
        <div className="grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-white">General</h3>
            <ul className="mt-4 flex flex-col gap-y-3 text-sm">
              <li>
                <Link
                  className="text-zinc-400 hover:text-zinc-200 transition-color cursor-none"
                  href="/"
                  >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-400 hover:text-zinc-200 transition-color cursor-none"
                  href="/projects"
                  >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-400 hover:text-zinc-200 transition-color cursor-none"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-400 hover:text-zinc-200 transition-color cursor-none"
                  href="/#about"
                  >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white">The Website</h3>
            <ul className="mt-4 flex flex-col gap-y-3 text-sm">
              <li>
                <Link
                  className="text-zinc-400 hover:text-zinc-200 transition-color cursor-none"
                  href="/guestbook"
                >
                  Guest Book
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-400 hover:text-zinc-200 transition-color cursor-none"
                  href="/bucket-list"
                >
                  Bucket List
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-400 hover:text-zinc-200 transition-color cursor-none"
                  href="/links"
                >
                  Links
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-400 hover:text-zinc-200 transition-color cursor-none"
                  href="/cal"
                  >
                  Book a call
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-base text-neutral-200">
            Feel free to reach out to me for any inquiries or collaboration
            opportunities.
          </h2>
          <p className="mt-3 flex items-center gap-2 text-base text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <Link
              href="mailto:rajbhagat27889@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-none"
              >
              rajbhagat27889@gmail.com
            </Link>
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
              </>
  );
};

export default Footer;
