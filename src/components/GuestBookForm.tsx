"use client";
import { MessageSchema } from "@/schema/Message.Schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import { LogOutIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import LoginModal from "./LoginModal";
import { ShimmerButton } from "./magicui/shimmer-button";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";


const GuestBookForm = () => {
  const { data: session } = useSession();
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  
  const handleSignOutClick = async () => {
    await signOut();
  };
  type formData = z.infer<typeof MessageSchema>;
  const form = useForm({
    resolver: zodResolver(MessageSchema),
    defaultValues: {
      message: '',
      sender: '',
    }
  })

  const {mutate: sendMessage,isPending} = useMutation({
    mutationFn: async(payload:formData) => {
      if(!payload) return;
      const {data: response} = await axios.post('/api/guestbook',payload);
      return response;
    },
    onSuccess: (response) => {
      toast(response.message,{
        description: ''
      })
      queryClient.invalidateQueries({queryKey:['fetchMessages']});
      form.setValue('message','');
    },
    onError: (error) => {
      toast(error.message)
    }
  })
  const onSubmit = (data:formData) => {
    sendMessage(data);
  }
  useEffect(() => {
    if(session?.user.id) {
      form.setValue('sender',session.user.id);
    }
  },[session,form])
  if (!session) { 
    return (
      <div className="flex flex-col w-full items-center mt-4 gap-2 ">
        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}>
          <ShimmerButton className=" py-2" onClick={() => setIsOpen(true)}>Login</ShimmerButton>
        </LoginModal>
        <p>Please Login to send me message.</p>
      </div>

    );
  }
  return (
    <div className="flex flex-col w-full items-center p-2 rounded-xl backdrop-blur-xs border-2 border-zinc-800 bg-zinc-900 mt-5 gap-3">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-2">
        <div className="relative size-10 overflow-hidden">
          <Image
            src={session.user.image}
            alt="Profile Image"
            fill
            className="object-contain rounded-md"
          />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-sm tracking-tight text-white">
            {session.user.name}
          </h1>
          <p className="text-xs tracking-tight text-zinc-400">
            {session.user.email}
          </p>
        </div>
        </div>
        <Button
          onClick={handleSignOutClick}
          variant={"ghost"}
          className="cursor-none rounded-md"
        >
          <LogOutIcon />
        </Button>
      </div>
      <div className="w-full h-full rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="h-full w-full flex flex-col space-y-5">
            <FormField
              name="message"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormControl>
                  <Textarea className="border-zinc-950 active:ring-1 bg-zinc-800  rounded-md p-2" {...field} placeholder="send me a message" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-end">
              <Button disabled={isPending} type="submit">Send</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default GuestBookForm;
