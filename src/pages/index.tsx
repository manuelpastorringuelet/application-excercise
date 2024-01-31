import BlogPostCard from "~/components/BlogPostCard";
import { api } from "~/utils/api";

export default function Home() {
  const posts = api.posts.getAll.useQuery();

  if (posts.isLoading) return <p>Loading...</p>;

  if (posts.isError) return <p>Failed to load posts</p>;

  if (!posts.data?.length) return <p>No posts found</p>;

  return (
    <ul className="w-2/3 max-w-3xl">
      {posts.data?.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}
