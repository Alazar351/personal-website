import Image from "next/image";
import Visual from "@/public/assets/visual.svg";
import Nextjs from "@/public/assets/nextjs.svg";
import Tailwind from "@/public/assets/tailwind.svg";
import Typescript from "@/public/assets/typescript.svg";
import Shadcn from "@/public/assets/shadcn.svg";
import Git from "@/public/assets/git.svg";

export default function Tools() {
  return (
    <section>
      <h2 className="text-[26px] font-medium">Tools</h2>
      <div className="mt-8 grid w-full grid-cols-1 gap-1 md:grid-cols-2">
        <div className="flex items-center justify-start gap-4 rounded-t-xl bg-[#efeff0] p-5 dark:bg-[#282828] md:rounded-tl-xl md:rounded-tr-none">
          <Image src={Nextjs} alt="Nextjs" className="h-8 w-8 dark:invert" />
          <p className="text-lg font-medium">Nextjs</p>
        </div>
        <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5  dark:bg-[#282828] md:rounded-tr-xl">
          <Image
            src={Typescript}
            alt="Typescript"
            className="h-8 w-8 dark:invert"
          />
          <p className="text-lg font-medium">Typescript</p>
        </div>
        {/* Add more services here v */}
        <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5  dark:bg-[#282828] ">
          <Image src={Git} alt="Git" className="h-8 w-8 dark:invert" />
          <p className="text-lg font-medium">Git</p>
        </div>
        <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5  dark:bg-[#282828] ">
          <Image src={Visual} alt="Visual" className="h-8 w-8 dark:invert" />
          <p className="text-lg font-medium">Visual Studio Code</p>
        </div>
        {/* Add more services here ^ */}
        <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5  dark:bg-[#282828] md:rounded-bl-xl">
          <Image
            src={Tailwind}
            alt="Tailwind"
            className="h-8 w-8 dark:invert"
          />
          <p className="text-lg font-medium">Tailwind</p>
        </div>
        <div className="flex items-center justify-start gap-4 rounded-b-xl bg-[#efeff0] p-5  dark:bg-[#282828] md:rounded-bl-none  md:rounded-br-xl">
          <Image src={Shadcn} alt="Shadcn" className="h-8 w-8 dark:invert" />
          <p className="text-lg font-medium">Shadcn UI</p>
        </div>
      </div>
    </section>
  );
}
