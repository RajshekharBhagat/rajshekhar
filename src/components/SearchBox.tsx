"use client";
import {
  ArrowDown,
  ArrowUp,
  ClipboardCheckIcon,
  CommandIcon,
  ContactIcon,
  CornerDownLeftIcon,
  Dot,
  FileHeartIcon,
  FileJson,
  FileTextIcon,
  FileUserIcon,
  HomeIcon,
  LinkIcon,
  LogInIcon,
  Minimize2Icon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Icons } from "./Icons";
import SocialIcons from "./SocialIcons";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { signOut, useSession } from "next-auth/react";
import LoginModal from "./LoginModal";

const SearchBox = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const { data: session } = useSession();
  const handleSignOut = async() => {
    setIsLoading(true);
    await signOut();
    setIsLoading(false);
    setOpen(false);
  }
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <>
      <Button
        variant={"ghost"}
        className="cursor-none hover:bg-white/40 hover:text-white"
        onClick={() => setOpen(true)}
      >
        <CommandIcon className="size-5" />
      </Button>
      <div className="cursor-none">
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="search.." />
          <CommandList className=" bg-black text-white">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <Link href={"/"} onClick={() => setOpen(false)}>
                <CommandItem className="flex items-center gap-4">
                  <HomeIcon className="size-full" />
                  <div className="flex flex-col">
                    <h1 className="text-sm">Home</h1>
                    <p className="text-xs text-zinc-400">
                      Welcome to my forever work-in-progress!
                    </p>
                  </div>
                </CommandItem>
              </Link>
              <Link href={"/projects"} onClick={() => setOpen(false)}>
                <CommandItem className="flex items-center gap-4">
                  <FileJson className="size-full" />
                  <div className="flex flex-col">
                    <h1 className="text-sm">Project</h1>
                    <p className="text-xs text-zinc-400">
                      Showcase of my projects
                    </p>
                  </div>
                </CommandItem>
              </Link>
              <Link href={"/about"} onClick={() => setOpen(false)}>
                <CommandItem className="flex items-center gap-4">
                  <UserIcon className="size-full" />
                  <div className="flex flex-col">
                    <h1 className="text-sm">About</h1>
                    <p className="text-xs text-zinc-400">
                      Learn more about me!
                    </p>
                  </div>
                </CommandItem>
              </Link>
              <Link href={"/blog"} onClick={() => setOpen(false)}>
                <CommandItem className="flex items-center gap-4">
                  <FileTextIcon className="size-full" />
                  <div className="flex flex-col">
                    <h1 className="text-sm">Blog</h1>
                    <p className="text-xs text-zinc-400">My thoughts</p>
                  </div>
                </CommandItem>
              </Link>
              <Link href={"/links"} onClick={() => setOpen(false)}>
                <CommandItem className="flex items-center gap-4">
                  <LinkIcon className="size-full" />
                  <div className="flex flex-col">
                    <h1 className="text-sm">Links</h1>
                    <p className="text-xs text-zinc-400">
                      All my links are here
                    </p>
                  </div>
                </CommandItem>
              </Link>
              <Link href={"/guestbook"} onClick={() => setOpen(false)}>
                <CommandItem className="flex items-center gap-4">
                  <FileHeartIcon className="size-full" />
                  <div className="flex flex-col">
                    <h1 className="text-sm">Guestbook</h1>
                    <p className="text-xs text-zinc-400">
                      Leave a message for me
                    </p>
                  </div>
                </CommandItem>
              </Link>
              <Link href={"/bucket-list"} onClick={() => setOpen(false)}>
                <CommandItem className="flex items-center gap-4">
                  <ClipboardCheckIcon className="size-full" />
                  <div className="flex flex-col">
                    <h1 className="text-sm">Bucket List</h1>
                    <p className="text-xs text-zinc-400">
                      Things to do at least once in my life
                    </p>
                  </div>
                </CommandItem>
              </Link>
              <Link href={"/contact"} onClick={() => setOpen(false)}>
                <CommandItem className="flex items-center gap-4">
                  <ContactIcon className="size-full" />
                  <div className="flex flex-col">
                    <h1 className="text-sm">Book a Call</h1>
                    <p className="text-xs text-zinc-400">Book a call with me</p>
                  </div>
                </CommandItem>
              </Link>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Account">
              {session?.user ? (
                <Link href={"/"} onClick={() => handleSignOut()}>
                  <CommandItem className="flex items-center gap-4">
                    <LogInIcon className="size-full" />
                    <div className="flex flex-col">
                      <h1 className="text-sm">Sign-out</h1>
                      <p className="text-xs text-zinc-400">
                        Welcome to my forever work-in-progress!
                      </p>
                    </div>
                  </CommandItem>
                </Link>
              ) : (
                <CommandItem>
                  <LogInIcon className="size-full" />
                    <div className="flex flex-col">
                      <h1 className="text-sm">Sign-out</h1>
                      <p className="text-xs text-zinc-400">
                        Welcome to my forever work-in-progress!
                      </p>
                    </div>
                </CommandItem>
              )}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Resources">
              <Link href={"/"} onClick={() => setOpen(false)}>
                <CommandItem className="flex items-center gap-4">
                  <FileUserIcon className="size-full" />
                  <div className="flex flex-col">
                    <h1 className="text-sm">Resume</h1>
                    <p className="text-xs text-zinc-400">View my resume</p>
                  </div>
                </CommandItem>
              </Link>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Social">
              <Link
                href={"https://github.com/RajshekharBhagat"}
                onClick={() => setOpen(false)}
              >
                <CommandItem className="flex items-center gap-4">
                  <Icons.Github />
                  <div className="flex flex-col">
                    <h1 className="text-sm">GitHub</h1>
                    <p className="text-xs text-zinc-400">
                      View my GitHub profile
                    </p>
                  </div>
                </CommandItem>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/rajshekhar-bhagat-291425242"}
                onClick={() => setOpen(false)}
              >
                <CommandItem className="flex items-center gap-4">
                  <Icons.LinkedIn />
                  <div className="flex flex-col">
                    <h1 className="text-sm">LinkedIn</h1>
                    <p className="text-xs text-zinc-400">
                      View my LinkedIn profile
                    </p>
                  </div>
                </CommandItem>
              </Link>
              <Link
                href={"https://www.instagram.com/_._r__a__j__"}
                onClick={() => setOpen(false)}
              >
                <CommandItem className="flex items-center gap-4">
                  <Icons.Instagram />
                  <div className="flex flex-col">
                    <h1 className="text-sm">Instagram</h1>
                    <p className="text-xs text-zinc-400">
                      View my Instagram profile
                    </p>
                  </div>
                </CommandItem>
              </Link>
              <Link
                href={"https://x.com/RajBhag44561162"}
                onClick={() => setOpen(false)}
              >
                <CommandItem className="flex items-center gap-4">
                  <Icons.TwitterX />
                  <div className="flex flex-col">
                    <h1 className="text-sm">X</h1>
                    <p className="text-xs text-zinc-400">View my X profile</p>
                  </div>
                </CommandItem>
              </Link>
            </CommandGroup>
          </CommandList>
          <div className="flex px-3 py-2 h-10 w-full items-end justify-between border-t border-white">
            <SocialIcons />
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <ArrowUp className=" p-1 bg-zinc-800 rounded-sm" />
                <ArrowDown className=" p-1 bg-zinc-800 rounded-sm" />
                <span className="text-xs text-zinc-600">navigate</span>
              </div>
              <Dot className="text-zinc-600 md:block hidden" />
              <div className="md:flex hidden items-center gap-1">
                <CornerDownLeftIcon className=" p-1 bg-zinc-800 rounded-sm" />
                <span className="text-xs text-zinc-600">Select</span>
              </div>
              <Dot className="text-zinc-600 md:block hidden" />
              <div className="md:flex hidden items-center gap-1">
                <Minimize2Icon className=" p-1 bg-zinc-800 rounded-sm" />
                <span className="text-xs text-zinc-600">esc</span>
              </div>
            </div>
          </div>
        </CommandDialog>
      </div>
    </>
  );
};

export default SearchBox;
