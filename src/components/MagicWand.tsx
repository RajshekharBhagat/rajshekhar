'use client';
import { MotionValue, motion } from 'framer-motion'
import React from 'react'

interface MagicWandProps {
    position:{
        x:MotionValue<number>,
        y:MotionValue<number>,
    }
}

const MagicWand = ({position}:MagicWandProps) => {
    
  return (
    <motion.div style={{x:position.x,y:position.y}} initial={{x:0,y:0}} transition={{duration:0.45}} className='absolute hidden lg:flex pointer-events-none z-[999] top-0 left-0 flex-col'>
      <div className='w-12 h-24 bg-gradient-to-r from-zinc-400 via-white to-zinc-400 rounded-t-md'></div>
      <div className='w-12 h-screen bg-gradient-to-r from-zinc-800 via-black to-zinc-800'></div>
    </motion.div>
  )
}

export default MagicWand
