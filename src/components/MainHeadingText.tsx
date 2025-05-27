import { cn } from '@/lib/utils'
import { Bruno_Ace_SC } from 'next/font/google'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MainHeadingTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
}

const BrunoAceSC = Bruno_Ace_SC({weight:'400',subsets:['latin-ext']})
const MainHeadingText = ({children,className,...props}: MainHeadingTextProps) => {
  return (
    <h1 className={cn(className,BrunoAceSC.className)} {...props}>
        {children}
    </h1>
  )
}

export default MainHeadingText