import { z } from "zod";

export const newBlogPostSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be more than 2 characters")
    .max(50, "Title must be less than 50 characters"),
  content: z
    .string()
    .min(20, "Content must be more than 20 characters")
    .max(5000, "Content must be less than 5000 characters"),
});

export type NewBlogPostType = z.infer<typeof newBlogPostSchema>;
