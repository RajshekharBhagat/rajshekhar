"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const PreLoader = () => {
  const [state, setState] = useState<{
    progress: number;
    phase: "loading" | "wiping" | "done";
    show: boolean;
  }>({
    progress: 0,
    phase: "loading",
    show: false,
  });

  // Check first visit and initialize
  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("visited");
    if (!alreadyVisited) {
      setState(prev => ({ ...prev, show: true }));
      sessionStorage.setItem("visited", "true");
      document.body.style.overflow = "hidden";
    }
  }, []);

  // Handle progress animation
  const updateProgress = useCallback(() => {
    setState(prev => {
      if (prev.progress >= 100) {
        return { ...prev, phase: "wiping" };
      }
      return { ...prev, progress: prev.progress + 1 };
    });
  }, []);

  // Start loading sequence
  useEffect(() => {
    if (!state.show) return;

    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const handleLoad = () => {
      interval = setInterval(updateProgress, 20);
      
      // Fallback in case progress stalls
      timeout = setTimeout(() => {
        setState(prev => ({ ...prev, progress: 100, phase: "wiping" }));
        clearInterval(interval);
      }, 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener("load", handleLoad);
    };
  }, [state.show, updateProgress]);

  // Handle wipe-out and cleanup
  useEffect(() => {
    if (state.phase !== "wiping") return;

    const timeout = setTimeout(() => {
      setState(prev => ({ ...prev, phase: "done" }));
      document.body.style.overflow = "";
    }, 1000);

    return () => clearTimeout(timeout);
  }, [state.phase]);

  if (state.phase === "done" || !state.show) return null;

  return (
    <AnimatePresence>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 1 }}
        animate={{ opacity: state.phase === "wiping" ? 0 : 1 }}
        transition={{ duration: 0.8, delay: state.phase === "wiping" ? 0.8 : 0 }}
        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
      >
        <motion.h1
          animate={{
            height: state.phase === "wiping" ? "0px" : "fit-content",
            marginBottom: state.phase === "wiping" ? "0px" : "12px",
          }}
          transition={{ duration: 0.5 }}
          className="text-white text-6xl md:text-8xl font-black"
        >
          {state.progress}%
        </motion.h1>
        <motion.div
          initial={{ height: "4px", width: "0%", backgroundColor: "white" }}
          animate={{
            height: state.phase === "wiping" ? "100vh" : "4px",
            width: `${state.progress}%`,
            backgroundColor: "white",
          }}
          transition={{ duration: 0.8 }}
          className="bg-white"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PreLoader;