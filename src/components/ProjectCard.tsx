"use client";
import {
  motion,
  useAnimation,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { ProjectType } from "../../types/types";
import HoverView from "./HoverView";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  projects: ProjectType[];
}

const ProjectCard = ({ projects }: ProjectCardProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef = useRef(null);
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
        duration: 0.9,
      },
    },
  };
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const top = useTransform(scrollYProgress, [0, 1], ["2%", "72%"]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setCurrentIndex(index);
          }
        });
      },
      {
        threshold: 0.9,
      }
    );
    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  return (
    <div ref={containerRef} className="relative py-16 lg:flex">
      <div className="flex flex-col h-full gap-y-6 md:gap-y-24 lg:max-w-[65%]">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            project={project}
            index={index}
            ref={(el) => {
              refs.current[index] = el;
            }}
          />
        ))}
      </div>
      <div className="relative hidden lg:block lg:w-[35%] overflow-hidden">
        <motion.div
          style={{ top: top }}
          className="absolute inset-0 h-[28%]"
        >
          {projects[currentIndex] && (
            <motion.div
              key={currentIndex}
              whileHover={{scale:1.02,x:5,}}
              className="p-2"
            >
              <motion.h1
                variants={TextVariants}
                initial="hidden"
                animate="visible"
                className={cn(
                  "text-3xl font-bold",
                  projects[currentIndex].textColor
                )}
              >
                {projects[currentIndex].title}
              </motion.h1>
              <motion.p
                variants={TextVariants}
                initial="hidden"
                animate="visible"
                className={cn(
                  "text-zinc-300 mt-2 tracking-tight",
                  projects[currentIndex].smallTextColor
                )}
              >
                {projects[currentIndex].description}
              </motion.p>
              <div className={cn("mt-4 flex flex-wrap gap-2")}>
                {projects[currentIndex].techStack.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{opacity:0,scale:0.5}}
                    animate={{opacity:1,scale:1}}
                    transition={{
                      delay:idx*0.05,
                      duration:0.3
                    }}
                    className={cn(
                      "px-3 py-1 rounded-full text-sm",
                      projects[currentIndex].bg_color,
                      projects[currentIndex].smallTextColor
                    )}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const Card = React.forwardRef<
  HTMLDivElement,
  { project: ProjectType; index: number }
>(({ project, index }, ref) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const router = useRouter();
  const position = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothPosition = {
    x: useSpring(position.x, {
      damping: 45,
      stiffness: 400,
      mass: 1,
      restDelta: 0.001,
    }),
    y: useSpring(position.y, {
      damping: 45,
      stiffness: 400,
      mass: 1,
      restDelta: 0.001,
    }),
  };
  const control = useAnimation();
  const handleMouseEnter = () => {
    control.start({ rotate: -5, scale: 1.05 });
  };
  const handleMouseLeave = () => {
    control.start({ rotate: 0, scale: 1 });
  };

  const handleCardMouseEnter = () => {
    setIsVisible(true);
    console.log("Card Mouse Enter");
  };
  const handleCardMouseLeave = () => {
    setIsVisible(false);
    position.x.set(0);
    position.y.set(0);
  };
  const handleCardMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      position.x.set(clientX - rect.left);
      position.y.set(clientY - rect.top);
    }
  };

  return (
    <div
      key={index}
      ref={ref}
      data-index={index}
      className="h-full flex flex-col items-center lg:p-2"
    >
      <div
        ref={cardRef}
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
        onMouseMove={handleCardMouseMove}
        onClick={() => router.push(`/projects/${project.id}`)}
        className="relative rounded-xl w-full h-full p-1"
      >
        <HoverView isVisible={isVisible} position={smoothPosition} />
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.3,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            project.bg_from,
            project.bg_to,
            `relative bg-gradient-to-b aspect-video lg:aspect-[4/3] border-4 lg:border-8 border-zinc-900 ring-zinc-500 ring rounded-xl w-full overflow-clip`
          )}
        >
          <div className=" p-4 hidden lg:block">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
              {project.title}
            </h1>
            <p
              className={cn(
                "tracking-tight text-sm mt-1",
                project.smallTextColor
              )}
            >
              {project.description}
            </p>
          </div>
          <motion.div
            animate={control}
            className={cn(
              project.shadowColor,
              "absolute left-1/2 -translate-x-1/2 lg:-bottom-10 -bottom-5 w-[90%] aspect-video shadow-2xl rounded-t-lg overflow-hidden"
            )}
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
      </div>
      <div className="mt-5 px-2 lg:hidden h-fit w-full">
        <div className="flex flex-col gap-2">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={cn("font-bold text-lg", project.textColor)}
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={cn("text-sm", project.smallTextColor)}
          >
            {project.description}
          </motion.p>
          <div className="flex flex-wrap gap-3 p-1">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.09 }}
                className={cn(
                  `py-1 px-3 rounded-sm grid place-content-center`,
                  project.bg_color
                )}
              >
                <h1 className={cn(`text-xs`, project.smallTextColor)}>
                  {tech}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

Card.displayName = "Card";

export default ProjectCard;
