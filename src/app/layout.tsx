import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Transition from "@/components/Transition";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import AuthProvider from "@/context/AuthProvider";
import { ReactLenis } from "@/lib/ReactLenis";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Anta } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const anta = Anta({weight:"400",subsets:['latin']})

export const metadata:Metadata = {
  title:{
    default: "Rajshekhar Bhagat",
    template: "%s | Rajshekhar Bhagat"
  },
  icons: '/logos/RB1.png',
  authors:{
    name: 'Rajshekhar Bhagat',
    url: 'http://rajshekhardev.vercel.app'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={cn(
            anta.className,
            "relative bg-zinc-950 text-white min-h-screen h-full"
          )}
        >
          {/* <PreLoader /> */}
          <AuthProvider>
            <SmoothCursor />
            <NavBar />
            <main className="relative flex flex-col min-h-[calc(100vh-3.5rem)]">
                <div className="flex-1 flex flex-col h-full">
              <Transition>
                {children}
              </Transition>
                </div>
              <Footer />
              <Toaster />
            </main>
          </AuthProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
