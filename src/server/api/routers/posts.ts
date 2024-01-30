import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { newBlogPostSchema } from "~/utils/newBlogPostSchema";

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.blogPost.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
    });
  }),
  getOne: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.blogPost.findUnique({
      where: {
        id: input,
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
      },
    });
  }),
  create: publicProcedure
    .input(newBlogPostSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.blogPost.create({
        data: {
          title: input.title,
          content: input.content,
        },
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.blogPost.delete({
      where: {
        id: input,
      },
    });
  }),
});
