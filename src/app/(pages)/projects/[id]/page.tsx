'use client';
import FeatureCard from '@/components/FeatureCard';
import GetInTouch from '@/components/GetInTouch';
import HoverButton from '@/components/HoverButton';
import { Icons } from '@/components/Icons';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import TechnologyUsedCard from '@/components/TechnologyUsedCard';
import { buttonVariants } from '@/components/ui/button';
import { projectsData } from '@/lib/data';
import { AnimatePresence, motion } from 'framer-motion';
import { StarIcon, ZapIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { FaExclamation } from 'react-icons/fa';


const Page = ({params}:{params:Promise<{id:string}>}) => {
   const {id} = use(params)
    const project = projectsData.find((project) => project.id === Number(id))
    const [isExpended,setIsExpended] = useState<boolean>(false);
    const router = useRouter()
    useEffect(() => {
      const handleScroll = () => {
        if(isExpended) {
          setIsExpended(false);
        }
      }
      if(isExpended) {
        window.addEventListener('scroll',handleScroll);
      }
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    },[isExpended])

    if (!project) {
      return (
        <div className="aspect-square w-full grid place-content-center">
          <div className="flex flex-col items-center space-y-2">
            <FaExclamation className="size-24 text-zinc-300 animate-pulse duration-1000" />
            <h1>Project not found</h1>
          </div>
        </div>
      );
    }
  return (
    <section className='relative w-full min-h-screen overflow-x-hidden py-5'>
        <div className='absolute blur-[2px] backdrop-blur-xs inset-0 h-[50vh] max-w-[1600px]  md:mt-14 -z-10  mx-auto'>
            <Image src={project.image} alt='bgImage' fill className='object-cover' />
            <div className='absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent'></div>
        </div>
        <MaxWidthWrapper className='flex flex-col mt-[50dvh]'>
            <div className='flex items-center gap-2 justify-between flex-wrap'>
                <h1 className={'text-3xl md:text-5xl lg:text-6xl font-semibold'}>{project.title}</h1>
                <div className='flex items-center gap-3'>
                    <Link href={project.githubLink} className={buttonVariants({variant:'ghost',className:'cursor-none'})}><Icons.Github className='size-6' /></Link>
                    <HoverButton onClick={() => router.push(project.liveLink) }>Visit</HoverButton>
                </div>
            </div>
            <div className={'md:text-lg text-sm mt-4 tracking-tight lg:px-6 py-2'}>
                {project.description}
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {project.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.09, duration:0.3 }}
                  className={`py-1 px-3 rounded-sm grid place-content-center bg-black ring ring-zinc-700`}
                >
                  <h1 className={`text-sm`}>{tech}</h1>
                </motion.div>
              ))}
            </div>
            <motion.div layout layoutId='expand-image' onClick={() => setIsExpended(!isExpended)} className='relative z-50 mt-10 max-w-3xl aspect-video mx-auto w-full border-4 md:border-8 ring-1 ring-zinc-500 border-zinc-800 rounded-xl overflow-hidden'>
              <Image src={project.image} alt={`${project.title}-image`} fill className='object-cover' />
            </motion.div>
            {isExpended && (
              <AnimatePresence>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='fixed inset-0 bg-black/50 z-50 backdrop-blur-[2px] flex flex-col items-center justify-center' onClick={() => setIsExpended(!isExpended)}>
                  <motion.div layout layoutId='expand-image' className='relative w-full max-w-6xl mx-auto aspect-video border-4 md:border-8 ring-1 ring-zinc-500 border-zinc-800 rounded-xl overflow-hidden'>
                    <Image src={project.image} alt={`${project.title}-expanded`} fill className='object-cover' />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            )}
            <div className='flex items-center gap-2 py-5 lg:py-10'>
              <ZapIcon className='size-5 lg:size-8 text-yellow-500'/>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-bold'>Key Features</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto'>
                {project.Features.map((feature,idx) => (
                  <FeatureCard key={idx} feature={feature} idx={idx} />
                ))}
            </div>
            <div className='h-[2px] w-full my-5 lg:my-10 bg-zinc-800'></div>
            <div className='flex gap-2 py-5 lg:py-10'>
                <StarIcon className='size-5 lg:size-8 text-yellow-500' />
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-bold'>Technology used</h1>
            </div>
            <div className='flex flex-col max-w-6xl space-y-4'>
                {project.Technology.map((technology,idx) => (
                  <TechnologyUsedCard key={idx} technology={technology} idx={idx} />
                ))}
            </div>
            <div className='h-[2px] w-full my-5 lg:my-10 bg-zinc-800'></div>
            <div className='flex flex-wrap gap-2'>
              <h1 className='text-zinc-400 text-sm md:text-lg'>Wants to build something similar or better?</h1>
              <Link
              href="mailto:rajbhagat27889@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 cursor-none"
              >
               Let&apos;s talk!
            </Link>
            </div>
            <GetInTouch />
        </MaxWidthWrapper>
    </section>
  )
}

export default Page
