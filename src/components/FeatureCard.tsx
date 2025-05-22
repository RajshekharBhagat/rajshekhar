"use client";
import React from "react";
import { ProjectType } from "../../types/types";
import { motion } from "framer-motion";
import { CardSpotlight } from "./ui/card-spotlight";

interface Props {
  feature: Pick<ProjectType, "Features">["Features"][number];
  idx: number;
}

const FeatureCard = ({ feature, idx }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * idx, duration: 0.45 }}
      className="bg-zinc-900 ring ring-zinc-800 rounded-md flex flex-col gap-2"
    >
      <CardSpotlight className="w-full h-full">
        <div className="relative flex items-center gap-2 flex-wrap z-20">
          <feature.icon className="p-1 size-5 md:size-6 lg:size-8 rounded text-violet-500" />
          <h1 className="tracking-tight">{feature.title}</h1>
        </div>
        <div className="relative z-20 p-2">
          <h1 className="tracking-tight text-sm text-zinc-400">
            {feature.description}
          </h1>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};

export default FeatureCard;
