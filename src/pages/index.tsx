import BlogPostCard from "~/components/BlogPostCard";
import { api } from "~/utils/api";

export default function Home() {
  const posts = api.posts.getAll.useQuery();
  return (
    <ul className="space-y-1">
      {posts.data?.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}
