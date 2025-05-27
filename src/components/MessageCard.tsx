"use client";
import { useDeleteMessage } from "@/hooks/useDeleteMessage";
import { Message } from "@/models/Message.model";
import { User } from "@/models/User.model";
import { motion } from "framer-motion";
import { Trash2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "./ui/button";

interface MessageCardProps {
  message: Message;
  sender: User;
}

const MessageCard = ({ message, sender }: MessageCardProps) => {
  const { mutate: deleteMessage, isPending } = useDeleteMessage();
  const {data:session} = useSession();
  const canDelete = sender._id.toString() === session?.user.id;
  const MessageCardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      x: 50,
    },
  };

  return (
    <motion.div
      layout
      style={{ transformOrigin: "center" }}
      variants={MessageCardVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative flex flex-col w-full h-full p-2 space-y-2 mt-4 rounded-md border border-zinc-800 bg-zinc-950 shadow-2xl shadow-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="relative size-10 overflow-hidden">
          <Image
            src={sender.image}
            alt="Profile Image"
            fill
            className="object-contain rounded-md"
          />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-sm tracking-tight text-white">{sender.name}</h1>
          <p className="text-xs tracking-tight text-zinc-400">{sender.email}</p>
        </div>
      </div>
      <div className="flex flex-col w-full space-y-2">
        <div className="p-2">
          <h1 className="text-sm text-left">{message.message}</h1>
        </div>
        {
          canDelete && (<div className="flex items-center justify-end">
          <Button
            disabled={isPending}
            onClick={() => deleteMessage(message._id.toString())}
            variant={"destructive"}
          >
            <Trash2Icon className="text-red-500" />
          </Button>
        </div>)
        }
        
      </div>
    </motion.div>
  );
};

export default MessageCard;
