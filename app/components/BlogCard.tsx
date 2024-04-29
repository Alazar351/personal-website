import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Placeholder from "@/public/assets/placeholder.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function BlogCard() {
  return (
    <section>
      <div className="mt-8 grid grid-cols-1 gap-16">
        <div className="flex flex-col gap-8 md:flex-row">
          <Card className="flex flex-col gap-8 border-0 shadow-none dark:bg-transparent md:flex-row-reverse md:gap-10">
            <Image
              src={Placeholder}
              alt="placeholder"
              className="rounded-xl md:h-[180px] md:w-[240px]"
            />
            <CardContent className="flex flex-col p-0">
              <p className="sm text-gray-400 ">Aug 2023</p>
              <p className="mt-[10px] text-[22px] font-medium">
                The Future of UX: Embracing AI and Machine Learning
              </p>
              <p className="mt-2 text-muted-foreground">
                In the ever-evolving landscape of technology, AI and machine
                learning have emerged as pivotal elements in shaping the future
                of UI/UX design
              </p>
              <Link href={"/Blog/Detail"}>
                <Button
                  variant={"outline"}
                  className="mt-6 w-full text-sm md:w-[112px]"
                >
                  Read More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
