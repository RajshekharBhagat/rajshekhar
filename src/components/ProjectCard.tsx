"use client";
import React from "react";
import { ProjectType } from "../../types/types";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  projects: ProjectType;
}

const ProjectCard = ({ projects }: ProjectCardProps) => {
  const control = useAnimation();

  const handleMouseEnter = () => {
    control.start({ rotate: -5, scale:1.05 });
  };
  const handleMouseLeave = () => {
    control.start({ rotate: 0 ,scale:1});
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="h-full lg:w-[65%]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="lg:h-screen py-4 flex flex-col items-center lg:p-2"
          >
            <div className="relative w-full h-full p-1">
              <motion.div
                initial={{scale:0.8,opacity:0.5}}
                whileInView={{scale:1,opacity:1}}
                transition={{
                  duration:0.3
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`relative bg-gradient-to-b from-blue-950 to-black aspect-video lg:aspect-[4/3] border-4 lg:border-8 border-zinc-900 ring-zinc-500 ring rounded-xl w-full overflow-clip`}
              >
                <div className=" p-4 hidden lg:block">
                  <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                    {project.title}
                  </h1>
                  <p className="text-zinc-300">{project.description}</p>
                </div>
                <motion.div
                  animate={control}
                  className="absolute left-1/2 -translate-x-1/2 lg:-bottom-10 -bottom-5 w-[90%] aspect-video shadow-blue-400 shadow-2xl rounded-t-lg overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title}-image`}
                    fill
                    className="object-contain rounded-t-lg"
                    priority
                  />
                </motion.div>
              </motion.div>
              <div className="mt-5 px-2 lg:hidden overflow-hidden">
                <div className="flex flex-col gap-2">
                  <motion.h1 initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} transition={{duration:0.5}} className="font-bold text-lg">{project.title}</motion.h1>
                  <motion.p initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} transition={{duration:0.5}} className="text-sm text-zinc-400">{project.description}</motion.p>
                  <div className="flex flex-wrap gap-3 p-1">
                    {project.techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{opacity:0,y:-10}}
                         whileInView={{opacity:1,y:0}}
                        transition={{delay:index*0.09}}
                        className={`py-1 px-3 rounded-sm bg-blue-500/30 grid place-content-center`}
                      >
                        <h1 className={`text-xs text-blue-300`}>{tech}</h1>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative hidden lg:block lg:w-[35%] p-2">
          <div className="sticky top-0 border-zinc-500 border-2 rounded-xl h-[84vh]">
            
          </div>
        </div>
    </div>
  );
};

export default ProjectCard;
