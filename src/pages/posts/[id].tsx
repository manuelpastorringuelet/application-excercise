import Link from "next/link";
import { useRouter } from "next/router";

import { api } from "~/utils/api";

const BlogPostDetailPage = () => {
  const router = useRouter();

  const postId = router.query.id as string;
  const post = api.posts.getOne.useQuery(postId);

  return (
    <div className="flex flex-1 flex-col items-center gap-4 bg-slate-300 pt-10">
      <h1 className="text-2xl">{post.data?.title}</h1>
      <p className="text-xs">{post.data?.createdAt.toLocaleDateString()}</p>
      <p className="max-w-2xl">{post.data?.content}</p>
      <Link href="/">Back</Link>
    </div>
  );
};

export default BlogPostDetailPage;
