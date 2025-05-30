"use client";
import { useFetchMessage } from "@/hooks/useFetchMessage";
import { Loader2Icon, MailWarningIcon } from "lucide-react";
import React from "react";
import MessageCard from "./MessageCard";
import { User } from "@/models/User.model";
import { AnimatePresence } from "framer-motion";

const GuestBookMessages = () => {
  const { data: messages, isLoading } = useFetchMessage();
  if (isLoading) {
    return (
      <div className="aspect-square w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-2">
          <Loader2Icon className="size-24 text-zinc-300 animate-spin duration-1000" />
        </div>
      </div>
    );
  }
  if (!messages || messages.length === 0) {
    return (
      <div className="aspect-square w-full grid place-content-center">
        <div className="flex flex-col items-center space-y-2">
          <MailWarningIcon className="size-24 text-zinc-300 animate-bounce" />
          <h1>No messages</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-full w-full">
      <div className="flex flex-col space-y-3">
        <AnimatePresence>
        {messages.map((message) => {
          const sender = message.sender as User;
          return (
              <MessageCard
                key={message._id.toString()}
                message={message}
                sender={sender}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GuestBookMessages;
