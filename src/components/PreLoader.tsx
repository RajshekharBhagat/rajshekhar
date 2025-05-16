"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isWiping, setIsWiping] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let interval: NodeJS.Timeout;

    const handleLoad = () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsWiping(true);
            return 100;
          }
          return prev + 1;
        });
      },20);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isWiping) {
      const timeout = setTimeout(() => {
        document.body.style.overflow = "";
        setIsDone(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isWiping]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isWiping ? 0 : 1 }}
        transition={{ duration: 0.8, delay: isWiping ? 0.8 : 0 }}
        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
      >
        <motion.h1
          animate={{
            height: isWiping ? "0px" : "fit-content",
            marginBottom: isWiping ? "0px" : "12px",
          }}
          transition={{ duration: 0.5 }}
          className="text-white text-8xl font-black"
        >
          {progress}%
        </motion.h1>
        <motion.div
          initial={{ height: "12px", width: "0%", backgroundColor: "white" }}
          animate={{
            height: isWiping ? "100vh" : "12px",
            width: `${progress}%`,
            backgroundColor:"white",
          }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PreLoader;
