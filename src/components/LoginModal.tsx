import { DialogTitle } from '@radix-ui/react-dialog';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader } from './ui/dialog';

interface LoginModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const LoginModal = ({children,isOpen,setIsOpen}: LoginModalProps) => {
    const [isGoogleLoading,setIsGoogleLoading] = useState<boolean>(false);
    const [isGitHubLoading,setIsGitHubLoading] = useState<boolean>(false);
    const handleGoogleLogin = async () => {
        setIsGoogleLoading(true);
        await signIn("google");
        setIsGoogleLoading(false);
      };
    const handleGitHubLogin = async () => {
        setIsGitHubLoading(true);
        await signIn("github");
        setIsGitHubLoading(false);
      };

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen} >
        <div>{children}</div>
        <DialogContent className='max-w-lg bg-zinc-950 border-zinc-900 z-[9999]'>
            <DialogHeader className='flex items-center'>
                <div className='relative aspect-square w-[20%] ring ring-zinc-900 rounded-md overflow-clip'>
                    <Image src={'/logos/RB2.png'} alt='Main Logo' fill className='object-cover bg-center' />
                </div>
                <DialogTitle className='sr-only'>Login Modal</DialogTitle>
            </DialogHeader>
            <div className='flex flex-col gap-4'>
                <Button disabled={isGitHubLoading} onClick={handleGitHubLogin}>
                    <FaGithub className='size-6' />
                    GitHub
                </Button>
                <Button disabled = {isGoogleLoading} onClick={handleGoogleLogin} >
                    <FaGoogle className='size-6' />
                    Google
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default LoginModal