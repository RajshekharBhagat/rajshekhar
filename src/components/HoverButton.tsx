import { cn } from "@/lib/utils";
import {
    ArrowRightIcon,
    ArrowRightLeftIcon,
    ArrowUpRightIcon,
  } from "lucide-react";
  import React from "react";
  
  interface HoverButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
  }
  
  const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
    ({ children, className, ...props }, ref) => {
      return (
        <button ref={ref} className={cn("relative group py-1 ring ring-zinc-700 bg-zinc-50 px-3 text-black rounded-md overflow-clip cursor-none",className)} {...props}>
          <div className="absolute inset-0 flex flex-col group-hover:-translate-y-[100%] transition-transform duration-200 ease-in-out">
            <div className="w-full h-full flex-shrink-0 rounded-md flex items-center justify-center">
              <div className="flex items-center gap-2 opacity-100 group-hover:opacity-0 duration-300 transition-all">
                {children}
                <ArrowUpRightIcon className="group-hover:translate-x-[100%] size-6 transition-transform duration-200" />
              </div>
            </div>
            <div className="w-full h-full flex-shrink-0 rounded-md flex items-center justify-center">
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {children}
                <ArrowUpRightIcon className="-translate-x-[100%] size-6 group-hover:translate-x-0 transition-transform duration-200" />
              </div>
            </div>
          </div>
          <div className="invisible flex items-center gap-2">
            {children}
            <ArrowRightIcon />
          </div>
        </button>
      );
    }
  );
  
  HoverButton.displayName = "HoverButton";
  
  export default HoverButton;
  