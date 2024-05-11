import CopyEmail from "@/app/components/CopyEmail";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section>
      <li className="mb-10 w-max rounded-full bg-green-100 px-3 text-sm text-green-600 dark:bg-green-950 dark:text-green-500">
        Available for work
      </li>
      <div className="mb-10 text-3xl font-semibold leading-relaxed  ">
        <p>Hello! I'm Alazar 👋</p>
        <p className="text-gray-500">Full Stack Nextjs Developer</p>
      </div>
      <li className="mb-10 flex gap-3 text-amber-700 dark:text-amber-500">
        <MapPin />
        Minnesota, USA
      </li>
      <p className="mb-10 text-lg text-gray-500 dark:text-gray-400">
        Nextjs developer focused on creating a fluid and intuitive user
        experience by seamlessly integrating front-end and back-end technologies
        to enhance usability and engagement on websites and applications.
      </p>
      <div className="flex flex-col md:flex-row md:gap-5">
        <Link href="/About">
          <Button className="mb-4 w-full rounded-lg transition-colors duration-700 ease-out dark:bg-[#282828] dark:text-white dark:hover:bg-[#424242] md:max-w-20">
            About
          </Button>
        </Link>
        <CopyEmail />
      </div>
    </section>
  );
}
