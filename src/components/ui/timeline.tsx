"use client";
import {MapPin } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  time: string;
  main: string;
  company: string;
  location: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-zinc-950 md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className=" sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-zinc-950 border border-neutral-700 p-2" />
              </div>
              <div className="flex flex-col">
                <h3 className="hidden md:block text-sm text-zinc-400 md:pl-20 font-bold">
                  {item.time}
                </h3>
                <h1 className="hidden md:block text-2xl md:pl-20 font-bold bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  {item.main}
                </h1>
                <h1 className="hidden md:block md:pl-20  text-zinc-400">
                  {item.company}
                </h1>
                <div className="flex flex-row items-center gap-2 md:pl-20">
                  <MapPin className="size-4 text-zinc-400 hidden md:block" />
                  <h1 className="hidden md:block text-zinc-400">
                    {item.location}
                  </h1>
                </div>
              </div>
              <h1></h1>
            </div>
            <div className="pl-20 pr-4 md:pl-4 w-full">
            <div className="flex flex-col gap-1.5 md:hidden my-3">
                <h3 className="block md:hidden text-sm text-zinc-400 md:pl-20 font-bold">
                  {item.time}
                </h3>
                <h1 className="block md:hidden text-lg tracking-tight md:text-2xl md:pl-20 font-bold bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  {item.main}
                </h1>
                <h1 className="block md:hidden md:pl-20 text-sm  text-zinc-400">
                  {item.company}
                </h1>
                <div className="flex flex-row items-center gap-2 md:pl-20">
                  <MapPin className="size-4 text-zinc-400" />
                  <h1 className="block md:hidden text-sm text-zinc-400">
                    {item.location}
                  </h1>
                </div>
              </div>
              {item.content}{" "}
            </div>
          </div>
        ))}
  <div
    style={{
      height: height + "px",
    }}
    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
  >
    <motion.div
      style={{
        height: heightTransform,
        opacity: opacityTransform,
      }}
      className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
    />
  </div>
      </div>
    </div>
  );
};
