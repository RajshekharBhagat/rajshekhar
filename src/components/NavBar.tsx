"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import React, {
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import SearchBox from "./SearchBox";
import ContactDrawer from "./ContactDrawer";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const navRef = useRef(null);
  const { data: session } = useSession();
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const [isAdmin,setIsAdmin] = useState<boolean>(false); 

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (!previous) return;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if(session) {
      if(session.user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
        setIsAdmin(true);
      }
    }
  },[session])

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      transition={{ duration: 0.5, type: "spring" }}
      ref={navRef}
      className="fixed z-50 top-0 w-full h-14 backdrop-blur-[1px] bg-gradient-to-b from-black/80 to-transparent"
    >
      <div className="max-w-[1500px] w-full mx-auto h-full px-3 lg:px-10 flex items-center justify-between">
        <Link
          href={"/"}
          className="relative w-8 aspect-square cursor-none"
        >
          <Image
            src={"/logos/RB1.png"}
            alt="Logo Image"
            quality={100}
            fill
            className="object-cover bg-center"
          />
        </Link>
        <SlideTab />
        <div className="flex items-center">
          {
            isAdmin && (
              <Link
              className="mr-2 hover:underline hover:underline-offset-2 transition-all duration-300"
              href={"/dashboard"}
            >
              Dashboard
            </Link>
            )
          }
          <SearchBox />
        </div>
      </div>
    </motion.nav>
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
  const [open, setOpen] = useState(false);

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
        return "More";
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
  }, [pathname, activeTab]);

  return (
    <ul
      ref={containerRef}
      className="relative hidden md:flex w-fit overflow-clip justify-around bg-gradient-to-b from-white/10 via-white/5 to-white/10 border-b-2 border-t-1 border-white/20 shadow-md shadow-black/30 rounded-full mx-auto p-1 transition-all duration-300"
    >
      {["Home", "Projects", "About", "Blog", "More"].map((tab, index) => (
        <Tab
          key={index}
          tabName={tab}
          setPosition={setPosition}
          setActiveTab={setActiveTab}
          isActive={activeTab?.textContent === tab}
        >
          {tab}
        </Tab>
      ))}
      <ContactDrawer open={open} setOpen={setOpen}>
        <Tab
          isActive={activeTab?.textContent === "Book a Call"}
          setActiveTab={setActiveTab}
          setPosition={setPosition}
          tabName="Book a Call"
          onClickCustom={() => setOpen(true)}
        >
          Book a Call
        </Tab>
      </ContactDrawer>

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
  onClickCustom,
}: {
  children: ReactNode;
  className?: string;
  setPosition: React.Dispatch<
    SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  setActiveTab: (el: HTMLLIElement | null) => void;
  isActive: boolean;
  tabName: string;
  onClickCustom?: () => void;
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
    if (onClickCustom) {
      onClickCustom();
      return;
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
        "relative z-10 px-3 py-1 text-white cursor-none bg-blend-difference inline-block text-shadow-2xs text-shadow-black",
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
      className="absolute h-8 rounded-full bg-gradient-to-b from-white/5 via-white/0 to-white/5 shadow shadow-black border-t-1 border-t-white/10 border-b-2 border-b-white/20 bg-black/15"
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
