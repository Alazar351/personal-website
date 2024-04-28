import Image from "next/image";
import Project1 from "@/public/assets/dentists.png";
import Project2 from "@/public/assets/oxelar.png";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Link href={"/Projects/Details"}>
        <Card className="border-0 shadow-none dark:bg-transparent dark:bg-none">
          <div className="overflow-clip rounded-xl">
            <Image
              src={Project1}
              alt="Dentists website screenshot"
              className="transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
          <CardContent>
            <div className="mt-5 flex flex-col gap-1">
              <p className="font-medium">Dentists</p>
              <p className="text-sm text-muted-foreground">Website</p>
            </div>
          </CardContent>
        </Card>
      </Link>
      <Link href={"/Projects/Details"}>
        <Card className="border-0 shadow-none dark:bg-transparent">
          <div className="overflow-clip rounded-xl">
            <Image
              src={Project2}
              alt="Dentists website screenshot"
              className=" transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

          <CardContent>
            <div className="mt-5 flex flex-col gap-1">
              <p className="font-medium">Oxelar</p>
              <p className="text-sm text-muted-foreground">
                Website Landing Page
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
