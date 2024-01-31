import Link from "next/link";
import type { BlogPost } from "@prisma/client";

import { buttonVariants } from "./ui/button";

import formatDate from "~/utils/formatDate";
import { cn } from "~/lib/utils";

type PostCardData = Pick<BlogPost, "id" | "createdAt" | "title">;

interface PostCardProps {
  post: PostCardData;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <li className="border-b border-gray-200 py-3">
      <Link
        className={cn(buttonVariants({ variant: "link" }), "px-0")}
        href={`/posts/${post.id}`}
      >
        <text>
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-xs font-normal text-slate-600">
            {formatDate(post.createdAt)}
          </p>
        </text>
      </Link>
    </li>
  );
};

export default PostCard;
