import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import router from "next/router";

import { useToast } from "~/components/ui/use-toast";

import { newBlogPostSchema } from "~/utils/newBlogPostSchema";
import type { NewBlogPostType } from "~/utils/newBlogPostSchema";
import { api } from "~/utils/api";
import { Button } from "~/components/ui/button";

const NewBlogPost = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewBlogPostType>({
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
          duration: 2000,
        })
      )
      .then(() => router.push("/"))
      .catch((error) =>
        console.error("Failed to create post or navigate:", error)
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input className="p-2" placeholder="title" {...register("title")} />
        {errors.title && (
          <span className="text-xs text-red-500">{errors.title.message}</span>
        )}

        <textarea
          className="p-2"
          rows={10}
          placeholder="content"
          {...register("content")}
        />
        {errors.content && (
          <span className="text-xs text-red-500">{errors.content.message}</span>
        )}

        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default NewBlogPost;
