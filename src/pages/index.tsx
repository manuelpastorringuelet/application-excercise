import BlogPostCard from "~/components/BlogPostCard";
import { api } from "~/utils/api";

export default function Home() {
  const posts = api.posts.getAll.useQuery();
  return (
    <main className="flex flex-1 items-center justify-center bg-slate-500 text-white">
      {/* Display a list of all blog posts with their titles and creation dates. */}
      <ul className="space-y-1">
        {posts.data?.map((post) => (
          <BlogPostCard key={post.id} post={post}/>
        ))}
      </ul>
    </main>
  );
}
