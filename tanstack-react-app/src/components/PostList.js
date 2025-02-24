import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/postsApi";

export default function PostList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts:{error.message}</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
