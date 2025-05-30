'use client';
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
const HoverProfile = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [x,setX] = useState<number>(1);
  const [isVisible,setIsVisible] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if(isVisible) return;
    if(x < 0.2) {
      setX(0);
      setIsVisible(true);
      ShootConfetti();
      return;
    }
    const {clientX} = e;
    const rect = divRef.current?.getBoundingClientRect();
    if(rect) {
      const localX = clientX - rect.left;
      const normalizedX = 1 - Math.min(Math.max(localX / rect.width, 0), 1);
      setX(normalizedX);
    }
  }
  const handleMouseLeave = () => {
    if(isVisible) return;
    setX(1);
  }

  const ShootConfetti = () => {
    const end = Date.now() + 1 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
 
    const frame = () => {
      if (Date.now() > end) return;
 
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });
 
      requestAnimationFrame(frame);
    };
 
    frame();
  };

  return (
    <motion.div ref={divRef} onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={handleMouseLeave} animate={{rotateY:x === 0 ? '360deg' : '0deg'}} transition={{duration:0.5}} className="relative  w-[275px] aspect-[239/261] grid place-items-center">
      <h1 aria-hidden='true' className="hidden lg:block select-none absolute -top-3 -translate-y-[50%] rotate-45 animate-bounce -right-3 translate-x-[50%] font-black text-lg">
        {isVisible ? "Fullstack Magic!" : "Hover Me"}
      </h1>
      <div className="relative overflow-clip w-full h-full rounded-xl shadow-2xl shadow-white/30">
      <Image
        src={"/profilePicture2.png"}
        alt="Profile Picture"
        fill
        className="object-contain"
        />
      <motion.div style={{opacity:x}} className="absolute hidden lg:block w-full h-full bg-black">
        <Image
          src={"/RBLogo2.png"}
          alt={"Logo Image"}
          fill
          className="object-cover"
          />
      </motion.div>
          </div>
    </motion.div>
  );
};

export default HoverProfile;
