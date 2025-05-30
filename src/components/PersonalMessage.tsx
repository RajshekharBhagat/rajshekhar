"use client";
import { useDeletePersonalMessage } from "@/hooks/useDeletePersonalMessage";
import { useGetPersonalMessage } from "@/hooks/useGetPersonalMessage";
import { PersonalMessageType } from "@/models/PersonalMessage.model";
import { User } from "@/models/User.model";
import { useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import {
  Loader2Icon,
  MailWarningIcon,
  User2Icon,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "./ui/button";

const PersonalMessage = () => {
  const { data, isLoading } = useGetPersonalMessage();
  const messages = data?.data;
  const queryClient = useQueryClient();
  const {mutate:deleteMessage,isPending} = useDeletePersonalMessage({
    onSuccess: (data) => {
      toast(data.message)
      queryClient.invalidateQueries({queryKey: ['get-personal-messages']})
    },
    onError: (error) => {
      toast('Failed to delete message',{
        description: error.message
      })
    }
  })
  if (isLoading) {
    return (
      <div className="max-w-xl mx-auto w-full h-[40rem] grid place-content-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2Icon className="size-18 md:size-20 lg:size-24 text-zinc-300 animate-spin duration-1000" />
          <h1 className="text-sm md:text-lg">Loading Messages</h1>
        </div>
      </div>
    );
  }
  if (!messages || messages.length === 0) {
    return (
      <div className="max-w-xl mx-auto w-full h-[40rem] grid place-content-center">
        <div className="flex flex-col items-center gap-3">
          <MailWarningIcon className="size-18 md:size-20 lg:size-24 text-zinc-300 animate-pulse duration-1000" />
          <h1 className="text-sm md:text-lg">No messages found</h1>
        </div>
      </div>
    );
  }
  return (
    <section className="relative max-w-2xl mx-auto w-full h-full my-10 space-y-4">
      <AnimatePresence>
      {messages.map((message, idx) => {
        const user = message.user as User;
        return (
          <Card deleteMessage={deleteMessage} key={message._id.toString()} message={message} user={user} />
        );
      })}
      </AnimatePresence>
    </section>
  );
};

const Card = ({
  message,
  user,
  deleteMessage,
}: {
  message: PersonalMessageType;
  user: User;
  deleteMessage: (payload:{_id:string}) => void;
}) => {

  const MessageCardVariants = {
    hidden: {
      opacity:0,
      y:50,
    },
    visible: {
      opacity:1,
      y:0,
    },
    exit: {
      opacity:0,
      x: 30
    }
  }

  return (
    <motion.div
      variants={MessageCardVariants}
      layout
      layoutId={`personal-message-card-${message._id.toString()}`}
      initial="hidden" whileInView="visible" exit="exit" transition={{duration:0.3, ease:'easeInOut'}}
      key={message._id.toString()}
      className="flex flex-col items-start p-2 w-full h-full border border-zinc-700 rounded-lg bg-zinc-900"
    >
      <div className="flex items-center w-full justify-start gap-2">
        <div className="relative size-12 rounded-full overflow-clip">
          {user ? (
            <Image
              src={user.image}
              alt="profile image"
              fill
              className="object-cover bg-center"
            />
          ) : (
            <User2Icon className="size-12 bg-zinc-800 text-zinc-500" />
          )}
        </div>
        <div className="flex w-full flex-col items-start">
          <h1 className="">{user ? user.name : message.name}</h1>
          <p className="text-xs text-zinc-400">{user ? user.email : message.email}</p>
        </div>
      </div>
      <div className="w-full py-2 text-wrap whitespace-pre-wrap">{message.message}</div>
      <div className="flex items-center gap-2 w-full justify-end">
          <Button className="text-green-500 bg-zinc-800 hover:bg-green-500/20">Reply</Button>
          <Button onClick={() => deleteMessage({_id: message._id.toString()})} className="text-red-500 bg-zinc-800 hover:bg-red-500/20">Delete</Button>
      </div>
    </motion.div>
  );
};

export default PersonalMessage;
