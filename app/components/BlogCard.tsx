import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { blogCard } from "@/types/Blog";

async function getData() {
  const query = `
  *[_type == 'post'] | order(_createdAt desc){
    description,
      _id,
      'currentSlug': slug.current,
      date,
      mainImage,
      'alt': mainImage.alt,
      title
      
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogCard() {
  const data: blogCard[] = await getData();
  return (
    <section>
      {data.map((card) => (
        <div id={card._id} className="mt-16 grid grid-cols-1 gap-16">
          <div className="flex flex-col gap-8 md:flex-row">
            <Card className="flex flex-col gap-8 border-0 shadow-none dark:bg-transparent md:flex-row-reverse md:gap-10">
              <Image
                src={urlForImage(card.mainImage)}
                alt={`${card.alt}`}
                width={1000}
                height={1000}
                className="rounded-xl md:h-[180px] md:w-[240px]"
              />
              <CardContent className="flex flex-col p-0">
                <p className="sm text-gray-400 ">{card.date}</p>
                <p className="mt-[10px] text-[22px] font-medium">
                  {card.title}
                </p>
                <p className="mt-2 text-muted-foreground">{card.description}</p>
                <Link href={`/Blog/${card.currentSlug}`}>
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
      ))}
    </section>
  );
}
