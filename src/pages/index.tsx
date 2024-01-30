import { api } from "~/utils/api";

export default function Home() {
  const posts = api.posts.getAll.useQuery();
  return (
    <main className="flex flex-1 items-center justify-center bg-slate-500 text-white">
      {/* Display a list of all blog posts with their titles and creation dates. */}
      <ul className="space-y-1">
        {posts.data?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p className="text-sm text-slate-400">
              {post.createdAt.toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
