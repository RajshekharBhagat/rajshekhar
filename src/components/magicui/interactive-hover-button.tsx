import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-zinc-600 hover:border-zinc-300 bg-zinc-950 p-2 px-6 text-center font-semibold hover:shadow-2xl hover:shadow-white/50",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2  bg-white -ml-4 scale-0 transition-all duration-300 group-hover:scale-[50]"></div>
        <span className="flex items-center transition-all text-white duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
          <ArrowRight className="ml-2" />
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
