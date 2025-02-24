import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchInfinitePosts } from "../api/postsApi";

export default function InfinitePosts() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["infinite-posts"],
    queryFn: fetchInfinitePosts,
    getNextPageParams: (lastPage, allPages) => allPages.length + 1,
  });

  return (
    <div>
      <h2>Infinite Scrolling Posts</h2>
      {data?.pages.map((group, i) => (
        <ul key={i}>
          {group.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ))}
      {hasNextPage && <button onClick={fetchNextPage}>Load More</button>}
    </div>
  );
}
