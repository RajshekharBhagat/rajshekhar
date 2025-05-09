'use client';
import { motion } from "framer-motion";
import { Calendar1Icon } from "lucide-react";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import SocialIcons from "./SocialIcons";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle
} from "./ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const ContactDrawer = ({ children,open,setOpen }: { children: React.ReactNode,open:boolean,setOpen:Dispatch<SetStateAction<boolean>>}) => {
  
  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <div className="cursor-none">{children}</div>
      <DrawerContent className="bg-zinc-950 max-w-2xl mx-auto w-full">
        <div className="flex flex-col items-center">
          <DrawerHeader className="flex flex-col items-center">
            <DrawerTitle>
              <SocialIcons />
            </DrawerTitle>
          </DrawerHeader>
          <Tabs defaultValue="connect" className="w-full p-3">
            <TabsList className="grid w-full grid-cols-2 bg-zinc-900">
              <TabsTrigger value="connect">Quick Connect</TabsTrigger>
              <TabsTrigger value="message">Message</TabsTrigger>
            </TabsList>
            <TabsContent value="connect">
              <div className="grid md:grid-cols-2 gap-3">
              <Link
              href="mailto:rajbhagat27889@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!"
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-none"
            >
              <div className="flex flex-col bg-zinc-900 rounded-xl ring ring-zinc-700 hover:ring-green-900 transition-colors">
                  <div className="p-3 rounded-t-xl flex items-center gap-3 bg-gradient-to-r from-green-950 to-green-950/20">
                    <Calendar1Icon className="text-green-600" />
                    <span>Email</span>
                  </div>
                  <div className="p-3 flex flex-col gap-1">
                    <h1>rajbhagat27889@gmail.com</h1>
                    <p className="text-sm text-zinc-400">
                      Send me a email directly
                    </p>
                  </div>
                </div>
            </Link>
                
                <div className="flex flex-col bg-zinc-900 rounded-xl ring ring-zinc-700 hover:ring-blue-900">
                  <div className="p-3 rounded-t-xl flex items-center gap-3 bg-gradient-to-r from-blue-950 to-blue-950/20">
                    <Calendar1Icon className="text-blue-600" />
                    <span>Schedule</span>
                  </div>
                  <div className="p-3 flex flex-col gap-1">
                    <h1>Book a time slot</h1>
                    <p className="text-sm text-zinc-400">
                      Book a call on my calender
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-5 rounded-xl overflow-clip">
                <div className="bg-green-800/20 w-full h-full py-2 flex items-center gap-6 justify-center">
                  <div className="size-[6px] relative rounded-full bg-green-500">
                    <motion.div
                      animate={{ scale: [1,1.5,2,2.5,3], opacity: [1,0.75,0.5,0.25,0] }}
                      transition={{ repeat: Infinity, duration:1, ease:'easeInOut' }}
                      className="absolute size-[6px] inset-0 rounded-full bg-green-500/50"
                    />
                  </div>
                  <h1 className="text-sm text-green-500">Currently available for new opportunity</h1>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="message"></TabsContent>
          </Tabs>
          <DrawerFooter>
            <div></div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ContactDrawer;
