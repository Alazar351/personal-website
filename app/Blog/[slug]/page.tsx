import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Placeholder from "@/public/assets/placeholder.jpg";
import BlogCard from "@/app/components/BlogCard";

export default function BlogDetail() {
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
          <h1
            id="title"
            className="my-6 text-[32px] font-semibold md:text-[40px]"
          >
            The Future of UX: Embracing AI and Machine Learning
          </h1>
          <p id="publishedAt" className="text-sm text-muted-foreground">
            Aug 2023
          </p>
        </div>
        <Image
          id="mainImage"
          src={Placeholder}
          alt="Placeholder"
          className="rounded-xl"
        />
        <div className="flex flex-col gap-10">
          <p className="text-lg text-muted-foreground">
            In the realm of technology, artificial intelligence (AI) and machine
            learning have emerged as game-changers, particularly in the field of
            UI/UX design. The integration of these advanced technologies is
            reshaping how we approach design, offering new possibilities and
            challenges. This post aims to explore how AI and machine learning
            are influencing the field of UI/UX, bringing a new dimension to user
            experiences and interfaces.
          </p>
          <div className="space-y-5">
            <h2 className="text-[26px] font-medium">
              AI as a Tool for Enhanced User Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              AI's role in UI/UX design transcends mere automation. It is about
              leveraging the power of data-driven insights to create designs
              that are not only visually appealing but also highly functional.
              Machine learning algorithms can analyze vast amounts of user data,
              providing insights into user behavior, preferences, and
              interactions. This wealth of information is invaluable for
              designers, allowing them to anticipate user needs, customize
              experiences, and even predict future trends. AI, therefore, is not
              just a tool but a partner in the design process, pushing the
              boundaries of what's possible.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="text-[22px] font-medium">
              Challenges and Opportunities
            </h3>
            <p className="text-lg text-muted-foreground">
              AI's role in UI/UX design transcends mere automation. It is about
              leveraging the power of data-driven insights to create designs
              that are not only visually appealing but also highly functional.
              Machine learning algorithms can analyze vast amounts of user data,
              providing insights into user behavior, preferences, and
              interactions. This wealth of information is invaluable for
              designers, allowing them to anticipate user needs, customize
              experiences, and even predict future trends. AI, therefore, is not
              just a tool but a partner in the design process, pushing the
              boundaries of what's possible.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-[26px] font-medium">
              AI as a Tool for Enhanced User Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              AI's role in UI/UX design transcends mere automation. It is about
              leveraging the power of data-driven insights to create designs
              that are not only visually appealing but also highly functional.
              Machine learning algorithms can analyze vast amounts of user data,
              providing insights into user behavior, preferences, and
              interactions. This wealth of information is invaluable for
              designers, allowing them to anticipate user needs, customize
              experiences, and even predict future trends. AI, therefore, is not
              just a tool but a partner in the design process, pushing the
              boundaries of what's possible.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="text-[22px] font-medium">
              Challenges and Opportunities
            </h3>
            <p className="text-lg text-muted-foreground">
              AI's role in UI/UX design transcends mere automation. It is about
              leveraging the power of data-driven insights to create designs
              that are not only visually appealing but also highly functional.
              Machine learning algorithms can analyze vast amounts of user data,
              providing insights into user behavior, preferences, and
              interactions. This wealth of information is invaluable for
              designers, allowing them to anticipate user needs, customize
              experiences, and even predict future trends. AI, therefore, is not
              just a tool but a partner in the design process, pushing the
              boundaries of what's possible.
            </p>
          </div>
        </div>
      </section>
      <div className="mt-20 flex flex-col">
        <p className="text-[26px] font-medium">Related posts</p>
        <BlogCard />
      </div>
    </>
  );
}
