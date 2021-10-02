import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost, IPostData } from "../../../api/post.api";

interface RouteParams {
  id: string;
}

export const SinglePost: React.FC<{}> = () => {
  const [singlePost, setSinglePost] = useState<IPostData>();

  const params = useParams<RouteParams>();

  useEffect(() => {
    getPost(+params.id).then((data) => {
      setSinglePost(data);
    });
  }, [params.id]);

  if (!singlePost) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h3>{singlePost.title}</h3>
      <p>{singlePost.body}</p>
    </div>
  );
};
