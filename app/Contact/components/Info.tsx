import CopyEmail from "@/app/components/CopyEmail";
import { Button } from "@/components/ui/button";
import Calendly from "./Calendly";

export default function Info() {
  return (
    <section>
      <p className="text-[32px] font-semibold md:text-[40px]">Contact</p>
      <p className="mt-2 border-b-2 border-b-gray-200 pb-10 text-lg text-muted-foreground dark:border-b-gray-800">
        Get in touch for inquiries
      </p>
      <div className="mt-10 flex flex-col gap-8 md:flex-row">
        <div className="basis-full">
          <p>alazar.lema351@gmail.com</p>
          <p className="mt-1 text-sm text-muted-foreground">E-mail</p>
        </div>
        <div className="basis-full">
          <p>+1 (612)-460-0289</p>
          <p className="mt-1 text-sm text-muted-foreground">Phone</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-start gap-4 md:flex-row ">
        <Calendly />
        <CopyEmail />
      </div>
    </section>
  );
}
