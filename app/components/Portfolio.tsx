import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { projectCard } from "@/types/Project";

async function getData() {
  const query = `
  *[_type == 'project'] | order(_createdAt desc){
    name,
    image,
    cardDescription,
    'currentSlug': slug.current,
    "alt": image.alt
}
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function Portfolio() {
  const data: projectCard[] = await getData();
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {data.map((project, idx) => (
        <Link key={idx} href={`/Projects/${project.currentSlug}`}>
          <Card className="border-0 shadow-none dark:bg-transparent dark:bg-none">
            <div className="overflow-clip rounded-xl">
              <Image
                src={`${urlForImage(project.image)}`}
                alt={`${project.alt}`}
                width={1000}
                height={1000}
                className="transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
            <CardContent>
              <div className="mt-5 flex flex-col gap-1">
                <p className="font-medium">{project.name}</p>
                <p className="text-sm text-muted-foreground">
                  {project.cardDescription}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
