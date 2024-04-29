"use client";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyEmail() {
  const [emailString, setEmailString] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("alazar.lema351@gmail.com");
    setEmailString(true);

    setTimeout(() => {
      setEmailString(false);
    }, 2000);
  };

  return (
    <Button
      variant={"outline"}
      onClick={copyEmail}
      className={`w-full rounded-lg transition-colors duration-700 ease-out dark:bg-[#1A1A1A] dark:hover:border-[#646464] md:max-w-36 ${emailString ? "bg-green-100 hover:bg-green-100 dark:bg-green-950 dark:hover:bg-green-950" : ""}`}
    >
      <div
        className={`transition-all duration-300 ease-in-out ${emailString ? "translate-x-3" : ""}`}
      >
        {emailString ? (
          <div className="flex">
            <Check className="mr-2 dark:text-[#484848]" /> Copied
          </div>
        ) : (
          <div className="flex">
            <Copy className="mr-2 dark:text-[#484848]" /> Copy Email
          </div>
        )}
      </div>
    </Button>
  );
}
