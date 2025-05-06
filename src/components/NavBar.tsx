"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import React, {
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

const NavBar = () => {
  return (
    <nav className="sticky mx-auto max-w-[1500px] px-3 items-center h-14 z-[99] top-0 backdrop-blur-sm flex justify-between">
      <h1 className="text-xl md:text-2xl lg:text-3xl">RB</h1>
      <SlideTab />
    </nav>
  );
};
export default NavBar;

const SlideTab = () => {
  const [position, setPosition] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [activeTab, setActiveTab] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLUListElement | null>(null);
  const pathname = usePathname();

  const getTabFromPath = (path: string) => {
    switch (path) {
      case "/":
        return "Home";
      case "/projects":
        return "Projects";
      case "/about":
        return "About";
      case "/blog":
        return "Blog";
      case "/links":
        return "More";
      case "/contact":
        return "Book a Call";
      default:
        return "Home";
    }
  };

  useEffect(() => {
    const activeTabName = getTabFromPath(pathname);
    const tabElement = containerRef.current?.querySelector(
      `[data-tab-name="${activeTabName}"]`
    ) as HTMLElement | null;

    if (tabElement) {
      setActiveTab(tabElement);
      setPosition({
        width: tabElement.offsetWidth,
        left: tabElement.offsetLeft,
        opacity: 1,
      });
    }
  }, [pathname]);

  return (
    <ul
      ref={containerRef}
      className="relative hidden md:flex w-fit overflow-clip justify-around rounded-full mx-auto border-2 border-zinc-400 p-1"
    >
      {["Home", "Projects", "About", "Blog", "More", "Book a Call"].map(
        (tab, index) => (
          <Tab
            key={index}
            tabName={tab}
            setPosition={setPosition}
            setActiveTab={setActiveTab}
            isActive={activeTab?.textContent === tab}
          >
            {tab}
          </Tab>
        )
      )}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  className,
  setPosition,
  setActiveTab,
  isActive,
  tabName,
}: {
  children: ReactNode;
  className?: string;
  setPosition: React.Dispatch<
    SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  setActiveTab: (el: HTMLLIElement | null) => void;
  isActive: boolean;
  tabName: string;
}) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const router = useRouter();

  const handleMouseEnter = () => {
    if (!ref.current) return;
    const parentLeft =
      ref.current.offsetParent?.getBoundingClientRect().left ?? 0;
    setPosition({
      width: ref.current.offsetWidth,
      left: ref.current.getBoundingClientRect().left - parentLeft,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    const el = document.querySelector(
      "[data-active-tab='true']"
    ) as HTMLElement | null;
    if (el) {
      const parentLeft = el.offsetParent?.getBoundingClientRect().left ?? 0;
      setPosition({
        width: el.offsetWidth,
        left: el.getBoundingClientRect().left - parentLeft,
        opacity: 1,
      });
    }
  };

  const handleClick = () => {
    if (ref.current) {
      setActiveTab(ref.current);
    }
    const route = getRouteFromTab(tabName);
    router.push(route);
  };

  return (
    <li
      ref={ref}
      data-tab-name={tabName}
      data-active-tab={isActive ? "true" : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={cn(
        "relative uppercase z-10 px-3 py-1.5 text-sm text-white mix-blend-difference",
        className
      )}
    >
      {children}
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring" }}
      className="absolute h-8 rounded-full bg-white"
    ></motion.li>
  );
};

const getRouteFromTab = (tabName: string) => {
  switch (tabName) {
    case "Home":
      return "/";
    case "Projects":
      return "/projects";
    case "About":
      return "/about";
    case "Blog":
      return "/blog";
    case "More":
      return "/links";
    case "Book a Call":
      return "/contact";
    default:
      return "/";
  }
};
