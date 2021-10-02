import React from "react";
import { PostList } from "../Posts/PostList/PostList";

export const PostPage: React.FC<{}> = () => {
  return (
    <>
      <h1>Posts</h1>
      <PostList />
    </>
  );
};
