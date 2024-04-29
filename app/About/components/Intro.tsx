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
          Alazar, a product designer and design system specialist from Poland
          with over 9 years of experience focusing on user experience and design
          systems to creating a user-centered design in SaaS products.
        </p>
        <p className="mt-5 text-lg text-muted-foreground">
          Co-creator at Tetrisly one of the most popular starter kits for design
          systems. I had the opportunity to work with Phenom.com, Bidroom.com or
          Perfops.net but also with many startups from around the world as a
          Lead Designer.
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
