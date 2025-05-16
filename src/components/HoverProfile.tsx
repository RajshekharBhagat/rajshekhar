import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const HoverProfile = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [x,setX] = useState<number>(1);

  const handleMouseMove = (e: React.MouseEvent) => {
    if(x < 0.2) {
      setX(0);
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
  return (
    <motion.div ref={divRef} onMouseMove={(e) => handleMouseMove(e)} animate={{rotateY:x === 0 ? '360deg' : '0deg'}} transition={{duration:0.5}} className="relative rounded-full overflow-hidden w-[275px] h-[300px] grid place-items-center">
      <Image
        src={"/profilePicture2.png"}
        alt="Profile Picture"
        fill
        className="object-contain"
      />
      <motion.div style={{opacity:x}} className="absolute hidden lg:block size-[110%] overflow-hidden bg-black">
        <Image
          src={"/RBLogo2.png"}
          alt={"Logo Image"}
          fill
          className="object-cover"
        />
      </motion.div>
      
    </motion.div>
  );
};

export default HoverProfile;
