import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import router from "next/router";

import { newBlogPostSchema } from "~/utils/newBlogPostSchema";
import type { NewBlogPostType } from "~/utils/newBlogPostSchema";
import { api } from "~/utils/api";

const NewBlogPost = () => {
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
      .then(() => router.push("/"))
      .then(() => console.log("Post created and navigated to home"))
      .catch((error) =>
        console.error("Failed to create post or navigate:", error)
      );
  };

  return (
    <div className="flex flex-1 items-center justify-center bg-slate-500">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input className="p-2" placeholder="title" {...register("title")} />
        {errors.title && (
          <span className="text-xs text-red-500">This field is required</span>
        )}

        <textarea
          className="p-2"
          rows={10}
          placeholder="content"
          {...register("content")}
        />
        {errors.content && (
          <span className="text-xs text-red-500">This field is required</span>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

export default NewBlogPost;
