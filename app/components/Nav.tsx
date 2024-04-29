"use client";
import Image from "next/image";
import { ModeToggle } from "../../components/ui/toggleMode";
import {
  Menu,
  Home,
  Briefcase,
  Mail,
  User,
  Linkedin,
  X,
  Pencil,
} from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import Picture from "@/public/assets/picture.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Nav() {
  const isDesktop = useMediaQuery("(min-width: 876px)");
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky left-0 top-0 z-50 bg-[#F5F5F5]  dark:bg-[rgb(10,10,10)] md:fixed md:h-full md:w-20 2xl:w-[280px] ">
      <nav className="flex items-center justify-between px-6 py-4 md:h-full md:flex-col md:px-4 md:py-10 ">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-center gap-4 2xl:flex-col">
            <Image
              className="w-12 rounded-lg 2xl:w-14"
              src={Picture}
              width={48}
              height={48}
              alt="Profile Picture"
            />
            <div className="items-center justify-center gap-1 md:hidden 2xl:flex 2xl:flex-col">
              <p className="font-medium">Alazar Lema</p>
              <p className="mt-1 text-sm text-muted-foreground 2xl:m-0">
                Nextjs Developer
              </p>
            </div>
          </div>
          <div className="hidden items-center justify-center gap-3 2xl:flex">
            <div className="group flex items-center justify-center rounded-full p-1 transition-colors  duration-700 ease-out hover:bg-gray-200 dark:hover:bg-gray-900 ">
              <Linkedin className="text-gray-400 group-hover:text-black dark:group-hover:text-gray-200" />
            </div>
          </div>
          <TooltipProvider delayDuration={0}>
            <ul className="hidden flex-col gap-1 dark:text-gray-400 md:flex 2xl:w-[232px]">
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"/"}>
                    <li className="group flex h-[48px] min-w-[48px] items-center justify-start gap-3 rounded-xl px-3 py-2 transition-colors duration-700 ease-out hover:bg-gray-200 dark:hover:bg-gray-900 2xl:h-[40px] ">
                      <Home className="dark:group-hover:text-white 2xl:dark:group-hover:text-gray-400" />
                      <div className="hidden font-medium dark:group-hover:text-white 2xl:block">
                        Homepage
                      </div>
                    </li>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-gray-400 text-xs text-white 2xl:hidden"
                  side="right"
                >
                  <p>Homepage</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"/Projects"}>
                    <li className="group flex h-[48px] min-w-[48px] items-center justify-start gap-3 rounded-xl px-3 py-2 transition-colors duration-700 ease-out hover:bg-gray-200 dark:hover:bg-gray-900 2xl:h-[40px] ">
                      <Briefcase className="dark:group-hover:text-white 2xl:dark:group-hover:text-gray-400" />
                      <div className="hidden font-medium dark:group-hover:text-white 2xl:block">
                        Projects
                      </div>
                    </li>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-gray-400 text-xs text-white 2xl:hidden"
                  side="right"
                >
                  <p>Projects</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"/About"}>
                    <li className="group flex h-[48px] min-w-[48px] items-center justify-start gap-3 rounded-xl px-3 py-2 transition-colors duration-700 ease-out hover:bg-gray-200 dark:hover:bg-gray-900 2xl:h-[40px]">
                      <User className="dark:group-hover:text-white 2xl:dark:group-hover:text-gray-400" />
                      <div className="hidden font-medium dark:group-hover:text-white 2xl:block">
                        About
                      </div>
                    </li>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-gray-400 text-xs text-white 2xl:hidden"
                  side="right"
                >
                  <p>About</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"/Blog"}>
                    <li className="group flex h-[48px] min-w-[48px] items-center justify-start gap-3 rounded-xl px-3 py-2 transition-colors duration-700 ease-out hover:bg-gray-200 dark:hover:bg-gray-900 2xl:h-[40px]">
                      <Pencil className="dark:group-hover:text-white 2xl:dark:group-hover:text-gray-400" />
                      <div className="hidden font-medium dark:group-hover:text-white 2xl:block">
                        Blog
                      </div>
                    </li>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-gray-400 text-xs text-white 2xl:hidden"
                  side="right"
                >
                  <p>Blog</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"/Contact"}>
                    <li className="group flex h-[48px] min-w-[48px] items-center justify-start gap-3 rounded-xl px-3 py-2 transition-colors duration-700 ease-out hover:bg-gray-200 dark:hover:bg-gray-900 2xl:h-[40px]">
                      <Mail className="dark:group-hover:text-white 2xl:dark:group-hover:text-gray-400" />
                      <div className="hidden font-medium dark:group-hover:text-white 2xl:block">
                        Contact
                      </div>
                    </li>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-gray-400 text-xs text-white 2xl:hidden"
                  side="right"
                >
                  <p>Contact</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          </TooltipProvider>
        </div>
        <div className="flex gap-8 md:flex-col">
          <div className="hidden flex-col gap-4 border-t-2 border-t-gray-300 pt-8 dark:border-t-gray-800 md:flex 2xl:hidden">
            <div className="group flex items-center justify-center rounded-full p-1 transition-colors  duration-700 ease-out hover:bg-gray-200 dark:hover:bg-gray-900 ">
              <Linkedin className="text-gray-400 group-hover:text-black dark:group-hover:text-gray-200" />
            </div>
          </div>
          <ModeToggle />
          {/* The mobile menu */}
          {isDesktop ? (
            ""
          ) : (
            <div className="flex h-10 w-10 items-center  justify-center rounded-md px-3 hover:bg-gray-200 dark:hover:text-gray-400 md:hidden">
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger className="p-2">
                  {open ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
                </DrawerTrigger>
                <DrawerContent className="px-6 text-muted-foreground">
                  <ul className="py-4">
                    <Link href={"/"}>
                      <li className="group my-1 flex gap-3 rounded-xl px-3 py-2  transition-colors duration-300 ease-out hover:bg-gray-200 dark:hover:bg-gray-900 ">
                        <Home />
                        <div className="font-medium dark:group-hover:text-white">
                          Homepage
                        </div>
                      </li>
                    </Link>
                    <Link href={"/Projects"}>
                      <li className="group my-1 flex gap-3 rounded-xl px-3 py-2  transition-colors duration-300 ease-out hover:bg-gray-200 dark:hover:bg-gray-900 ">
                        <Briefcase />
                        <div className="font-medium dark:group-hover:text-white">
                          Projects
                        </div>
                      </li>
                    </Link>
                    <Link href={"/About"}>
                      <li className="group my-1 flex gap-3 rounded-xl px-3 py-2  transition-colors duration-300 ease-out hover:bg-gray-200 dark:hover:bg-gray-900 ">
                        <User />
                        <div className="font-medium dark:group-hover:text-white">
                          About
                        </div>
                      </li>
                    </Link>
                    <Link href={"/Blog"}>
                      <li className="group my-1 flex gap-3 rounded-xl px-3 py-2  transition-colors duration-300 ease-out  hover:bg-gray-200 dark:hover:bg-gray-900 ">
                        <Pencil />
                        <div className="font-medium dark:group-hover:text-white">
                          Blog
                        </div>
                      </li>
                    </Link>
                    <Link href={"/Contact"}>
                      <li className="group my-1 flex gap-3 rounded-xl px-3 py-2  transition-colors duration-300 ease-out  hover:bg-gray-200 dark:hover:bg-gray-900 ">
                        <Mail />
                        <div className="font-medium dark:group-hover:text-white">
                          Contact
                        </div>
                      </li>
                    </Link>
                  </ul>
                  <div className="my-4 h-1 rounded bg-gray-100 dark:bg-gray-900" />
                  <div className="flex items-center justify-center py-6">
                    <div className="rounded-full p-1 transition-colors  duration-300 ease-out hover:bg-gray-200">
                      <Linkedin />
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
