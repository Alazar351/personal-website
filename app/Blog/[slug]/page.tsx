import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/app/components/BlogCard";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { blogDetail } from "@/types/Blog";
import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
  const query = `
  *[_type == 'post' && slug.current == '${slug}'] {
      _id,
      body,
      mainImage,
      'alt': mainImage.alt,
      'currentSlug': slug.current,
      title,
      date
  }[0]
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data: blogDetail = await getData(params.slug);

  return (
    <>
      <Link
        href={"/Blog"}
        className="group flex w-max items-center justify-start gap-3 px-2 pb-6"
      >
        <ChevronLeft className="h-3 w-3 text-gray-400 group-hover:text-black" />
        <p className="text-sm font-medium">Back to list</p>
      </Link>
      <section className="space-y-20 border-y-2 border-y-gray-200  pb-20 dark:border-y-gray-800">
        <div>
          <h1 className="my-6 text-[32px] font-semibold md:text-[40px]">
            {data.title}
          </h1>
          <p className="text-sm text-muted-foreground">{data.date}</p>
        </div>
        <Image
          src={urlForImage(data.mainImage)}
          alt={`${data.alt}`}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <div className="prose prose-xl dark:prose-invert">
          <PortableText value={data.body} />
        </div>
      </section>
      <div className="mt-20 flex flex-col">
        <p className="text-[26px] font-medium">Related posts</p>
        <BlogCard />
      </div>
    </>
  );
}
