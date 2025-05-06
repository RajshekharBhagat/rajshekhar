import { cn } from '@/lib/utils';
import React from 'react'

interface MaxWidthWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const MaxWidthWrapper = ({children,className}: MaxWidthWrapperProps) => {
  return (
    <div className={cn(className, 'px-4 py-2 md:px-20 h-full max-w-[90rem] w-full mx-auto')}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper
