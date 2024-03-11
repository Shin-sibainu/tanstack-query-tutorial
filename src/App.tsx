import { useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from "./components/Posts";
import Post from "./components/Post";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient: QueryClient = new QueryClient();

function App() {
  const [postId, setPostId] = useState<number>(-1);

  return (
    <QueryClientProvider client={queryClient}>
      <p>
        以下の投稿を閲覧する際、初めて読み込むときはローディング状態になることに気づくでしょう。しかし、このリストに戻ってすでに訪れた投稿を再度クリックすると、瞬時にロードされ、目の前でバックグラウンドリフレッシュが行われるのを見ることができます！
        <strong>
          (より長いローディング時間をシミュレートするために、ネットワーク速度を制限する必要があるかもしれません。)
        </strong>
      </p>
      {postId > -1 ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
