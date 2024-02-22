import Image from "next/image";
import { ModeToggle } from "./toggle";
export default function Nav() {
  return (
    <div className="flex justify-between items-center px-6 py-4">
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
          <p className="text-sm text-muted-foreground">Web Developer</p>
        </div>
      </div>
      <div className="flex">
        <ModeToggle />
        <nav>
          <ul>
            <li>Menu</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
