import Portfolio from "@/app/components/Portfolio";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, UserRoundCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Img from "@/public/assets/oxelar.png";
import Placeholder from "@/public/assets/placeholder.jpg";
import Nextjs from "@/public/assets/nextjs.svg";
import Tailwind from "@/public/assets/tailwind.svg";
import Shadcn from "@/public/assets/shadcn.svg";
import Typescript from "@/public/assets/typescript.svg";
import Person1 from "@/public/assets/person1.jpg";

export default function PortfolioDetail() {
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
          <div id="tags" className="flex gap-[10px]">
            <p className="w-max rounded-lg bg-[#fae9e1] px-3 py-1 text-sm text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b]">
              #designsystem
            </p>
            <p className="w-max rounded-lg bg-[#fae9e1] px-3 py-1 text-sm text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b]">
              #designsystem
            </p>
            <p className="w-max rounded-lg bg-[#fae9e1] px-3 py-1 text-sm text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b]">
              #designsystem
            </p>
          </div>
          <div className="my-8">
            <h1 id="title" className="text-[32px] font-semibold">
              Tetrisly Design System
            </h1>
            <p id="description" className="mt-2 text-lg text-muted-foreground">
              Not another useless UI kit. Tetrisly Design System is a collection
              of rules, tools and processes which simplify design processes and
              the development of digital products.
            </p>
          </div>
          <Button className="w-full md:w-max">Live Preview</Button>
        </div>
        <Image
          src={Img}
          alt="Screenshot of project"
          className="rounded-xl border"
        />
        <div className="flex flex-col gap-1 lg:flex-row">
          <div className="flex basis-full flex-col items-center justify-center bg-[#efeff0] py-8 first:rounded-t-xl last:rounded-b-xl dark:bg-[#282828] lg:first:rounded-l-xl lg:first:rounded-r-none lg:last:rounded-l-none lg:last:rounded-r-xl">
            <Calendar className="h-5 w-5 text-[#a15830] dark:text-[#fabc9b]" />
            <p id="timeline" className="mb-2 mt-4 text-lg font-medium">
              2021 - present
            </p>
            <p className="text-sm text-muted-foreground">Timeline</p>
          </div>
          <div className="flex basis-full flex-col items-center justify-center bg-[#efeff0] py-8 first:rounded-t-xl last:rounded-b-xl dark:bg-[#282828] lg:first:rounded-l-xl lg:first:rounded-r-none lg:last:rounded-l-none lg:last:rounded-r-xl">
            <UserRoundCheck className="h-5 w-5 text-[#a15830] dark:text-[#fabc9b]" />
            <p id="role" className="mb-2 mt-4 text-lg font-medium">
              Creator
            </p>
            <p className="text-sm text-muted-foreground">Role</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6 xl:flex-row">
          <h2 className="min-w-[240px] text-[26px] font-medium">Background</h2>
          <p id="background" className=" text-lg text-muted-foreground">
            In the realm of technology, artificial intelligence (AI) and machine
            learning have emerged as game-changers, particularly in the field of
            UI/UX design. The integration of these advanced technologies is
            reshaping how we approach design, offering new possibilities and
            challenges. This post aims to explore how AI and machine learning
            are influencing the field of UI/UX, bringing a new dimension to user
            experiences and interfaces.
          </p>
        </div>
        <div className="space-y-20 border-y-2 border-y-gray-200 py-20 dark:border-y-gray-800">
          <div className="flex flex-col items-start justify-start gap-6 md:gap-10 xl:flex-row">
            <h2 className="min-w-[240px] text-[26px] font-medium">Goals</h2>
            <div className="col-span-2 flex flex-col gap-10">
              <div className="flex flex-col gap-5 md:flex-row md:gap-6">
                <p className="flex h-10 max-w-10 items-center  justify-center rounded-full  bg-[#fae9e1] font-medium text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b] md:min-w-10">
                  1
                </p>
                <div className="flex flex-col gap-2 ">
                  <h3 id="goalsTitles" className="text-lg font-medium">
                    Bringing a new dimension to user experiences and interfaces.
                  </h3>
                  <p
                    id="goalsDescriptions"
                    className="leading-[28.8px] text-muted-foreground"
                  >
                    In the realm of technology, artificial intelligence (AI) and
                    machine learning have emerged as game-changers, particularly
                    in the field of UI/UX design. The integration of these
                    advanced technologies is reshaping how we approach design,
                    offering new possibilities and challenges. This post aims to
                    explore how AI and machine learning are influencing the
                    field of UI/UX, bringing a new dimension to user experiences
                    and interfaces.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row md:gap-6">
                <p className="flex h-10 max-w-10 items-center  justify-center rounded-full  bg-[#fae9e1] font-medium text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b] md:min-w-10">
                  2
                </p>
                <div className="flex flex-col gap-2 ">
                  <h3 id="goalsTitles" className="text-lg font-medium">
                    Bringing a new dimension to user experiences and interfaces.
                  </h3>
                  <p
                    id="goalsDescriptions"
                    className="leading-[28.8px] text-muted-foreground"
                  >
                    The integration of these advanced technologies is reshaping
                    how we approach design, offering new possibilities and
                    challenges
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row md:gap-6">
                <p className="flex h-10 max-w-10 items-center  justify-center rounded-full  bg-[#fae9e1] font-medium text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b] md:min-w-10">
                  3
                </p>
                <div className="flex flex-col gap-2 ">
                  <h3 id="goalsTitles" className="text-lg font-medium">
                    Bringing a new dimension to user experiences and interfaces.
                  </h3>
                  <p
                    id="goalsDescriptions"
                    className="leading-[28.8px] text-muted-foreground"
                  >
                    The integration of these advanced technologies is reshaping
                    how we approach design, offering new possibilities and
                    challenges. This post aims to explore how AI and machine
                    learning are influencing the field of UI/UX, bringing a new
                    dimension to user experiences and interfaces
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={Placeholder}
            alt="Screenshot of project"
            className="rounded-xl"
          />
          <div className="flex flex-col items-start justify-start gap-6 md:gap-10 xl:flex-row">
            <h2 className="min-w-[240px] text-[26px] font-medium">Solutions</h2>
            <div className="col-span-2 flex flex-col gap-10">
              <div className="flex flex-col gap-5 md:flex-row md:gap-6">
                <p className="flex h-10 max-w-10 items-center  justify-center rounded-full  bg-[#fae9e1] font-medium text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b] md:min-w-10">
                  1
                </p>
                <div className="flex flex-col gap-2 ">
                  <h3 id="solutionsTitles" className="text-lg font-medium">
                    Bringing a new dimension to user experiences and interfaces.
                  </h3>
                  <p
                    id="solutionsDescriptions"
                    className="leading-[28.8px] text-muted-foreground"
                  >
                    In the realm of technology, artificial intelligence (AI) and
                    machine learning have emerged as game-changers, particularly
                    in the field of UI/UX design. The integration of these
                    advanced technologies is reshaping how we approach design,
                    offering new possibilities and challenges. This post aims to
                    explore how AI and machine learning are influencing the
                    field of UI/UX, bringing a new dimension to user experiences
                    and interfaces.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row md:gap-6">
                <p className="flex h-10 max-w-10 items-center  justify-center rounded-full  bg-[#fae9e1] font-medium text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b] md:min-w-10">
                  2
                </p>
                <div className="flex flex-col gap-2 ">
                  <h3 id="goalsTitles" className="text-lg font-medium">
                    Bringing a new dimension to user experiences and interfaces.
                  </h3>
                  <p
                    id="goalsDescriptions"
                    className="leading-[28.8px] text-muted-foreground"
                  >
                    The integration of these advanced technologies is reshaping
                    how we approach design, offering new possibilities and
                    challenges
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row md:gap-6">
                <p className="flex h-10 max-w-10 items-center  justify-center rounded-full  bg-[#fae9e1] font-medium text-[#a15830] dark:bg-[#382218] dark:text-[#fabc9b] md:min-w-10">
                  3
                </p>
                <div className="flex flex-col gap-2 ">
                  <h3 id="goalsTitles" className="text-lg font-medium">
                    Bringing a new dimension to user experiences and interfaces.
                  </h3>
                  <p
                    id="goalsDescriptions"
                    className="leading-[28.8px] text-muted-foreground"
                  >
                    The integration of these advanced technologies is reshaping
                    how we approach design, offering new possibilities and
                    challenges. This post aims to explore how AI and machine
                    learning are influencing the field of UI/UX, bringing a new
                    dimension to user experiences and interfaces
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6 xl:flex-row">
          <h2 className="min-w-[240px] text-[26px] font-medium">Tools</h2>
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5 first:rounded-t-xl last:rounded-b-xl dark:bg-[#282828]">
              <Image src={Nextjs} alt="logo" className="h-8 w-8 dark:invert" />
              <p id="tools" className="text-lg font-medium">
                Nextjs
              </p>
            </div>
            <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5 first:rounded-t-xl last:rounded-b-xl dark:bg-[#282828]">
              <Image
                src={Tailwind}
                alt="logo"
                className="h-8 w-8 dark:invert"
              />
              <p id="tools" className="text-lg font-medium">
                Tailwind
              </p>
            </div>
            <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5 first:rounded-t-xl last:rounded-b-xl dark:bg-[#282828]">
              <Image
                src={Typescript}
                alt="logo"
                className="h-8 w-8 dark:invert"
              />
              <p id="tools" className="text-lg font-medium">
                Typescript
              </p>
            </div>
            <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5 first:rounded-t-xl last:rounded-b-xl dark:bg-[#282828]">
              <Image src={Shadcn} alt="logo" className="h-8 w-8 dark:invert" />
              <p id="tools" className="text-lg font-medium">
                Shadcn
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6 xl:flex-row">
          <h2 className="min-w-[240px] text-[26px] font-medium">Conclusion</h2>
          <p id="background" className=" text-lg text-muted-foreground">
            In the realm of technology, artificial intelligence (AI) and machine
            learning have emerged as game-changers, particularly in the field of
            UI/UX design. The integration of these advanced technologies is
            reshaping how we approach design, offering new possibilities and
            challenges. This post aims to explore how AI and machine learning
            are influencing the field of UI/UX, bringing a new dimension to user
            experiences and interfaces.
          </p>
        </div>
        <div className="flex flex-col gap-5 rounded-xl bg-[#F5F5F5] p-6 dark:bg-[#282828]">
          <p className="text-lg">
            We've worked with Alazar multiple times, and it has always been a
            pleasure! He helped us craft engaging landing pages that convert
            well. Alazar works in a very timely manner and always ensures that
            you are fully satisfied with the results!
          </p>
          <div className="flex gap-5">
            <Image
              src={Person1}
              alt="Image of [Person]"
              width={56}
              height={56}
              className="h-14 rounded-xl"
            />
            <div>
              <p className="font-medium ">First LastName</p>
              <p className="text-sm text-muted-foreground">Position/Title</p>
            </div>
          </div>
        </div>
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
