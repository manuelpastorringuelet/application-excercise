import Link from "next/link";

import type { BlogPost } from "@prisma/client";

import formatDate from "~/utils/formatDate";

type PostCardData = Pick<BlogPost, "id" | "createdAt" | "title">;

interface PostCardProps {
  post: PostCardData;
}

const PostCard = ({ post }: PostCardProps) => {


  return (
    <li className="border-b border-gray-200 rounded-lg hover:bg-fuchsia-100 hover:scale-105 transition-all">
      <Link href={`/posts/${post.id}`}>
        <text className="block p-4">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-xs text-slate-600">
            {formatDate(post.createdAt)}
          </p>
        </text>
      </Link>
    </li>
  );
};

export default PostCard;
