import React from 'react'
import { Button } from './ui/button'
import { DownloadIcon } from 'lucide-react'

const ResumeDownloadButton = () => {
  return (
    <a download={true} href="/Resume/RajshekharBhagat_Resume.pdf">
        <Button className="flex px-2 py-2 relative z-20 items-center gap-2 group">
          <DownloadIcon className="text-zinc-400 group-hover:text-white transition-colors size-4" />
          <h1 className="text-zinc-400 group-hover:text-white transition-colors text-lg ">
            Resume
          </h1>
        </Button>
        </a>
  )
}

export default ResumeDownloadButton