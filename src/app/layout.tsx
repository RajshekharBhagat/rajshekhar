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

const oxanium = Oxanium({
  subsets: ["latin-ext"],
});

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
            "relative bg-zinc-950 text-white overflow-x-hidden min-h-screen h-full"
          )}
        >
          {/* <PreLoader /> */}
          <AuthProvider>
            <SmoothCursor />
            <NavBar />
            <main className="relative flex flex-col overflow-hidden min-h-[calc(100vh-3.5rem)]">
              <Transition>
                {children}
                <Footer />
              </Transition>
              <Toaster />
            </main>
          </AuthProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
