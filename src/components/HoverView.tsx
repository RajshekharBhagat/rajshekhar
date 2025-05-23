'use client';
import React from 'react'
import {MotionValue, motion} from 'framer-motion';
import { EyeIcon } from 'lucide-react';
import { SpinningText } from './magicui/spinning-text';

interface HoverViewProps {
    isVisible:boolean;
    position: {
        x: MotionValue<number>;
        y: MotionValue<number>;
    },
}

const HoverView = ({isVisible,position}:HoverViewProps) => {
  return (
    <motion.div
          style={{ x: position.x, y: position.y }}
          animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
          transition={{ type: "spring" }}
          className="absolute border-2 border-white/30 -translate-x-[50%] -translate-y-[50%] bg-black/20 backdrop-blur-xl z-[999] size-24 rounded-full flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
            transition={{ type: "spring", delay:0.2 }}
            className="relative size-[55%] rounded-full bg-white/30 flex flex-col items-center justify-center"
          >
            <SpinningText className='absolute text-xs tracking-wide'>View Details &bull; View Details &bull;</SpinningText>
            <EyeIcon className="text-white/90 size-[60%]" />
          </motion.div>
        </motion.div>
  )
}

export default HoverView
