"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits").regex(/^[+]?[\d\s\-()]+$/, "Invalid phone number format"),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be less than 500 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission here
    alert("Message sent successfully!");
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  {...field}
                  className="border-gray-300 focus:border-gray-900"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  {...field}
                  className="border-gray-300 focus:border-gray-900"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Phone Number</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+91 1234567890"
                  {...field}
                  className="border-gray-300 focus:border-gray-900"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-32 resize-none border-gray-300 focus:border-gray-900"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-gray-900 text-white hover:bg-gray-800 uppercase tracking-wide font-semibold text-sm py-6"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
}
