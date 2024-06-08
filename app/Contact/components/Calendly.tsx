"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

export default function Calendly() {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRoot(document.getElementById("root"));
  }, []);

  if (!root) return null;

  return (
    <Button asChild>
      <PopupButton
        url="https://calendly.com/alazar-lema351/quick-call"
        rootElement={root}
        text="Schedule Call"
        className="w-full transition-colors duration-700 ease-out dark:bg-[#282828] dark:text-white dark:hover:bg-[#424242] md:max-w-36"
      />
    </Button>
  );
}
