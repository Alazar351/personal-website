import Portfolio from "@/app/components/Portfolio";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, UserRoundCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { ProjectDetail } from "@/types/Project";

async function getData(slug: string) {
  const query = `
  *[_type == 'project' && slug.current == '${slug}']{
    name,
    background,
      goals,
      image,
      tags,
      role,
      conclusion,
      solutions,
      timeline,
      secondaryImage,
      description,
      tools,
      url,
      "currentSlug": slug.current,
      'alt': image.alt,
      'secondAlt': secondaryImage.alt,
      testimonial,
      testimonialImage,
      'testimonialAlt': testimonialImage.alt,

  }[0]
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function PortfolioDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data: ProjectDetail = await getData(params.slug);

  return (
    <>
      <Link
        href={"/Projects"}
        className="group flex w-max items-center justify-start gap-3 px-2 pb-6"
      >
        <ChevronLeft className="h-3 w-3 text-gray-400 group-hover:text-black" />
        <p className="text-sm font-medium">Back to list</p>
      </Link>
      <section className="space-y-20 border-y-2 border-y-gray-200 py-20 dark:border-y-gray-800">
        <div>
          <div className="flex gap-[10px]">
            {data.tags.map((tag) => (
              <p className="w-max rounded-lg bg-[#fae9e1] px-3 py-1 text-sm text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b]">
                {tag}
              </p>
            ))}
          </div>
          <div className="my-8">
            <h1 className="text-[32px] font-semibold">{data.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {data.description}
            </p>
          </div>
          <Link href={`${data.url}`}>
            <Button className="w-full md:w-max">Live Preview</Button>
          </Link>
        </div>
        <Image
          src={urlForImage(data.image)}
          alt={`${data.alt}`}
          width={1000}
          height={1000}
          className="rounded-xl border"
        />
        <div className="flex flex-col gap-1 lg:flex-row">
          <div className="flex basis-full flex-col items-center justify-center bg-[#efeff0] py-8 first:rounded-t-xl last:rounded-b-xl dark:bg-[#282828] lg:first:rounded-l-xl lg:first:rounded-r-none lg:last:rounded-l-none lg:last:rounded-r-xl">
            <Calendar className="h-5 w-5 text-[#a15830] dark:text-[#fabc9b]" />
            <p className="mb-2 mt-4 text-lg font-medium">{data.timeline}</p>
            <p className="text-sm text-muted-foreground">Timeline</p>
          </div>
          <div className="flex basis-full flex-col items-center justify-center bg-[#efeff0] py-8 first:rounded-t-xl last:rounded-b-xl dark:bg-[#282828] lg:first:rounded-l-xl lg:first:rounded-r-none lg:last:rounded-l-none lg:last:rounded-r-xl">
            <UserRoundCheck className="h-5 w-5 text-[#a15830] dark:text-[#fabc9b]" />
            <p className="mb-2 mt-4 text-lg font-medium">{data.role}</p>
            <p className="text-sm text-muted-foreground">Role</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6 xl:flex-row">
          <h2 className="min-w-[240px] text-[26px] font-medium">Background</h2>
          <p id="background" className=" text-lg text-muted-foreground">
            {data.background}
          </p>
        </div>
        <div className="space-y-20 border-y-2 border-y-gray-200 py-20 dark:border-y-gray-800">
          <div className="flex flex-col items-start justify-start gap-6 md:gap-10 xl:flex-row">
            <h2 className="min-w-[240px] text-[26px] font-medium">Goals</h2>
            <div className="col-span-2 flex flex-col gap-10">
              {data.goals.map((goal, idx) => (
                <div className="flex flex-col gap-5 md:flex-row md:gap-6">
                  <p className="flex h-10 max-w-10 items-center  justify-center rounded-full  bg-[#fae9e1] font-medium text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b] md:min-w-10">
                    {idx + 1}
                  </p>
                  <div className="flex flex-col gap-2 ">
                    <h3 id="goalsTitles" className="text-lg font-medium">
                      {goal.title}
                    </h3>
                    <p
                      id="goalsDescriptions"
                      className="leading-[28.8px] text-muted-foreground"
                    >
                      {goal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Image
            src={urlForImage(data.secondaryImage)}
            width={1000}
            height={1000}
            alt={`${data.secondAlt}`}
            className="rounded-xl"
          />
          <div className="flex flex-col items-start justify-start gap-6 md:gap-10 xl:flex-row">
            <h2 className="min-w-[240px] text-[26px] font-medium">Solutions</h2>
            <div className="col-span-2 flex flex-col gap-10">
              {data.solutions.map((solution, idx) => (
                <div className="flex flex-col gap-5 md:flex-row md:gap-6">
                  <p className="flex h-10 max-w-10 items-center  justify-center rounded-full  bg-[#fae9e1] font-medium text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b] md:min-w-10">
                    {idx + 1}
                  </p>
                  <div className="flex flex-col gap-2 ">
                    <h3 className="text-lg font-medium">{solution.title}</h3>
                    <p className="leading-[28.8px] text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6 xl:flex-row">
          <h2 className="min-w-[240px] text-[26px] font-medium">Tools</h2>
          <div className="flex w-full flex-col gap-1">
            {data.tools.map((tool) => (
              <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5 first:rounded-t-xl last:rounded-b-xl dark:bg-[#282828]">
                <Image
                  src={`/assets/${tool}.svg`}
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-8 w-8 dark:invert"
                />
                <p id="tools" className="text-lg font-medium capitalize">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6 xl:flex-row">
          <h2 className="min-w-[240px] text-[26px] font-medium">Conclusion</h2>
          <p className=" text-lg text-muted-foreground">{data.conclusion}</p>
        </div>
        {data.testimonial?.comment ? (
          <div className="flex flex-col gap-5 rounded-xl bg-[#F5F5F5] p-6 dark:bg-[#282828]">
            <p className="text-lg">{data.testimonial?.comment}</p>
            <div className="flex gap-5">
              {data.testimonialImage ? (
                <Image
                  src={urlForImage(data.testimonialImage)}
                  alt={`Image of ${data.testimonialAlt}`}
                  width={56}
                  height={56}
                  className="h-14 rounded-xl"
                />
              ) : (
                ""
              )}

              <div>
                <p className="font-medium ">{data.testimonial?.name}</p>
                <p className="text-sm text-muted-foreground">
                  {data.testimonial?.position}
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
      <div className="mt-20 flex flex-col gap-8">
        <p className="text-[26px] font-medium">More projects</p>
        <Portfolio />
        <Link href={"/Projects"}>
          <Button
            variant={"outline"}
            className="w-full py-2 text-sm font-medium"
          >
            All projects
          </Button>
        </Link>
      </div>
    </>
  );
}
