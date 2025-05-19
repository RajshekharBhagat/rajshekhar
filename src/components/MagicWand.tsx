'use client';
import { MotionValue, motion, useTransform } from 'framer-motion'
import React, { useEffect, useState } from 'react'

interface MagicWandProps {
    position:{
        x:MotionValue<number>,
        y:MotionValue<number>,
    }
}

const MagicWand = ({position}:MagicWandProps) => {
  const [screenWidth,setScreenWidth] = useState<number>(0);
  useEffect(() => {
    if(typeof window.innerWidth !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }
  },[])
  const rotate = useTransform(position.x,[0,screenWidth || 1],[0,10])
  return (
    <motion.div style={{x:position.x,y:position.y,rotate:rotate, transformOrigin:'top'}} initial={{x:0,y:0}} transition={{duration:0.45}} className='absolute hidden lg:flex pointer-events-none z-[999] top-0 left-0 flex-col'>
      <div className='w-12 h-24 bg-gradient-to-r from-zinc-400 via-white to-zinc-400 rounded-t-md'></div>
      <div className='w-12 h-screen bg-gradient-to-r from-zinc-800 via-black to-zinc-800'></div>
    </motion.div>
  )
}

export default MagicWand
