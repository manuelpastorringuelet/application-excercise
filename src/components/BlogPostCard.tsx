import Link from "next/link";
import type { BlogPost } from "@prisma/client";

type PostCardData = Pick<BlogPost, "id" | "createdAt" | "title">;

interface PostCardProps {
  post: PostCardData;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <li className="border-b border-gray-200 hover:bg-gray-50">
      <Link href={`/posts/${post.id}`}>
        <text className="block py-4 hover:text-primary">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-xs text-slate-600">
            {post.createdAt.toLocaleDateString()}
          </p>
        </text>
      </Link>
    </li>
  );
};

export default PostCard;
