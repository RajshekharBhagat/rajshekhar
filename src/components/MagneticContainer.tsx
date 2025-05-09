'use client';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
interface MagneticContainerProps {
    children: React.ReactNode;
}


const MagneticContainer = (
    {children}: MagneticContainerProps
) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState<{x:number,y:number}>({x:0,y:0})
    const onMouseMoveEvent = (e: { clientX: any; clientY: any; }) => {
      if(!ref.current) return;
        const {clientX, clientY } = e;
        const {width, height, top, left} = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2 );
        const y = clientY - (top + height/ 2 );
        setPosition({x,y})
    }
    const onMouseLeaveEvent = () => {
        setPosition({x:0,y:0})
    }
    
const {x,y} = position
  return (
    <motion.div
    onMouseMove={onMouseMoveEvent}
    onMouseLeave={onMouseLeaveEvent}
    ref={ref}
    animate={{x,y}}
    transition={{
        type:'spring',
        stiffness:150
    }}

    >
      {children}
    </motion.div>
  )
}

export default MagneticContainer
