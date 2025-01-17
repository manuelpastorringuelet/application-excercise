import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import router from "next/router";

import { useToast } from "~/components/ui/use-toast";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

import { api } from "~/utils/api";
import { newBlogPostSchema } from "~/utils/newBlogPostSchema";
import type { NewBlogPostType } from "~/utils/newBlogPostSchema";

const NewBlogPost = () => {
  const { toast } = useToast();

  const form = useForm<NewBlogPostType>({
    resolver: zodResolver(newBlogPostSchema),
  });

  const newPost = api.posts.create.useMutation();

  const onSubmit: SubmitHandler<NewBlogPostType> = (data) => {
    newPost
      .mutateAsync(data)
      .then(() =>
        toast({
          title: "Post created",
          description: "Your post has been created successfully",
          duration: 1500,
        })
      )
      .then(() => router.push("/"))
      .catch((error) =>
        console.error("Failed to create post or navigate:", error)
      );
  };

  return (
    <Form {...form}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 max-w-xl space-y-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Content" rows={10} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default" className="w-full">
          Create
        </Button>
      </form>
    </Form>
  );
};

export default NewBlogPost;
