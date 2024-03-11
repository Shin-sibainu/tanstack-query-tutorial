import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "../hooks/usePosts";

const Posts = ({
  setPostId,
}: {
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();

  return (
    <div>
      <h1>ポスト一覧</h1>
      <div>
        {status === "pending" ? (
          "読み込み中..."
        ) : status === "error" ? (
          <span>エラー: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map((post) => (
                <p key={post.id}>
                  <a
                    href="#"
                    onClick={() => setPostId(post.id)}
                    style={
                      queryClient.getQueriesData(["post", post.id])
                        ? { fontWeight: "bold", color: "green" }
                        : {}
                    }
                  >
                    {post.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Posts;
