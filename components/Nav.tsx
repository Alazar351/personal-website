import Image from "next/image";
import { ModeToggle } from "./ui/toggleMode";
export default function Nav() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
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
        <button className="flex w-10 items-center justify-center rounded  hover:bg-gray-100">
          <img src="/menu.svg" width={24} height={24} alt="Menu open button" />
        </button>
        <nav className="hidden">
          <ul>
            <li></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
