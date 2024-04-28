import Person1 from "@/public/assets/person1.jpg";
import Image from "next/image";

export default function Testimony() {
  return (
    <section>
      <h2 className="text-[26px] font-medium">What clients say</h2>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-5 rounded-xl bg-[#F5F5F5] p-6 dark:bg-[#282828] ">
          <p className="text-lg">
            We've worked with Patryk multiple times, and it has always been a
            pleasure! He helped us craft engaging landing pages that convert
            well. Patryk works in a very timely manner and always ensures that
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
        <div className="flex flex-col gap-5 rounded-xl bg-[#F5F5F5] p-6 dark:bg-[#282828] ">
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
      </div>
    </section>
  );
}
