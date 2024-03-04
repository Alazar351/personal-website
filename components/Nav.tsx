"use client";

import Image from "next/image";
import { ModeToggle } from "./ui/toggleMode";
import { Button } from "./ui/button";
import { Menu, Home, Briefcase, Mail, User, Linkedin, X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useState } from "react";

export default function Nav() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="flex gap-4">
        <Image
          className="rounded"
          src="/pic.jpg"
          width={48}
          height={48}
          alt="Profile Picture"
        />
        <div>
          <p className="font-medium">Alazar Lema</p>
          <p className="mt-1 text-sm text-muted-foreground">Web Developer</p>
        </div>
      </div>
      <div className="flex gap-8">
        <ModeToggle />

        {isDesktop ? (
          <div>Desktop</div>
        ) : (
          <div className="flex h-10 w-10 items-center  justify-center rounded-md px-3 hover:bg-gray-100 hover:text-gray-400">
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger className="p-2">
                {open ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
              </DrawerTrigger>
              <DrawerContent className="px-6 text-muted-foreground  ">
                <ul className="py-4">
                  <li className="my-1 flex gap-3 rounded-xl px-3 py-2 font-medium transition-colors duration-300 ease-out hover:bg-gray-200">
                    <Home />
                    Homepage
                  </li>
                  <li className="my-1 flex gap-3 rounded-xl px-3 py-2 font-medium transition-colors duration-300 ease-out hover:bg-gray-200">
                    <Briefcase />
                    Projects
                  </li>
                  <li className="my-1 flex gap-3 rounded-xl px-3 py-2 font-medium transition-colors duration-300 ease-out hover:bg-gray-200">
                    <User />
                    About
                  </li>
                  <li className="my-1 flex gap-3 rounded-xl px-3 py-2 font-medium transition-colors duration-300  ease-out hover:bg-gray-200">
                    <Mail />
                    Contact
                  </li>
                </ul>
                <div className="my-4 h-1 rounded  bg-gray-200" />
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
  );
}
