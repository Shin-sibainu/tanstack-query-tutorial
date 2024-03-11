import React from "react";
import { usePost } from "../hooks/usePosts";

const Post = ({
  postId,
  setPostId,
}: {
  postId: number;
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { status, data, error, isFetching } = usePost(postId);

  return (
    <div>
      <div>
        <a onClick={() => setPostId(-1)} href="#">
          Back
        </a>
      </div>
      {!postId || status === "pending" ? (
        "読み込み中..."
      ) : status === "error" ? (
        <span>エラー：{error.message}</span>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.body}</p>
          </div>
          <div>{isFetching ? "Background Updating" : ""}</div>
        </>
      )}
    </div>
  );
};

export default Post;
