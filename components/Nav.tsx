"use client";

import Image from "next/image";
import { ModeToggle } from "./ui/toggleMode";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Nav() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
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
          <div>
            <div>
              <Button
                className=" rounded-md hover:bg-gray-100 hover:text-gray-400 "
                variant="ghost"
                size="icon"
              >
                <Menu strokeWidth={1} size={24} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
