'use client';
import React, { useRef } from 'react'
import {motion} from 'framer-motion';
const FreeDisc = () => {
    const constrainRef = useRef(null);
  return (
    <div ref = {constrainRef} className='absolute inset-0'>
      <motion.div
        drag
        dragConstraints ={constrainRef}
      className='relative size-30 border-8 border-white backdrop-blur-[4px] bg-zinc-900/10 rounded-full'>
        <div className='absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]'>
            
        </div>
      </motion.div>
    </div>
  )
}

export default FreeDisc
