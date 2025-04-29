import React from 'react'
import { FlipWords } from './ui/flip-words';

const Hero = () => {
  const text = ['Full Stack Developer','Problem Solver','Lifelong Learner'];
  return (
    <div className='grid items-center md:grid-cols-[3fr_1fr] md:mt-20 mt-20'>
      <div className=''>
        <h1 className='md:text-6xl text-3xl font-extrabold bg-gradient-to-b md:text-left from-white to-gray-400 bg-clip-text text-transparent text-center'>Turning ideas into interactive, blazing-fast web experiences.</h1>
        <div className='md:text-4xl text-3xl mt-4 font-bold bg-gradient-to-b justify-start  flex flex-col md:flex-row items-center from-white to-gray-400 bg-clip-text text-transparent'> I’m Rajshekhar — 
         <FlipWords className='text-gray-50' words={text} />
        </div>
      </div>
      <div className=''>
        
      </div>
      
    </div>
  )
}

export default Hero
