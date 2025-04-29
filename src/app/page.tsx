'use client'
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {motion} from 'framer-motion';


export default function Home() {
  return (
    <MaxWidthWrapper>
      <Hero />
      <div className="h-[1000px] w-full flex flex-col items-center justify-center">
        <motion.div className="bg-zinc-900 size-60 rounded-lg flex flex-col items-center justify-center border border-zinc-600"
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.4, ease:'easeOut'}}
        >
          <span className="text-2xl font-semibold text-gray-400">Still Building.</span>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
}
