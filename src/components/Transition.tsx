'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface TransitionProps {
    children: React.ReactNode;
    className?: string;
}

const Transition = ({children , className} : TransitionProps) => {
  return (
    <motion.div className={className}
        initial ={{y:20, opacity: 0}}
        animate ={{y:0, opacity: 1}}
        transition={{ease: 'easeInOut',duration: 0.75}}
    >
        {children}
    </motion.div>
  )
}

export default Transition
