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
          Hey! I’m a frontend developer in Minnesota who’s passionate about
          building beautiful, responsive websites with modern tools like
          Next.js, React, and Tailwind CSS.
        </p>
        <p className="mt-5 text-lg text-muted-foreground">
          I’m especially into the visual side of development — translating
          design mockups into real, interactive experiences that look great and
          feel smooth to use. I’ve spent the last couple years leveling up
          through personal projects, client work, and a lot of trial and error.
        </p>
        <p className="mt-5 text-lg text-muted-foreground">
          Right now, I’m looking to join a team where I can keep learning,
          contribute to real-world products, and grow into a stronger developer.
        </p>
      </div>
    </section>
  );
}
