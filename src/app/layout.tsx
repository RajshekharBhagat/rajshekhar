import NavBar from "@/components/NavBar";
import Transition from "@/components/Transition";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Footer from "@/components/ui/Footer";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
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
      <body className={cn(robotoSans.className,'bg-black text-white relative min-h-screen h-full')}>
          <FlickeringGrid className="absolute inset-0 size-full z-0"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.4}
            flickerChance={0.1}
            
          />
        <NavBar />
        <main className="relative z-10 flex flex-col min-h-[calc(100vh-3.5rem)]">
          <Transition className="flex-1 flex flex-col h-full">
            {children}
          </Transition>
            <Footer />
        </main>
      </body>
    </html>
  );
}
