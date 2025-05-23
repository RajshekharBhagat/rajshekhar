import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";

const SocialIcons = () => {
  return (
    <div className="w-full justify-center h-full flex items-center gap-5 mt-4">
      <Link href={"https://www.linkedin.com/in/rajshekhar-bhagat-291425242"}>
        <Icons.LinkedIn className="text-zinc-400 hover:text-white size-5 cursor-none hover:scale-110 transition-all duration-200" />
      </Link>
      <Link href={"https://github.com/RajshekharBhagat"}>
        <Icons.Github className="text-zinc-400 hover:text-white size-5 cursor-none hover:scale-110 transition-all duration-200" />
      </Link>
      <Link href={"https://www.instagram.com/_._r__a__j__"}>
        <Icons.Instagram className="text-zinc-400 hover:text-white size-5 cursor-none hover:scale-110 transition-all duration-200" />
      </Link>
      <Link href={'https://x.com/RajBhag44561162'}>
        <Icons.TwitterX className="text-zinc-400 hover:text-white size-5 cursor-none hover:scale-110 transition-all duration-200" />
      </Link>
    </div>
  );
};

export default SocialIcons;
