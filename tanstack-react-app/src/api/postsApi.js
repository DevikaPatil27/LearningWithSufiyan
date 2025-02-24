export const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export const addPost = async (newPost) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to add post");
  return res.json();
};

export const fetchInfinitePosts = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=5`
  );
  return res.json();
};
