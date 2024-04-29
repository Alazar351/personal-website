import Image from "next/image";
import Profile from "@/public/assets/picture.png";

export default function Intro() {
  return (
    <section className="flex gap-10">
      <div className="flex flex-col">
        <p className="text-[32px] font-semibold">Alazar Lema</p>
        <p className="mt-2 text-[32px] font-semibold text-muted-foreground">
          Nextjs Developer
        </p>
        <p className="mt-10 text-lg text-muted-foreground">
          Alazar, a fullstack Nextjs developer from Minnesota with 2 years of
          experience focusing bringing design concepts to life and collaborating
          closely with clients to understand their unique needs and deliver
          solutions that exceed expectations.
        </p>
        <p className="mt-5 text-lg text-muted-foreground">
          I excel in accurately translating design mockups into fully responsive
          and interactive web applications using Next.js, React, and other
          cutting-edge frontend technologies. My commitment to pixel-perfect
          design ensures that every element aligns seamlessly with the client's
          vision, creating a memorable and engaging user experience.
        </p>
      </div>
      <Image
        src={Profile}
        alt="Picture of Alazar Lema"
        className="hidden rounded-xl md:block md:h-[120px] md:w-[120px] lg:h-[200px] lg:w-[200px]"
      />
    </section>
  );
}
