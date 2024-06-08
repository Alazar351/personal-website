"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { PopupButton } from "react-calendly";

export default function Calendly() {
  return (
    <Button asChild>
      <PopupButton
        url="https://calendly.com/alazar-lema351/quick-call"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.body}
        text="Schedule Call"
        className="w-full transition-colors duration-700 ease-out dark:bg-[#282828] dark:text-white dark:hover:bg-[#424242] md:max-w-36"
      />
    </Button>
  );
}
