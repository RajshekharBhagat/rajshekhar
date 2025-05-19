"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { LogOutIcon } from "lucide-react";

const GuestBookForm = () => {
  const { data: session } = useSession();
  const handleSigninClick = async () => {
    await signIn("google");
  };
  const handleSignOutClick = async() => {
    await signOut();
  };
  if (!session) {
    return (
      <div className="flex w-full items-center mt-4 gap-2">
        <Button onClick={() => handleSigninClick()} className=" relative">
          Login
        </Button>
        <p>Please Login to send me message.</p>
      </div>
    );
  }
  return (
    <div className="flex w-fit items-center p-1 rounded-full backdrop-blur-xs border-2 border-white/10 mt-5 gap-3">
        <div className="flex items-center gap-2">

        <div className="relative size-10 overflow-hidden">
          <Image
            src={session.user.image}
            alt="Profile Image"
            fill
            className="object-contain rounded-full"
            />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-sm tracking-tight text-white">{session.user.name}</h1>
          <p className="text-xs tracking-tight text-zinc-400">{session.user.email}</p>
        </div>
        <Button onClick={handleSignOutClick} variant={'ghost'} className="cursor-none rounded-full"><LogOutIcon /></Button>
        </div>
    </div>
  );
};

export default GuestBookForm;
