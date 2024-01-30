import Link from "next/link";
import { useRouter } from "next/router";

import { Button, buttonVariants } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";

import { api } from "~/utils/api";

const BlogPostDetailPage = () => {
  const router = useRouter();

  const { toast } = useToast();

  const postId = router.query.id as string;
  const post = api.posts.getOne.useQuery(postId);

  const deletePost = api.posts.delete.useMutation();

  const onDelete = () => {
    deletePost
      .mutateAsync(postId)
      .then(() =>
        toast({
          variant: "destructive",
          title: "Post deleted",
          description: "Your post has been deleted successfully",
          duration: 2000,
        })
      )
      .then(() => router.push("/"))
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <div className="flex w-2/3 max-w-2xl flex-col gap-2">
      <h1 className="text-2xl">{post.data?.title}</h1>
      <p className="text-xs text-slate-600">
        {post.data?.createdAt.toLocaleDateString()}
      </p>
      <p>{post.data?.content}</p>
      <div className="mt-5 flex w-full max-w-2xl justify-between">
        <Link className={buttonVariants({ variant: "outline" })} href="/">
          Back
        </Link>
        <Button variant="ghost" className="hover:bg-red-500" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BlogPostDetailPage;
