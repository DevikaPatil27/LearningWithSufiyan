import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPost } from "../api/postsApi";
import { useState } from "react";

export default function AddPost() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); // Refresh post list
      setTitle("");
    },
  });

  return (
    <div>
      <input
        type="text"
        placeholder="New Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => mutation.mutate({ title, body: "Content" })}>
        Add Post
      </button>
      {mutation.isLoading && <p>Adding post...</p>}
      {mutation.isError && <p>Error adding post</p>}
    </div>
  );
}
