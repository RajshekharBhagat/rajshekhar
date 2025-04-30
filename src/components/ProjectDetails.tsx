import { projectType } from '@/app/(pages)/projects/page'
import React from 'react'

const ProjectDetails = ({project}:{project: projectType}) => {
  return (
    <div className='relative flex flex-col'>
        <div className='absolute inset-0 -left-15 top-1/2 h-[5px] w-[40px] bg-orange-500 rounded-full'></div>
        <h1 className='text-3xl font-semibold text-zinc-300'>{project.title}</h1>
    </div>
  )
}

export default ProjectDetails
