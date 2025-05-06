import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Transition from "@/components/Transition";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";


const oxanium = Oxanium({
  subsets:['latin-ext']
})

export const metadata: Metadata = {
  title: "Rajshekhar Bhagat",
  description: "Personal Portfolio Website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          oxanium.className,
          "bg-zinc-950 scroll-smooth text-white overflow-x-hidden relative min-h-screen h-full"
        )}
      >
        <SmoothCursor />
        <NavBar />
        <main className="relative z-[60] flex flex-col overflow-hidden min-h-[calc(100vh-3.5rem)]">
          <Transition className="flex-1 flex flex-col h-full">
            {children}
          </Transition>
        </main>
          <Footer />
      </body>
    </html>
  );
}
