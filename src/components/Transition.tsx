"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Transition({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // To detect route changes

  return (
    <AnimatePresence>
      <motion.div
        key={pathname} // Important to trigger animation on route change
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
