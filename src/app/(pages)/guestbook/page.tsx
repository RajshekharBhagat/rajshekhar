import GetInTouch from "@/components/GetInTouch";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AuroraText } from "@/components/magicui/aurora-text";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/black-background.jpg"
          alt="background image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      <MaxWidthWrapper className="relative z-50">
        <div className="flex flex-col max-w-md mx-auto w-full text-center items-center py-10">
          <h1 className=" font-semibold text-zinc-400">THE GUESTBOOK</h1>
          <AuroraText className="text-3xl md:text-5xl lg:text-7xl font-black">
            Got a message?{"  "}
          </AuroraText>
          <h1 className="text-3xl text-center inline-block md:text-4xl lg:text-6xl font-medium">
            I&apos;d like to hear from you!
          </h1>
          <p className="mt-10 text-zinc-400">
            Sign my guestbook and share your idea. You can tell me anything
            here!
          </p>
        </div>
      </MaxWidthWrapper>
      <GetInTouch />
    </div>
  );
};

export default page;
