"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  emailAddress: z.string().email({
    message: "Please enter your email address",
  }),
  message: z
    .string()
    .min(5, {
      message: "Message must be at least 5 characters",
    })
    .max(200, {
      message: "Message must not be longer than 200 characters",
    }),
});

export default function Message() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {};
  return (
    <section>
      <h2 className="mb-8 mt-[120px] text-[26px] font-medium">
        Send a message
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="grid w-full grid-cols-1 gap-5 md:grid-cols-2"
        >
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Name"
                      className=" dark:bg-[#282828] dark:placeholder:text-[#7E7E7E]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            name="emailAddress"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Email address"
                      type="email"
                      className=" dark:bg-[#282828] dark:placeholder:text-[#7E7E7E]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <div className="md:col-span-2">
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message"
                        className="min-h-36 resize-none dark:bg-[#282828] dark:placeholder:text-[#7E7E7E] "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <Button
            type="submit"
            className="h-[54px] bg-[#088046] text-lg font-semibold text-white hover:bg-[#39996B] dark:bg-[#12C971] dark:hover:bg-[#13A65F] md:col-span-2"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </section>
  );
}
