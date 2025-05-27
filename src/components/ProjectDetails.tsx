"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ProjectType } from "../../types/types";

interface Props {
  project: ProjectType;
}
const ProjectDetails = ({ project }: Props) => {
  const TextVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      whileHover={{ scale: 1.02, x: 5 }}
      className="p-2 w-full h-full"
    >
      <motion.h1
        variants={TextVariants}
        initial={{ opacity: 0, scale: 0.95, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", duration: 0.9 }}
        className={cn("text-3xl font-bold", project.textColor)}
      >
        {project.title}
      </motion.h1>
      <motion.p
        variants={TextVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "text-zinc-300 mt-2 tracking-tight",
          project.smallTextColor
        )}
      >
        {project.description}
      </motion.p>
      <div className={cn("mt-4 flex flex-wrap gap-2")}>
        {project.techStack.map((tech, idx) => {
          return (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: idx * 0.05,
                duration: 0.3,
              }}
              className={cn(
                "px-3 py-1 rounded-full text-sm",
                project.bg_color,
                project.smallTextColor
              )}
            >
            {tech}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
