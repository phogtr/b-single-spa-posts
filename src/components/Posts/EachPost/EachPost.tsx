import React from "react";
import { IPostData } from "../../../api/post.api";

interface IEachPostProps {
  postData: IPostData;
}

export const EachPost: React.FC<IEachPostProps> = ({ postData }) => {
  return (
    <li>
      <div>
        <h3>{postData.title}</h3>
        <p>{postData.body}</p>
      </div>
    </li>
  );
};
