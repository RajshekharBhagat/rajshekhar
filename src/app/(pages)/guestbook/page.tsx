import GetInTouch from "@/components/GetInTouch";
import GuestBookForm from "@/components/GuestBookForm";
import GuestBookMessages from "@/components/GuestBookMessages";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AuroraText } from "@/components/magicui/aurora-text";
import Image from "next/image";

const page = () => {
  return (
    <>
    <section className="relative min-h-screen w-full flex flex-col items-center mt-10 md:mt-18">
      <div className="absolute inset-x-0 h-screen -z-10">
        <Image
          src="/black-background.jpg"
          alt="background image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 h-screen bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950" />
        <div className="absolute inset-x-0 h-screen bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      </div>
      <MaxWidthWrapper className="relative">
        <div className="flex flex-col max-w-xl space-y-4  mx-auto w-full text-center">
          <h1 className=" font-semibold text-zinc-400">THE GUESTBOOK</h1>
          <AuroraText className="text-3xl md:text-5xl lg:text-7xl font-black mt-4">
            Got a message?{"  "}
          </AuroraText>
          <h1 className="text-3xl text-center inline-block md:text-4xl lg:text-6xl font-medium">
            I&apos;d like to hear from you!
          </h1>
          <p className="mt-10 text-zinc-400">
            Sign my guestbook and share your idea. You can tell me anything
            here!
          </p>
          <GuestBookForm />
          <GuestBookMessages />
        </div>
      </MaxWidthWrapper>
    </section>
    <MaxWidthWrapper>
      <GetInTouch />
    </MaxWidthWrapper>
    </>
  );
};

export default page;
