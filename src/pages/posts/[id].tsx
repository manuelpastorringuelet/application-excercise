import Link from "next/link";
import { useRouter } from "next/router";

import { api } from "~/utils/api";

const BlogPostDetailPage = () => {
  const router = useRouter();

  const postId = router.query.id as string;
  const post = api.posts.getOne.useQuery(postId);

  const deletePost = api.posts.delete.useMutation();

  const onDelete = () => {
    deletePost
      .mutateAsync(postId)
      .then(() => router.push("/"))
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <div className="flex flex-1 flex-col items-center gap-4 bg-slate-300 pt-10">
      <h1 className="text-2xl">{post.data?.title}</h1>
      <p className="text-xs">{post.data?.createdAt.toLocaleDateString()}</p>
      <p className="max-w-2xl">{post.data?.content}</p>
      <div className="flex w-full max-w-2xl justify-between">
        <Link href="/">Back</Link>
        <button className="text-red-500" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogPostDetailPage;
