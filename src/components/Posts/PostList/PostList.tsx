import React, { useEffect, useState } from "react";
import { getPost, IPostData } from "../../../api/post.api";
import { EachPost } from "../EachPost/EachPost";

export const PostList: React.FC<{}> = () => {
  const [postData, setPostData] = useState<IPostData[]>([]);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    getPost(currPage).then((item) => {
      const newPost = [...postData, item];
      setPostData(newPost);
    });
  }, [currPage]);

  if (postData.length === 0) {
    return <h1>Loading...</h1>;
  }

  const FetchHandler = () => {
    setCurrPage(currPage + 1);
  };

  return (
    <>
      <ul>
        {postData.map((post) => (
          <EachPost key={post.id} postData={post} />
        ))}
      </ul>
      <button onClick={FetchHandler}>Fetch More</button>
    </>
  );
};
