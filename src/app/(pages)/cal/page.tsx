import MainHeadingText from '@/components/MainHeadingText'
import React from 'react'
import { FaExclamation } from 'react-icons/fa'

const CalPage = () => {
  return (
    <section className='relative w-full min-h-screen flex flex-col items-center justify-center overflow-x-clip'>
      <div className='flex flex-col items-center gap-4'>
        <FaExclamation className='size-40 animate-pulse'/>
        <MainHeadingText className='text-3xl text-center'>
          Meetings page is under development.
        </MainHeadingText>
      </div>
    </section>
  )
}

export default CalPage