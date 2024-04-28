import Image from "next/image";
import Project1 from "@/public/assets/dentists.png";
import Project2 from "@/public/assets/oxelar.png";
import Link from "next/link";
export default function Work() {
  return (
    <section className="mx-auto md:w-[600px] lg:w-[720px] xl:w-[904px]">
      <h2 className="text-[26px] font-medium">Selected Work</h2>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Link href={"#"}>
          <div className="group overflow-clip rounded-xl border bg-gray-400">
            <Image
              src={Project1}
              alt="Dentists website screenshot"
              className="ml-8 mt-14 rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="mt-5 flex flex-col gap-1">
            <p className="font-medium">Dentists</p>
            <p className="text-sm text-muted-foreground">Website</p>
          </div>
        </Link>
        <Link href={"#"}>
          <div className="group overflow-clip rounded-xl border bg-gray-100 pr-16">
            <Image
              src={Project2}
              alt="Dentists website screenshot"
              className="m-8 rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="mt-5 flex flex-col gap-1">
            <p className="font-medium">Oxelar</p>
            <p className="text-sm text-muted-foreground">
              Website Landing Page
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
