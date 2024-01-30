import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { newBlogPostSchema } from "~/utils/newBlogPostSchema";
import type { NewBlogPostType } from "~/utils/newBlogPostSchema";

const NewBlogPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewBlogPostType>({
    resolver: zodResolver(newBlogPostSchema),
  });

  const onSubmit: SubmitHandler<NewBlogPostType> = (data) => console.log(data);

  return (
    <div className="flex flex-1 items-center justify-center bg-slate-500">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input placeholder="title" {...register("title")} />
        {errors.title && <span>This field is required</span>}

        <input placeholder="content" {...register("content")} />
        {errors.content && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default NewBlogPost;
