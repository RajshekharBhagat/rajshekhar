'use client';
import { Icons } from '@/components/Icons';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import projectsData from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';


const Page = ({params}:{params:Promise<{id:string}>}) => {
   const {id} = use(params)
    const project = projectsData.find((project) => project.id === Number(id))
    if(!project) {
        return <div>Not Found</div>
    }
  return (
    <section className='relative w-full min-h-screen overflow-x-hidden'>
        <div className='absolute blur-[1px] backdrop-blur-xs inset-0 h-[50dvh] max-w-[1600px]  md:mt-14 -z-10  mx-auto'>
            <Image src={project.image} alt='bgImage' fill className='object-cover' />
            <div className='absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent'></div>
        </div>
        <MaxWidthWrapper className='flex flex-col mt-[50dvh]'>
            <div className='flex items-center justify-between flex-wrap'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold'>{project.title}</h1>
                <div className='flex items-center gap-3'>
                    <Link href={project.githubLink} className={buttonVariants({variant:'ghost',className:'cursor-none'})}><Icons.Github size={20} /></Link>
                    <Link href={project.liveLink} className={buttonVariants({variant:'outline',className:'text-black cursor-none'})}>Visit<ArrowUpRightIcon /></Link>
                </div>
            </div>
            <div className='md:text-lg text-sm mt-4 tracking-tight'>
                {project.description}
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {project.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.09 }}
                  className={`py-1 px-3 rounded-sm bg-zinc-500/30 grid place-content-center`}
                >
                  <h1 className={`text-xs`}>{tech}</h1>
                </motion.div>
              ))}
            </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default Page
