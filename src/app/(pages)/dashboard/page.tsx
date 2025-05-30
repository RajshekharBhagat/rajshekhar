import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PersonalMessage from "@/components/PersonalMessage";

const Page = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-x-clip">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between mt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
        </div>
        <PersonalMessage />
      </MaxWidthWrapper>
    </section>
  );
};

export default Page;
