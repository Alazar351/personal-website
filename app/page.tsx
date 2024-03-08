"use client";
import CopyEmail from "@/components/copyEmail";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="m-2 h-screen rounded-lg bg-white px-6 shadow-main-shadow dark:bg-[rgb(20,20,20)] ">
      <section className="pt-14">
        <li className="mb-10 w-max rounded-full bg-green-100 px-3 text-sm text-green-600 dark:bg-green-950 dark:text-green-500">
          Available for work
        </li>
        <div className="mb-10 text-3xl font-semibold leading-relaxed  ">
          <p>Hello! I'm Alazar 👋</p>
          <p className="text-gray-500">Full Stack Web Developer</p>
        </div>
        <li className="mb-10 flex gap-3 text-amber-700 dark:text-amber-500">
          <MapPin />
          Minnesota, USA
        </li>
        <p className="mb-10 text-lg text-gray-500 dark:text-gray-400">
          Web developer focused on creating a fluid and intuitive user
          experience by seamlessly integrating front-end and back-end
          technologies to enhance usability and engagement on websites and
          applications.
        </p>
        <div>
          <Button className="mb-4 w-full rounded-lg">About</Button>
          <CopyEmail />
        </div>
      </section>
    </main>
  );
}
