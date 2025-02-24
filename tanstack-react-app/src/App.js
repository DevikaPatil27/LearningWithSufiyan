import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import InfinitePosts from "./components/InfinitePosts";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>TanStack React Query Demo</h1>
      <AddPost />
      <PostList />
      <InfinitePosts />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
