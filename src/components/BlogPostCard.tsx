import Link from "next/link";

import type { BlogPost } from "@prisma/client";

type PostCardData = Pick<BlogPost, "id" | "createdAt" | "title">;

interface PostCardProps {
  post: PostCardData;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <li key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="text-sm text-slate-400">
          {post.createdAt.toLocaleDateString()}
        </p>
      </Link>
    </li>
  );
};

export default PostCard;
