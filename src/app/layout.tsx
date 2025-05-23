import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Transition from "@/components/Transition";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import AuthProvider from "@/context/AuthProvider";
import { ReactLenis } from "@/lib/ReactLenis";
import { cn } from "@/lib/utils";
import { Oxanium } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Metadata } from "next";

const oxanium = Oxanium({
  subsets: ["latin-ext"],
});

export const metadata:Metadata = {
  title: 'Rajshekhar Bhagat Portfolio',
  icons: '/RBLogo2.png',
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
            oxanium.className,
            "relative bg-zinc-950 text-white min-h-screen h-full"
          )}
        >
          {/* <PreLoader /> */}
          <AuthProvider>
            <SmoothCursor />
            <NavBar />
            <main className="relative flex flex-col min-h-[calc(100vh-3.5rem)]">
              <Transition>
                {children}
              </Transition>
              <Footer />
              <Toaster />
            </main>
          </AuthProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
